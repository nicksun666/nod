const express = require('express')
const app = express()
const superagent = require('superagent')
const charset = require('superagent-charset')
const cheerio = require('cheerio')
charset(superagent)
const baseUrl = 'https://www.qqtn.com'
app.get('/', (req, res) => {
    // res.send('<h1>231</h1>')
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'PUT,GET,POST,DELETE,OPITIONS')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    let type = req.query.type
    let page = req.query.page
    type = type || 'weixin'
    page = page || '1'
    let route = `tx/${type}tx_${page}.html`
    superagent.get(baseUrl + route).charset('gb2312').end(function (err, sres){
        let items = [];
        if(err){
            console.log('ERR'+err)
            res.json({code:400,msg:err,sets: items})
            return
        }
        let $ = cheerio.load(sres.text)
        $('div.g-main-bg ul.g-gxlist-imgbox li a').each(function(idx,el){
            let $el = $(el)
            let $subElement = $el.find('img')
            let thumbImgSrc = $subElement.attr('src')
            items.push({
                title: $(el).attr('title'),
                href: $el.attr('href'),
                thumbSrc: thumbImgSrc
            })
        })
        res.json({code: 200,msg: '',data:items})
    })
})
app.listen(3000,function(req,res){
    console.log('success')
})