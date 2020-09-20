const router = require("express").Router()
const bcrypt = require("bcryptjs")
const passport = require("passport")

let User = require("./../models/user.model")

// const Key = "ju324n7423a8zm7nr"

// Get All Users request

// router.route(`/${Key}`).get((req,res) => {
//     User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json(`This is the ERROR: ${err}`))
// })

// Get a Single User Request

// router.route("/:id").get((req, res) => {
//     User.findById(req.params.id)
//         .then(foundUser => res.json(foundUser))
//         .catch(err => res.status(404).json(`Error: ${err}`))
// })


// Delete a User

// router.route("/delete/:id").delete((req,res) => {
//     User.findByIdAndDelete(req.params.id)
//         .then(res.json("Account Deleted Succesfuly"))
//         .catch(err => res.status(404).json(`Error: ${err}`))
// })



// Register / Sign Up New User

router.route("/add").post((req,res) => {

    User.findOne({username: req.body.username}, async (err,doc) => {
        if (err) throw err
        if (doc) res.send("User already exists")
        if (!doc) {
            const username = req.body.username
            const email = req.body.email
            const hashedPass = await bcrypt.hash(req.body.password, 10)

            const newUser = new User({
                username: username,
                password: hashedPass,
                email: email
            })

            newUser.save()
                .then(() => res.json("User Added"))
                .catch(err => res.status(400).json(`This is the BE ERROR: ${err}`))
        }
    })
})


// Login Users

router.route("/login").post((req, res, next) => {

    passport.authenticate("local", (err, user, info) => {
        if (err) throw err
        if (!user) res.send("No user exists with that info")
        else {
            req.logIn(user, err => {
                if (err) throw err
                res.send("success")
                // console.log(req.user)
            })
        }
    }) (req, res, next)
})



// Update User Info

// router.route("/update/:id").post((req,res) => {
//     User.findById(req.params.id)
//         .then( foundUser => {
//             foundUser.username = req.body.username
//             foundUser.password = req.body.password
//             foundUser.email = req.body.email
//             foundUser.hpass = req.body.hpass

//             foundUser.save()
//                 .then(res.json("Profile Updated Succesufly"))
//                 .catch(err => res.status(400).json(`This is the ERROR: ${err}`))
//         })
//         .catch(err => res.status(404).json(`User not found, error: ${err}`))
        
// })

module.exports = router