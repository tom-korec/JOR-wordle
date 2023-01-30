import React, { useState } from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import { WordInput } from "./WordInput";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import { GameOverBanner } from "./GameOverBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = useState(null);

  const [guessInputValue, setGuessInputValue] = useState("");

  const [guessedWords, setGuessedWords] = useState([]);

  const emptyRows = NUM_OF_GUESSES_ALLOWED - guessedWords.length;

  const rowCellsArray = range(0, 5);

  return (
    <>
      <div className="guess-results">
        {guessedWords.map(({ id, guess }) => (
          <p className="guess" key={id}>
            {rowCellsArray.map((index) => (
              <span key={index} className={`cell ${guess[index].status}`}>
                {guess[index].letter}
              </span>
            ))}
          </p>
        ))}
        {range(0, emptyRows).map((key) => (
          <p className="guess" key={key}>
            {rowCellsArray.map((key) => (
              <span key={key} className={"cell"} />
            ))}
          </p>
        ))}
      </div>
      {gameStatus ? (
        <GameOverBanner status={gameStatus} guessesCount={guessedWords.length} answer={answer} />
      ) : (
        <WordInput
          guess={guessInputValue}
          setGuess={setGuessInputValue}
          onGuess={() => {

            setGuessedWords([
              ...guessedWords,
              { id: Math.random(), guess: checkGuess(guessInputValue, answer) },
            ]);

            if (guessInputValue === answer){
                setGameStatus("victory")
            } else if (guessedWords.length === 5){
                setGameStatus("lose")
            }
          }}
        />
      )}
    </>
  );
}

export default Game;
