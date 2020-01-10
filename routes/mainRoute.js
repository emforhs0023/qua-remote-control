var express = require('express');
var db = require('../db/mainDB');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var MQTTPublish = require("../services/MQTTPublish")
var router = express.Router();

router.get('/', (req, res, next) => {
    res.render('main');
});

router.get('/1', (req, res, next) => {
    res.render('main1');
});
router.get('/2', (req, res, next) => {
    res.render('pump');
});
// 웰태그
router.post('/dataInfo', (req, res, next) => {
    try{
        if(req.body.length == undefined) {
             console.log(req.body)
        } else {
            for(var i=0; i<req.body.length; i++) {
                let header = req.body[i].header
                let uid = req.body[i].uid
                let action = req.body[i].sub.action
                let part = req.body[i].sub.part
                let timestart = req.body[i].timealarm.timestart
                let timestop = req.body[i].timealarm.timestop
                
                // console.log(sub.action)
                MQTTPublish.start(header, uid, action, part, timestart, timestop)
            }
        }
        
        
    }catch(e){
        next(e)
    }
})

router.post('/dataInfo1', (req, res, next) => {
    try{
        let header = req.body.header
        let uid = req.body.uid
        let action = req.body.sub.action
        let part = req.body.sub.part
        
        // let timestart = req.body.timestart
        // let timestop = req.body.timestop
        MQTTPublish.start(header, uid, action, part)
        // if(req.body.length == undefined) {
        //      console.log(req.body)
        // } else {
        //     for(var i=0; i<req.body.length; i++) {
        //         let header = req.body[i].header
        //         let uid = req.body[i].uid
        //         let action = req.body[i].sub.action
        //         let part = req.body[i].sub.part
        //         let timestart = req.body[i].timealarm.timestart
        //         let timestop = req.body[i].timealarm.timestop
                
        //         // console.log(sub.action)
        //         MQTTPublish.start(header, uid, action, part, timestart, timestop)
        //     }
        // }
        
        
    }catch(e){
        next(e)
    }
})


module.exports = router;
