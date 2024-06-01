const path = require('path')
const express = require('express')
const {format} = require('date-fns')
const {v4: uuid} = require('uuid')
const fs = require('fs')
const fsPromises = fs.promises

const eventLogger = async (message, logFileName) => {
    const Datetime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`
    const logItem = `${Datetime}\t${uuid()}\t${message}\n`

    try{
        if(!fs.existsSync(path.join(__dirname, '..', 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logFileName), logItem)
    }catch(err){console.log(err)}
};

const logger = (req, res, next)=>{
    eventLogger(`${req.method}\t${req.url}\t${req.headers.origin}`, 'reqLog.log')
    console.log(`${req.method} ${req.path}`)
    next()
};

module.exports = {eventLogger, logger}
