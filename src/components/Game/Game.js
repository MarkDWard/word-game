import React from 'react';
import Guess from '../Guess';
import GuessResults from '../GuessResults';
import Keyboard from '../Keyboard/Keyboard';

import { sample } from '../../utils';
import { WORDS } from '../../data';

function Game() {
  const [guess, setGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState([]);
  const [won, setWon] = React.useState(false);
  const [answer, setAnswer] = React.useState(sample(WORDS));

  const resetGame = () => {
    setGuesses([]);
    setWon(false);
    setGuess('');
    setAnswer(sample(WORDS));
  }

  return (
  <>
    <GuessResults guesses={guesses} setGuesses={setGuesses} won={won} answer={answer} resetGame={resetGame} />
    <Keyboard guesses={guesses} />
    <Guess guess={guess} setGuess={setGuess} guesses={guesses} setGuesses={setGuesses} 
      answer={answer} won={won} setWon={setWon} />
  </>
  )
}

export default Game;
