define({ "api": [
  {
    "type": "post",
    "url": "/api/mp/getOpenId",
    "title": "获取openid[完成]",
    "description": "<p>获取openid</p>",
    "name": "getOpenId",
    "group": "小程序用户",
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
        "url": "https://go-fishing.cn/api/mp/getOpenId"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "小程序用户"
  },
  {
    "type": "post",
    "url": "/api/mp/getUserById",
    "title": "根据ID查找用户[完成]",
    "description": "<p>根据id查找用户</p>",
    "name": "getUserById",
    "group": "小程序用户",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": true,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
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
        "url": "https://go-fishing.cn/api/mp/getUserById"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "小程序用户"
  },
  {
    "type": "post",
    "url": "/api/mp/getUserList",
    "title": "获取用户列表",
    "description": "<p>获取用户列表</p>",
    "name": "getUserList",
    "group": "小程序用户",
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
        "url": "https://go-fishing.cn/api/mp/getUserList"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "小程序用户"
  },
  {
    "type": "post",
    "url": "/api/mp/regUser",
    "title": "注册用户[完成]",
    "description": "<p>注册用户</p>",
    "name": "regUser",
    "group": "小程序用户",
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
            "field": "country",
            "description": "<p>国家</p>"
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
        "url": "https://go-fishing.cn/api/mp/regUser"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "小程序用户"
  },
  {
    "type": "post",
    "url": "/api/mp/setUserMobile",
    "title": "完善用户手机号",
    "description": "<p>完善用户手机号</p>",
    "name": "setUserMobile",
    "group": "小程序用户",
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
        "url": "https://go-fishing.cn/api/mp/setUserMobile"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "小程序用户"
  },
  {
    "type": "post",
    "url": "/api/mp/setUserPurviewById",
    "title": "设置用户权限",
    "description": "<p>设置用户权限</p>",
    "name": "setUserPurviewById",
    "group": "小程序用户",
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
        "url": "https://go-fishing.cn/api/mp/setUserPurviewById"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "小程序用户"
  },
  {
    "type": "post",
    "url": "/api/mp/updateUser",
    "title": "修改用户信息",
    "description": "<p>完善用户手机号</p>",
    "name": "updateUser",
    "group": "小程序用户",
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
        "url": "https://go-fishing.cn/api/mp/updateUser"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "小程序用户"
  },
  {
    "type": "post",
    "url": "/api/mp/BasanClickCountById",
    "title": "点击量",
    "description": "<p>点击量</p>",
    "name": "BasanClickCountById",
    "group": "小程序钓点",
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
        "url": "https://go-fishing.cn/api/mp/BasanClickCountById"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "小程序钓点"
  },
  {
    "type": "post",
    "url": "/api/mp/addBasan",
    "title": "添加钓点[完成]",
    "description": "<p>添加钓点</p>",
    "name": "addBasan",
    "group": "小程序钓点",
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
            "type": "String",
            "optional": false,
            "field": "imgs",
            "description": "<p>图片</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "video",
            "description": "<p>视频</p>"
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
        "url": "https://go-fishing.cn/api/mp/addBasan"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "小程序钓点"
  },
  {
    "type": "post",
    "url": "/api/mp/deleteFile",
    "title": "删除文件[完成]",
    "description": "<p>删除文件</p>",
    "name": "deleteFile",
    "group": "小程序钓点",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "fileName",
            "description": "<p>钓点图片</p>"
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
        "url": "https://go-fishing.cn/api/mp/deleteFile"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "小程序钓点"
  },
  {
    "type": "post",
    "url": "/api/mp/getBasanById",
    "title": "根据ID查询钓点",
    "description": "<p>根据ID查询钓点</p>",
    "name": "getBasanById",
    "group": "小程序钓点",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>钓点ID</p>"
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
          "content": "{\n   success:true,\n   code:200,\n   msg:'查询成功',\n   data:{...}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://go-fishing.cn/api/mp/getBasanById"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "小程序钓点"
  },
  {
    "type": "post",
    "url": "/api/mp/getBasanList",
    "title": "查询钓点[完成]",
    "description": "<p>查询钓点</p>",
    "name": "getBasanList",
    "group": "小程序钓点",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "type",
            "description": "<p>index：首页,me：我的钓点，fav:我收藏的钓点，map日历地图点</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "userId",
            "description": "<p>type=me/fav 必填</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>地址 default=0</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页多少条 default=20</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lat",
            "description": "<p>用户经度</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "lon",
            "description": "<p>用户纬度</p>"
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
          "content": "{\n   success:true,\n   code:200,\n   msg:'查询成功',\n   data:{\n     type:'index'\n     total:200,\n     page:0,\n     pageSize:20,\n     list:[...]\n   }\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "https://go-fishing.cn/api/mp/getBasanList"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "小程序钓点"
  },
  {
    "type": "post",
    "url": "/api/mp/updateBasanById",
    "title": "更新钓点",
    "description": "<p>更新钓点</p>",
    "name": "updateBasan",
    "group": "小程序钓点",
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
        "url": "https://go-fishing.cn/api/mp/updateBasanById"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "小程序钓点"
  },
  {
    "type": "post",
    "url": "/api/mp/upload",
    "title": "上传图片[完成]",
    "description": "<p>上传图片</p>",
    "name": "upload",
    "group": "小程序钓点",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": true,
            "field": "basanImg",
            "description": "<p>钓点图片</p>"
          },
          {
            "group": "Parameter",
            "type": "file",
            "optional": true,
            "field": "avatar",
            "description": "<p>用户头像</p>"
          },
          {
            "group": "Parameter",
            "type": "file",
            "optional": true,
            "field": "video",
            "description": "<p>视频</p>"
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
          "content": "{\n   success:true,\n   code:200,\n   msg:'成功',\n   data:'xxx.png'\n}",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "routes/mp.js",
    "groupTitle": "小程序钓点"
  }
] });
