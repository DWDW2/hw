const express = require('express')
const router = express.Router()
const swapi = require('swapi-node')
const path = require('path')
const { default: axios } = require('axios');
router.get('/:ships_id', (req, res) => {
    const {ships_id} = req.params;
    axios.get(`https://swapi.dev/api/starships/${ships_id}/`)
        .then((result) => {
            res.json(result.data);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
});
module.exports = router

