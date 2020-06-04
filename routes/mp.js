const express = require('express')
const qs = require('querystring')
const query = require('../db/query')
const request = require('request')
const router = express.Router()
const fs = require('fs')
const path = require('path')
const APPID = "wxb6a27ad25a37c5f2"
const SECRET = "85065f9d2a10187b15f205dc4c29c9f4"
const multer = require('multer');
const upload = multer({dest: 'upload/'})

/**
 * @api {post} /api/mp/getOpenId 获取openid
 * @apiDescription 获取openid
 * @apiName getOpenId
 * @apiGroup 小程序用户
 * @apiParam {string} code wx.login时候获取
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 * {
 *    success:true,
 *    code:200,
 *    msg:'成功',
 *    data:{
 *      openid:'xxx'
 *    }
 * }
 * @apiSampleRequest https://go-fishing.cn/api/mp/getOpenId
 * @apiVersion 1.0.0
 */
router.post('/getOpenid', (req, res) => {
  let {code} = req.body
  let options = {
    appid: APPID,
    secret: SECRET,
    js_code: code,
    grant_type: "authorization_code"
  }
  let url = `https://api.weixin.qq.com/sns/jscode2session?${qs.stringify(options)}`
  /**
   * 请求小程序接口，获取openid
   */
  request(url, (err, response, body) => {
    if (!err) {
      if (response.statusCode === 200) {
        let bodyObj = JSON.parse(body)
        if (bodyObj.errcode) {
          res.json({
            success: false,
            code: bodyObj.errcode,
            msg: bodyObj.errmsg,
            data: null
          })
        } else {
          res.json({
            success: true,
            code: 200,
            msg: '请求成功',
            data: {
              openid: bodyObj.openid
            }
          })
        }
      }
    }
  })
})

/**
 * @api {post} /api/mp/regUser 注册用户
 * @apiDescription 注册用户
 * @apiName regUser
 * @apiGroup 小程序用户
 * @apiParam {string} openid
 * @apiParam {string} avatarUrl 头像
 * @apiParam {string} province 省份
 * @apiParam {string} city 城市
 * @apiParam {string} country 国家
 * @apiParam {string} nickName 城市
 * @apiParam {number} gender 性别 1=男 2=女
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 * {
 *    success:true,
 *    code:200,
 *    msg:'注册成功',
 *    data:null
 * }
 * @apiSampleRequest https://go-fishing.cn/api/mp/regUser
 * @apiVersion 1.0.0
 */
router.post('/regUser', (req, res) => {
  console.log(req.body)
  let {body} = req
  let sql = `INSERT INTO user (openid,gender,avatarUrl,province,country,city,nickName,point,createTime) VALUES (?,?,?,?,?,?,?,?,?)`
  query(sql, [
    body.openid,
    body.gender,
    body.avatarUrl,
    body.province,
    body.country,
    body.city,
    body.nickName,
    body.point,
    new Date()
  ]).then(data => {
    res.json({
      success: true,
      code: 200,
      msg: `注册成功`,
      data: null
    })
  }).catch(err => {
    let {errno, code, sqlMessage} = err
    res.json({
      success: false,
      code: errno,
      msg: `${sqlMessage} [${code}]`,
      data: null
    })

  })
})


/**
 * @api {post} /api/mp/getUserById 根据ID查找用户
 * @apiDescription 根据id查找用户
 * @apiName getUserById
 * @apiGroup 小程序用户
 * @apiParam {number} [id]
 * @apiParam {string} [openid]
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 * {
 *    success:true,
 *    code:200,
 *    msg:'获取成功',
 *    data:{
 *      id:'1',
 *      openid:'xxx',
 *      avatarUrl:'xx',
 *      point:100,
 *      createTime:'2020-04-19',
 *      updateTime:'2020-04-19',
 *      purview:1,
 *      province:'河北',
 *      city:'廊坊',
 *      nickName:'helen',
 *      gender:1,
 *      mobile:null
 *    }
 * }
 * @apiSampleRequest https://go-fishing.cn/api/mp/getUserById
 * @apiVersion 1.0.0
 */
router.post('/getUserById', (req, res) => {
  let {id, openid} = req.body
  let sql = id ?
    `SELECT * FROM user WHERE id=${id}`
    :
    `SELECT * FROM user WHERE openid='${openid}'`;
  query(sql).then(data => {
    res.json({
      success: true,
      code: 200,
      msg: `获取成功`,
      data: data[0] ? data[0] : null
    })
  }).catch(err => {
    let {errno, code, sqlMessage} = err
    res.json({
      success: false,
      code: errno,
      msg: `${sqlMessage} [${code}]`,
      data: null
    })
  })
})


