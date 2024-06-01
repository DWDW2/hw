const express = require('express')
const router = express.Router()
const swapi = require('swapi-node')
const path = require('path')
const { default: axios } = require('axios');
router.get('/', (req, res) => {
    axios.get(`https://swapi.dev/api/planets/`)
        .then((result) => {
            res.json(result.data);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});
module.exports = router

