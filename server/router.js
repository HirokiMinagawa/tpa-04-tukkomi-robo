const express = require('express');
const getRandomTukkomi = require('./get-random-tukkomi');

const tukkomiRoboRouter = express.Router();

tukkomiRoboRouter.get('/', (req, res) => {
  const { phrase } = req.query;
  console.log('phrase = ', phrase);

  //
  // TODO
  //
  // if phrase が空っぽだったらエラーメッセージを送ろう。
  // else phrase にツッコミを追加して送ろう。 (HINT: get-random-tukkomi.js が役に立つかも）

  const tukkomiPhrase = getRandomTukkomi.getRandomTukkomi();

  if (!phrase) {
    res.send('文字が入力されておりません。');
  } else {
    res.send(`${phrase}...て、${tukkomiPhrase}`);
  }
});

module.exports = tukkomiRoboRouter;