/**
 * @api {post} /api/mp/getUserList 获取用户列表
 * @apiDescription 获取用户列表
 * @apiName getUserList
 * @apiGroup 小程序用户
 * @apiParam {number} pageSize 每页多少条 pageSize=20
 * @apiParam {number} currentPage 每页多少条 currentPage=0
 * @apiParam {date} [startTime] 注册时间范围开始
 * @apiParam {date} [endTime] 注册时间范围结束
 * @apiParam {string} [city] 城市
 * @apiParam {string} [nickName] 昵称
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 * {
 *    success:true,
 *    code:200,
 *    msg:'获取成功',
 *    data:[{
 *      id:'1',
 *      openid:'xxx',
 *      avatarUrl:'xx',
 *      point:100,
 *      createTime:'2020-04-19',
 *      updateTime:'2020-04-19',
 *      purview:1,
 *      province:'河北',
 *      city:'廊坊',
 *      nickName:'helen',
 *      gender:1,
 *      mobile:null
 *    },
 *    ...
 *    ]
 * }
 * @apiSampleRequest https://go-fishing.cn/api/mp/getUserList
 * @apiVersion 1.0.0
 */
router.post('/getUserList', (req, res) => {

})


/**
 * @api {post} /api/mp/setUserPurviewById 设置用户权限
 * @apiDescription 设置用户权限
 * @apiName setUserPurviewById
 * @apiGroup 小程序用户
 * @apiParam {number} id 用户id
 * @apiParam {number} purview 权限 purview=1 1普通用户 2钓点管理员 3用户管理员 4超级管理员
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 * {
 *    success:true,
 *    code:200,
 *    msg:'设置成功',
 *    data:null
 * }
 * @apiSampleRequest https://go-fishing.cn/api/mp/setUserPurviewById
 * @apiVersion 1.0.0
 */
router.post('/setUserPurviewById', (req, res) => {

})


/**
 * @api {post} /api/mp/setUserMobile 完善用户手机号
 * @apiDescription 完善用户手机号
 * @apiName setUserMobile
 * @apiGroup 小程序用户
 * @apiParam {number} id 用户id
 * @apiParam {string} mobile 用户手机号
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 * {
 *    success:true,
 *    code:200,
 *    msg:'设置成功',
 *    data:null
 * }
 * @apiSampleRequest https://go-fishing.cn/api/mp/setUserMobile
 * @apiVersion 1.0.0
 */
router.post('/setUserMobile', (req, res) => {

})

/**
 * @api {post} /api/mp/updateUser 修改用户信息
 * @apiDescription 完善用户手机号
 * @apiName updateUser
 * @apiGroup 小程序用户
 * @apiParam {number} id 用户id
 * @apiParam {string} [mobile] 手机
 * @apiParam {string} [city] 城市
 * @apiParam {string} [nickName] 昵称
 * @apiParam {string} [avatarUrl] 头像
 * @apiParam {string} [gender] 性别
 * @apiParam {string} [purview] 省份
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 * {
 *    success:true,
 *    code:200,
 *    msg:'设置成功',
 *    data:null
 * }
 * @apiSampleRequest https://go-fishing.cn/api/mp/updateUser
 * @apiVersion 1.0.0
 */
router.post('/updateUser', (req, res) => {

})


/**
 * @api {post} /api/mp/upload 上传图片
 * @apiDescription 上传图片
 * @apiName upload
 * @apiGroup 小程序钓点
 * @apiParam {file} [basanImg] 钓点图片
 * @apiParam {file} [avatar] 用户头像
 * @apiParam {file} [video] 视频
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 * {
 *    success:true,
 *    code:200,
 *    msg:'成功',
 *    data:'xxx.png'
 * }
 * @apiVersion 1.0.0
 */
router.post('/upload', upload.single('basanImg'), function (req, res, next) {
  let file = req.file;
  let extname = path.extname(file.originalname)  //fs.existsSync(file.originalname)
  let newName = file.destination + new Date() * 1 + extname
  fs.rename(file.path, newName, function (err) {
    if (err) {
      res.json({
        success: false,
        code: 500,
        msg: '上传失败',
        data: null
      })

    } else {
      res.json({
        success: true,
        code: 200,
        msg: '上传成功',
        data: `${req.protocol}://${req.hostname}/${newName}`
      })
    }
  })
});


