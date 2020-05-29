const express = require('express')
const qs = require('querystring')
const query = require('../db/query')
const request = require('request')
const router = express.Router()
const APPID = "wxb6a27ad25a37c5f2"
const SECRET = "85065f9d2a10187b15f205dc4c29c9f4"



/**
 * @api {get} /api/mp/getOpenId 1.获取openid
 * @apiDescription 获取openid
 * @apiName getOpenId
 * @apiGroup A小程序钓点
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
 * @apiSampleRequest http://localhost:8080/api/mp/getOpenId
 * @apiVersion 1.0.0
 */
router.get('/getOpenid', (req, res) => {
  let {code} = req.query
  let options = {
    appid: APPID,
    secret: SECRET,
    js_code: code,
    grant_type: "authorization_code"
  }
  let url = `https://api.weixin.qq.com/sns/jscode2session?${qs.stringify(options)}`


  query(`select * from visitor`).then(res=>{
    console.log(res)
  })

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
 * @api {post} /api/mp/addUser 2.注册用户
 * @apiDescription 注册用户
 * @apiName addUser
 * @apiGroup A小程序钓点
 * @apiParam {string} openid
 * @apiParam {string} avatarUrl 头像
 * @apiParam {string} province 省份
 * @apiParam {string} city 城市
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
 * @apiSampleRequest http://localhost:8080/api/mp/addUser
 * @apiVersion 1.0.0
 */






/**
 * @api {get} /api/mp/getUserById 3.根据ID查找用户
 * @apiDescription 根据id查找用户
 * @apiName getUserById
 * @apiGroup A小程序钓点
 * @apiParam {number} id
 * @apiParam {string} openid
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
 * @apiSampleRequest http://localhost:8080/api/mp/getUserById
 * @apiVersion 1.0.0
 */



/**
 * @api {get} /api/mp/getUserList 4.获取用户列表
 * @apiDescription 根据id查找用户
 * @apiName getUserList
 * @apiGroup A小程序钓点
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
 * @apiSampleRequest http://localhost:8080/api/mp/getUserList
 * @apiVersion 1.0.0
 */



/**
 * @api {post} /api/mp/setUserPurviewById 5.设置用户权限
 * @apiDescription 根据id查找用户
 * @apiName setUserPurviewById
 * @apiGroup A小程序钓点
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
 * @apiSampleRequest http://localhost:8080/api/mp/setUserPurviewById
 * @apiVersion 1.0.0
 */


/**
 * @api {post} /api/mp/setUserMobile 6.完善用户手机号
 * @apiDescription 完善用户手机号
 * @apiName setUserMobile
 * @apiGroup A小程序钓点
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
 * @apiSampleRequest http://localhost:8080/api/mp/setUserMobile
 * @apiVersion 1.0.0
 */

/**
 * @api {post} /api/mp/updateUser 7.修改用户信息
 * @apiDescription 完善用户手机号
 * @apiName updateUser
 * @apiGroup A小程序钓点
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
 * @apiSampleRequest http://localhost:8080/api/mp/updateUser
 * @apiVersion 1.0.0
 */




/**
 * @api {post} /api/mp/addBasan 1.添加钓点
 * @apiDescription 添加钓点
 * @apiName addBasan
 * @apiGroup B小程序钓点
 * @apiParam {number} userId
 * @apiParam {string} openid
 * @apiParam {string} address 地址
 * @apiParam {string} addressInfo 详细地址
 * @apiParam {string} province 省份
 * @apiParam {string} city 城市
 * @apiParam {string} district 区域
 * @apiParam {Number} basanType 钓点类型 1野钓 2黑坑 3水库
 * @apiParam {String} fishType 鱼种
 * @apiParam {String} title 标题
 * @apiParam {String} desc 描述
 * @apiParam {String} lat 经度
 * @apiParam {String} lon 纬度
 * @apiParam {Number} isCharge 是否收费
 * @apiParam {Number} charge 费用
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 * {
 *    success:true,
 *    code:200,
 *    msg:'添加成功',
 *    data:null
 * }
 * @apiSampleRequest http://localhost:8080/api/mp/addBasan
 * @apiVersion 1.0.0
 */



/**
 * @api {post} /api/mp/updateBasanById 2.更新钓点
 * @apiDescription 更新钓点
 * @apiName updateBasan
 * @apiGroup B小程序钓点
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
 * @apiSampleRequest http://localhost:8080/api/mp/addBasan
 * @apiVersion 1.0.0
 */


/**
 * @api {post} /api/mp/BasanClickCountById 3.点击量
 * @apiDescription 点击量
 * @apiName BasanClickCountById
 * @apiGroup B小程序钓点
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
 * @apiSampleRequest http://localhost:8080/api/mp/BasanClickCountById
 * @apiVersion 1.0.0
 */




module.exports = router