const express = require('express')
const request = require('superagent')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
    return request
    .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.API_KEY}`)
    .then(resp => {
        res.json(resp.body)
        return null
    })
    .catch(err => {
        console.log(err.message)
    })
})


