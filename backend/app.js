require('dotenv').config()
let express = require('express');
let path = require('path')
let app = express()
let cors = require('cors')
let corsOptions = require('./config/corsOptions')
let {logger,eventLogger} = require('./middlewares/logger')
let Erorhandler = require('./middlewares/errorhandler');
const cookieParser = require('cookie-parser');
let PORT = process.env.PORT || 3500

app.use(logger)
app.use(cookieParser())
app.use(cors(corsOptions))
app.use('/', require('./routes/root'))
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/planets', require('./routes/planets_id'))
app.use('/planets', require('./routes/planets_main'))
app.use('/ships', require('./routes/ships_id'))
app.use('/ships', require('./routes/ship_main'))
app.use('/characters', require('./routes/characters_id'))
app.use('/characters', require('./routes/characters_main'))
app.use(express.json)

app.all("*", (req, res) => {
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if(req.accepts('json')){
        res.json({message: '404 Not Found'})
    } else {
        res.type('text').send('404 not Found')
    }
})
app.use(Erorhandler)


app.listen(PORT, () => console.log(`server running on port ${PORT}`))
