import React from "react";

export const WordInput = ({ guess, setGuess, onGuess }) => {
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        if (guess.length !== 5) return;

        onGuess(guess);

        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(e) => {
          const value = e.target.value;

          if (value.length <= 5) {
            setGuess(value.toUpperCase());
          }
        }}
      />
    </form>
  );
};
