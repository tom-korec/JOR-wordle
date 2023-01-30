import React from "react";

export const GameOverBanner = ({ status, guessesCount, answer }) => {
  if (!status) return null;

  if (status === "victory") {
    return (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {guessesCount} guesses</strong>.
        </p>
      </div>
    );
  }

  if (status === "lose") {
    return (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }
};
