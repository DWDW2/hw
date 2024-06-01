const {eventLogger} = require('./logger')

const ErrorHandler = (err, req, res, next)=>{
    eventLogger(`${err.name}:${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errorLogs.log')
    console.log(err.stack)

    const status = res.statusCode ? res.statusCode : 500
    res.json({err: err.message})
}

module.exports = ErrorHandler