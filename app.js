const express = require('express')
const mongoose = require('mongoose')
const pizzaRouter = require("./routes/pizzaRouter");


const app = express()

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/pizza', pizzaRouter)

const PORT = 5000
const mongoUrlSema ='mongodb+srv://sema:123@cluster0.2hlcl.mongodb.net/Cluster0?retryWrites=true&w=majority'
const mongoUrlSveta = "mongodb+srv://bobiklovik7:1234qwer@cluster0.iqtby.mongodb.net/app?retryWrites=true&w=majority"

async function start() {
    try {
        await mongoose.connect(mongoUrlSema), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error', e.message)
        process.exit(1)
    }
}
start()