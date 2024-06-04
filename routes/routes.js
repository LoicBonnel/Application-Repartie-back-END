const express = require('express');
const router = express.Router();
const controllerBlague = require('../controller/blagues');
const {random} = require('../controller/blagues');

router.get("/", (req,res) => {
    res.status(200).json({success: "racine API"});
});

router.post('/', (req, res) => {
    res.status(200).json({ success: 'Bravo'});
});


router.get('/blagues', controllerBlague.find);
router.post('/blagues', controllerBlague.create);
router.get('/blagues/random', random);
router.get('/blagues/:id', controllerBlague.findById);

module.exports = router;