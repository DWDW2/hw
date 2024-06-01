const AllowedOrigins = require('./AllowedOrigins')

const corsOptions = {
    origin: (origin, callback)=>{
        if(AllowedOrigins.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        } else{
            callback(new Error('it is not allowed by CORS'))
        }
    },
    credentials: true,
    OptionSuccessStatus: 200
}

module.exports = corsOptions