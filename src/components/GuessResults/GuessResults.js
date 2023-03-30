import React from 'react';
import { range } from '../../utils';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'

function GuessResults({guesses, setGuesses, answer, won, resetGame}) {

  const letters = range(0, 5);
  const words = range(0, NUM_OF_GUESSES_ALLOWED);

  const grid = words.map((word, i) => {
    const row = letters.map((letter, j) => {
      const thisClass = `cell ${guesses[i]?.value[j]?.status}`;
      return <span className={thisClass} key={i+"_"+j}>{guesses[i]?.value[j]?.letter}</span>
    });
    return <span className="guess" key={i}>{row}</span>
  });

  return (
    <>
    <div className="guess-results">
      {grid}
    </div>
    {won && 
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in <strong>{guesses.length} guesses</strong>.
        </p>
        <p>
          <button className='button' name='resetButton' onClick={resetGame}>Restart Game</button>
        </p>
      </div>
    }
    {guesses.length === NUM_OF_GUESSES_ALLOWED && !won &&
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        <p>
          <button className='button' name='resetButton' onClick={resetGame}>Restart Game</button>
        </p>
      </div>
    }
    </>
  )
}

export default GuessResults;




