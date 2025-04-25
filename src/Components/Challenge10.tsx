import React from "react";
import "../Styles/challenges.css";

interface Challenge10Props {
  setIsVisible10: React.Dispatch<React.SetStateAction<boolean>>;
  challengeText: string;
}

const Challenge10: React.FC<Challenge10Props> = ({
  setIsVisible10,
  challengeText,
}) => {
  return (
    <div className="challenge-container">
      <div className="challenge-text-container">
        <h2>Challenge 10</h2>
        <p>{challengeText}</p>
      </div>
      <div className="challenge10-container">
        <button className="btn challenge10-btn-style">Click Me!</button>
      </div>
    </div>
  );
};

export default Challenge10;
