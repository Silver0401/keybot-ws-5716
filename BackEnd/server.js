const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const cors = require("cors")
const passport = require("passport")
const cookieParser = require("cookie-parser")
const session = require("express-session")
// const bodyParser = require("body-parser")
// const passportLocal = require("passport-local").Strategy
const PassportConfig = require("./passport.config")
require("dotenv").config()

const app = express()
let port = process.env.PORT || 5000


// App uses -----------------------------------------------------------------------------

app.use(express.json())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))
app.use(passport.initialize())
app.use(passport.session())
PassportConfig()

// app.use(cors({
//     origin: "http://localhost:3000",
//     credentials: true
// }))

app.use(session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
}))

app.use(cookieParser("secretcode"))

// Mongo DataBase File Exchange Config --------------------------------------------------

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
const dataBase = mongoose.connection
dataBase.on("error", error => console.log(error))
dataBase.once("open", () => console.log("Connected to MongooseDB"))


// Basic Config Files to use React as Front-End ------------------------------------------
// And the Back-end thingy

if (process.env.WS === "production"){

  app.use(express.static(path.resolve(__dirname, "./../build")))

  app.get("*/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./../build", "index.html"))
  })
  
} else {

  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/backendTemplate.html")
  })

}
  

// WebPage Paths -------------------------------------------------------------------------

// Users Info DataBase Path
const Users = require("./routes/users")
app.use("/UsersInfo", Users)


// Submits Requests
const Submits = require("./routes/submits")
app.use("/Submits", Submits)




// Express Listening to Create WebSite -----------------------------------------------------

app.listen(port, () => console.log(`listening on port: ${port}`))
