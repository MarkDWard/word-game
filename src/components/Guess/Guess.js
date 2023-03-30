import React from 'react';
import { checkGuess } from '../../game-helpers';

const Guess = ({guess, setGuess, guesses, setGuesses, answer, won, setWon}) => {

  const tryGuess = (event) => {
    event.preventDefault();
    setWon(guess === answer.toUpperCase());
    const guessArray = checkGuess(guess, answer);
    const guessData = {id: guesses.length, value: guessArray};
    const nextGuess = [...guesses, guessData];
    setGuesses(nextGuess);
    setGuess('');
  }

  return <>
    <form className="guess-input-wrapper" onSubmit={tryGuess}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input id="guess-input" 
        disabled={won || guesses[6]}
        type="text"
        style={{"textTransform":"uppercase"}}
        pattern='^[A-Za-z]{5}'
        maxLength="5"
        value={guess}
        onChange={event => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  </>;
}

export default Guess;
