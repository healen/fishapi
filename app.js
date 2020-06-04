
const fs = require('fs');
const https = require('https');
const http = require('http');
const express = require('express');
const path = require('path');
const mp = require('./routes/mp');
const app = express();
app.all('/api/*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', '3.2.1')
  res.header('Content-type', 'application/json;charset=utf-8')
  next()
})
app.use('/doc',express.static(path.join(__dirname,'doc')))
app.use('/upload',express.static(path.join(__dirname,'upload')))



app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

/*
* 配置端口
* */
const httpProt = 8080;
const httpsProt = 8443;
/*
* 测试服务器状况
* */

app.use('/api/mp',mp)


/*
* 读取证书文件
* */
let key = fs.readFileSync('ssl/3972272_go-fishing.cn.key', 'utf8');
let cert = fs.readFileSync('ssl/3972272_go-fishing.cn.pem', 'utf8');
let credentials = {key, cert};






/*
* 预定义两种服务器
* */
let serverHttps = https.createServer(credentials, app);
let serverHttp = http.createServer(app);

/*
* 启动https服务
* */
serverHttps.listen(httpsProt, '0.0.0.0');
console.log(`https服务已启动端口 ${httpsProt}`)
/*
* 启动http服务
* */
serverHttp.listen(httpProt, '0.0.0.0');
console.log(`http服务已启动端口 ${httpProt}`)

