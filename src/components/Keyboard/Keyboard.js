import React from 'react';
import {KEYBOARD_LETTERS} from '../../constants'

function Keyboard({guesses}) {

  const grid = KEYBOARD_LETTERS.map((row, i) => {
    const keys = row[i].map((letter, j) => {
      // TODO: Need to update the class based on the letter's status
      const classValue = `key unknown`;
      return <span className={classValue} key={letter}>{letter}</span>
    });
    return <span className="keyboard-row" key={i}>{keys}</span>
  });

  return (
    <>
    <div className="keyboard">
      {grid}
    </div>
    </>
  )
}

export default Keyboard;
