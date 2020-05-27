const express = require('express')
/**
 * @api {get} /api/mp/getOpenId 获取openid
 * @apiDescription 获取openid
 * @apiName getOpenId
 * @apiGroup 小程序接口
 * @apiParam {string} code wx.login时候获取
 * @apiParam {string} appid 小程序appid
 * @apiParam {string} secret 小程序﻿secret
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "success" : "true",
 *      "code":200
 *      "data" : null
 *  }
 * @apiSampleRequest https://go-fishing.cn/api/mp/getOpenId
 * @apiVersion 1.0.0
 */

const router = express.Router()


router.get('/getOpenid', (req, res) => {
  console.log(req.params)
  res.send('getOpenId')
})


module.exports = router