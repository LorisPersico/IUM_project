var express = require('express');
const {Game} = require("../databases/database");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/games', async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    console.error('Errore nel recupero delle partite:', error);
    res.status(500).json({ error: 'Errore nel recupero delle partite' });
  }
});


module.exports = router;
