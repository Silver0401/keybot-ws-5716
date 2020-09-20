const User = require("./models/user.model")
const bcrypt = require("bcryptjs")
const LocalStrategy = require("passport-local").Strategy
const passport = require("passport")

const PassportConfig = () => {

    passport.use(
        new LocalStrategy((username, password, done) => {
            User.findOne({username: username}, (err, user) => {
                if (err) throw err
                if (!user) return done(null, false)
                if (user) {
                    bcrypt.compare(password, user.password, (err, res) => {
                        if (err) throw err
                        if (res === true){
                            return done(null, user)
                        } else {
                            return done(null, false)
                        }
                    })
                }
            })
        })
    )

    passport.serializeUser((user, cb) => {
        cb(null, user.id)
    })

    passport.deserializeUser((id, cb) => {
        User.findOne({_id: id}, (err, user) => {
            cb(err, user)
        })
    })
}

module.exports = PassportConfig