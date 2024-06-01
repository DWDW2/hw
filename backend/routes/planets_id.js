const express = require('express')
const router = express.Router()
const swapi = require('swapi-node')
const path = require('path')
const { default: axios } = require('axios');
let planet_id = 1
router.get('/:planet_id', (req, res) => {
    const { planet_id } = req.params;

    axios.get(`https://swapi.dev/api/planets/${planet_id}`)
        .then((result) => {
            res.json(result.data);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});
module.exports = router

