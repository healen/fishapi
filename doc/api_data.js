define({ "api": [
  {
    "type": "post",
    "url": "/api/mp/addUser",
    "title": "2.注册用户",
    "description": "<p>注册用户</p>",
    "name": "addUser",
    "group": "A小程序用户",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "openid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "avatarUrl",
            "description": "<p>头像</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "province",
            "description": "<p>省份</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>城市</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "nickName",
            "description": "<p>城市</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "gender",
            "description": "<p>性别 1=男 2=女</p>"
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
          "content": "{\n   success:true,\n   code:200,\n   msg:'注册成功',\n   data:null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8080/api/mp/addUser"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "A小程序用户"
  },
  {
    "type": "get",
    "url": "/api/mp/getOpenId",
    "title": "1.获取openid",
    "description": "<p>获取openid</p>",
    "name": "getOpenId",
    "group": "A小程序用户",
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
    "groupTitle": "A小程序用户"
  },
  {
    "type": "get",
    "url": "/api/mp/getUserById",
    "title": "3.根据ID查找用户",
    "description": "<p>根据id查找用户</p>",
    "name": "getUserById",
    "group": "A小程序用户",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "openid",
            "description": ""
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
          "content": "{\n   success:true,\n   code:200,\n   msg:'获取成功',\n   data:{\n     id:'1',\n     openid:'xxx',\n     avatarUrl:'xx',\n     point:100,\n     createTime:'2020-04-19',\n     updateTime:'2020-04-19',\n     purview:1,\n     province:'河北',\n     city:'廊坊',\n     nickName:'helen',\n     gender:1,\n     mobile:null\n   }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8080/api/mp/getUserById"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "A小程序用户"
  },
  {
    "type": "get",
    "url": "/api/mp/getUserList",
    "title": "4.获取用户列表",
    "description": "<p>根据id查找用户</p>",
    "name": "getUserList",
    "group": "A小程序用户",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页多少条 pageSize=20</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "currentPage",
            "description": "<p>每页多少条 currentPage=0</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "startTime",
            "description": "<p>注册时间范围开始</p>"
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": true,
            "field": "endTime",
            "description": "<p>注册时间范围结束</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>城市</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "nickName",
            "description": "<p>昵称</p>"
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
          "content": "{\n   success:true,\n   code:200,\n   msg:'获取成功',\n   data:[{\n     id:'1',\n     openid:'xxx',\n     avatarUrl:'xx',\n     point:100,\n     createTime:'2020-04-19',\n     updateTime:'2020-04-19',\n     purview:1,\n     province:'河北',\n     city:'廊坊',\n     nickName:'helen',\n     gender:1,\n     mobile:null\n   },\n   ...\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8080/api/mp/getUserList"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "A小程序用户"
  },
  {
    "type": "post",
    "url": "/api/mp/setUserMobile",
    "title": "6.完善用户手机号",
    "description": "<p>完善用户手机号</p>",
    "name": "setUserMobile",
    "group": "A小程序用户",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>用户手机号</p>"
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
          "content": "{\n   success:true,\n   code:200,\n   msg:'设置成功',\n   data:null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8080/api/mp/setUserMobile"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "A小程序用户"
  },
  {
    "type": "post",
    "url": "/api/mp/setUserPurviewById",
    "title": "5.设置用户权限",
    "description": "<p>根据id查找用户</p>",
    "name": "setUserPurviewById",
    "group": "A小程序用户",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "purview",
            "description": "<p>权限 purview=1 1普通用户 2钓点管理员 3用户管理员 4超级管理员</p>"
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
          "content": "{\n   success:true,\n   code:200,\n   msg:'设置成功',\n   data:null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8080/api/mp/setUserPurviewById"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "A小程序用户"
  },
  {
    "type": "post",
    "url": "/api/mp/updateUser",
    "title": "7.修改用户信息",
    "description": "<p>完善用户手机号</p>",
    "name": "updateUser",
    "group": "A小程序用户",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "mobile",
            "description": "<p>手机</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>城市</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "nickName",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "avatarUrl",
            "description": "<p>头像</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "gender",
            "description": "<p>性别</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "purview",
            "description": "<p>省份</p>"
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
          "content": "{\n   success:true,\n   code:200,\n   msg:'设置成功',\n   data:null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8080/api/mp/updateUser"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "A小程序用户"
  },
  {
    "type": "post",
    "url": "/api/mp/BasanClickCountById",
    "title": "3.点击量",
    "description": "<p>点击量</p>",
    "name": "BasanClickCountById",
    "group": "B小程序钓点",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "click",
            "description": "<p>点击数+1</p>"
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
          "content": "{\n   success:true,\n   code:200,\n   msg:'成功',\n   data:null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8080/api/mp/BasanClickCountById"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "B小程序钓点"
  },
  {
    "type": "post",
    "url": "/api/mp/addBasan",
    "title": "1.添加钓点",
    "description": "<p>添加钓点</p>",
    "name": "addBasan",
    "group": "B小程序钓点",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "userId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "openid",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "address",
            "description": "<p>地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "addressInfo",
            "description": "<p>详细地址</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "province",
            "description": "<p>省份</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>城市</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "district",
            "description": "<p>区域</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "basanType",
            "description": "<p>钓点类型 1野钓 2黑坑 3水库</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "fishType",
            "description": "<p>鱼种</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "desc",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lat",
            "description": "<p>经度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lon",
            "description": "<p>纬度</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "isCharge",
            "description": "<p>是否收费</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "charge",
            "description": "<p>费用</p>"
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
          "content": "{\n   success:true,\n   code:200,\n   msg:'添加成功',\n   data:null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8080/api/mp/addBasan"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "B小程序钓点"
  },
  {
    "type": "post",
    "url": "/api/mp/updateBasanById",
    "title": "2.更新钓点",
    "description": "<p>更新钓点</p>",
    "name": "updateBasan",
    "group": "B小程序钓点",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "reviewed",
            "description": "<p>审核状态 0审核不通过 1审核通过</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "showIndex",
            "description": "<p>是否展示首页 0不展示 1展示</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "showMap",
            "description": "<p>是否展示到热力地图 0不展示 1展示</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mustPoint",
            "description": "<p>解锁费用</p>"
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
          "content": "{\n   success:true,\n   code:200,\n   msg:'添加成功',\n   data:null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:8080/api/mp/addBasan"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "B小程序钓点"
  }
] });
