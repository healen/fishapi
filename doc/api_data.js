define({ "api": [
  {
    "type": "get",
    "url": "/api/mp/getOpenId",
    "title": "获取openid",
    "description": "<p>获取openid</p>",
    "name": "getOpenId",
    "group": "小程序接口",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>wx.login时候获取</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "result",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   success:true,\n   code:200,\n   msg:'成功',\n   data:{\n     openid:'xxx'\n   }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8080/api/mp/getOpenId"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "小程序接口"
  }
] });
