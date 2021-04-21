const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const app = express()

app.use(express.json({ extended: true }))
app.use('/auth', require('./routes/auth.routes'))
app.use('/link', require('./routes/link.routes'))
app.use('/desk' , require('./routes/desk.auth'))

const PORT = config.get('port') || 5000


async function start() {
    try {
        await mongoose.connect(config.get('mongoURI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))

    } catch (e) {
        console.log('Server Error',e.message)
        process.exit(1)
    }
}

start()

