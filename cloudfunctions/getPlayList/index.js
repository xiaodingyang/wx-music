// 云函数入口文件
const cloud = require('wx-server-sdk')
// axios
const axios = require('axios')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    const URL = 'http://musicapi.xiecheng.live/persionalized'
    const playList = await axios.get(URL).then(res=>{
        return JSON.parse(res).result
    })
    console.log('aaaa',playList);
    return {
        event,
        openid: wxContext.OPENID,
        appid: wxContext.APPID,
        unionid: wxContext.UNIONID,
    }
}