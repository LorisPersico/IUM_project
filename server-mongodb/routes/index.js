var express = require('express');
const {Game, Appearances} = require("../databases/database");
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

router.get('/api/appearances', async (req, res) => {
  try {
    const appearances = await Appearances.find();
    res.json(appearances);
  } catch (error) {
    console.error('Errore nel recupero delle appearances:', error);
    res.status(500).json({ error: 'Errore nel recupero delle appearances' });
  }
});

module.exports = router;
