const request_origin = require('request')
const request = require('request-promise')
const express = require('express')
const app = express()
const port = 80

const appID = "wx7d7c1ee9a4a012b0";
const appSecret = "2a14d5c586b8e301814caad56202cd0c";

app.get('/get_token', (req, res) => {

    request(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appID}&secret=${appSecret}`)
    .then((body) => {
        res.send( body )
    })

});

app.get('wx_test',(req,res) => {
    req.param


})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

