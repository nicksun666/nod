let express = require('express');
let router = express.Router();
let Mock = require('mockjs');

router.all('/lottery.do', (req,res)=>{
    let data = {
        data: {
            dayLotterTimesList: 10,
            description: '抽奖活动',
            endDate:12312312312312,
            id: 5,
            name: '3月抽奖',
            prizeList: [
                {id: 4, lotteryId: 5, type: 4, name: "50元红包", value: 200},
                {id: 5, lotteryId: 5, type: 3, name: "爱奇艺会员1个月", value: 500},
                {id: 6, lotteryId: 5, type: 3, name: "夏凉坐垫", value: 10},
                {id: 8, lotteryId: 5, type: 1, name: "幸福西饼代金券", value: 200},
                {id: 0, name: "谢谢参与"},
                {id: 9, lotteryId: 5, type: 3, name: "美的遥控落地扇", value: 100}
            ],
            startDate: 1492241168000
        },
        erroeCode : 0,
        msg: ''
    }
    res.json(data)
})
module.exports = router