/**
 * @api {post} /api/mp/deleteFile 删除文件
 * @apiDescription 删除文件
 * @apiName deleteFile
 * @apiGroup 小程序钓点
 * @apiParam {string} [fileName] 钓点图片
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 * {
 *    success:true,
 *    code:200,
 *    msg:'成功',
 *    data:null
 * }
 * @apiSampleRequest https://go-fishing.cn/api/mp/deleteFile
 * @apiVersion 1.0.0
 */
router.post('/deleteFile', (req, res) => {
  let {fileName} = req.body
  fs.unlink(`upload/${fileName}`, err => {
    if (err) {
      res.json({
        success: false,
        data: null,
        code: err.errno,
        msg: JSON.stringify(err)
      })
    } else {
      res.json({
        success: true,
        data: null,
        code: 200,
        msg: '文件删除成功'
      })
    }
  })
})


/**
 * @api {post} /api/mp/addBasan 添加钓点
 * @apiDescription 添加钓点
 * @apiName addBasan
 * @apiGroup 小程序钓点
 * @apiParam {number} userId
 * @apiParam {string} openid
 * @apiParam {string} address 地址
 * @apiParam {string} addressInfo 详细地址
 * @apiParam {string} province 省份
 * @apiParam {string} city 城市
 * @apiParam {string} district 区域
 * @apiParam {Number} basanType 钓点类型 1野钓 2黑坑 3水库
 * @apiParam {String} fishType 鱼种
 * @apiParam {String} desc 描述
 * @apiParam {String} lat 经度
 * @apiParam {String} lon 纬度
 * @apiParam {String} imgs 图片
 * @apiParam {String} video 视频
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 * {
 *    success:true,
 *    code:200,
 *    msg:'添加成功',
 *    data:null
 * }
 * @apiSampleRequest https://go-fishing.cn/api/mp/addBasan
 * @apiVersion 1.0.0
 */
router.post('/addBasan', (req, res) => {
  let {body} = req
  console.log(body)
  let {
    userId,
    openid,
    imgs,
    video,
    des,
    lat,
    lon,
    province,
    city,
    district,
    address,
    addressInfo,
    basanType,
    fishType
  } = body
  let sql = `INSERT INTO basan (userId,openid,imgs,video,des,lat,lon,province,city,district,address,addressInfo,basanType,fishType,createTime) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
  query(sql, [
    userId,
    openid,
    imgs,
    video,
    des,
    lat,
    lon,
    province,
    city,
    district,
    address,
    addressInfo,
    basanType,
    fishType,
    new Date()
  ]).then(data => {
    res.json({
      success: true,
      code: 200,
      msg: `钓点添加成功`,
      data: null
    })
  }).catch(err => {
    console.log(err)
    let {errno, code, sqlMessage} = err
    res.json({
      success: false,
      code: errno,
      msg: `${sqlMessage} [${code}]`,
      data: null
    })
  })
})


/**
 * @api {post} /api/mp/updateBasanById 更新钓点
 * @apiDescription 更新钓点
 * @apiName updateBasan
 * @apiGroup 小程序钓点
 * @apiParam {Number} id
 * @apiParam {Number} reviewed 审核状态 0审核不通过 1审核通过
 * @apiParam {Number} showIndex 是否展示首页 0不展示 1展示
 * @apiParam {Number} showMap 是否展示到热力地图 0不展示 1展示
 * @apiParam {Number} mustPoint 解锁费用
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 * {
 *    success:true,
 *    code:200,
 *    msg:'添加成功',
 *    data:null
 * }
 * @apiSampleRequest https://go-fishing.cn/api/mp/addBasan
 * @apiVersion 1.0.0
 */


/**
 * @api {post} /api/mp/BasanClickCountById 点击量
 * @apiDescription 点击量
 * @apiName BasanClickCountById
 * @apiGroup 小程序钓点
 * @apiParam {Number} id
 * @apiParam {Number} click 点击数+1
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 * {
 *    success:true,
 *    code:200,
 *    msg:'成功',
 *    data:null
 * }
 * @apiSampleRequest https://go-fishing.cn/api/mp/BasanClickCountById
 * @apiVersion 1.0.0
 */




module.exports = router