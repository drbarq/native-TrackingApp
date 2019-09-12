const express = require('express')
const router = express.Router()

router.post('/signup', (rec, res) => {
    console.log(rec.body)
    res.send("you made a post request")
})

module.exports = router 