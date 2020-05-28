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
          "content": "{\n    \"success\" : \"true\",\n    \"code\":200,\n    \"data\":{\n      \"appid\":\"xxxxxx\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://go-fishing.cn/api/mp/getOpenId"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "小程序接口"
  }
] });
