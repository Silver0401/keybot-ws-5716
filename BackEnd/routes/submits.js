const router = require("express").Router()

let Submit = require("../models/submit.model")

router.route("/data").get((req,res) => {
    Submit.find()
        .then(data => res.json(data))
        .catch(err => res.status(404).json(`Error: ${err}`))
})



router.route("/add").post((req, res) => {
    const name = req.body.name
    const email = req.body.email
    const phone = req.body.phone
    const subject = req.body.subject
    const message = req.body.message

    const newSubmit = new Submit({ 
        name,
        email,
        phone,
        subject,
        message
    })

    newSubmit.save()
        .then(() => res.json("added"))
        .catch(err => res.status(400).json(`This is the ERROR: ${err}`))
})


module.exports = router