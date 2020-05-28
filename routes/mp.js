const express = require('express')
const qs = require('querystring')
const request = require('request')
const router = express.Router()

const APPID = "wxb6a27ad25a37c5f2"
const SECRET = "85065f9d2a10187b15f205dc4c29c9f4"

/**
 * @api {get} /api/mp/getOpenId 获取openid
 * @apiDescription 获取openid
 * @apiName getOpenId
 * @apiGroup 小程序接口
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
 * @apiSampleRequest http://121.196.124.171:8080/api/mp/getOpenId
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
  // console.log(qs.stringify(options))

  let url = `https://api.weixin.qq.com/sns/jscode2session?${qs.stringify(options)}`


  request(url,(err,response,body)=>{
    if(!err){
      if(response.statusCode===200){
        // console.log(typeof body)

        let bodyObj = JSON.parse(body)
        if(bodyObj.errcode){
          res.json({
            success: false,
            code: bodyObj.errcode,
            msg: bodyObj.errmsg,
            data: null
          })
        }else{
          res.json({
            success: true,
            code: 200,
            msg: '请求成功',
            data: {
              openid:bodyObj.openid
            }
          })

        }
      }
    }
  })


})


module.exports = router