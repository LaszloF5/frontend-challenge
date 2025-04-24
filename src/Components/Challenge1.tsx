import React from "react";
import "../Styles/challenges.css";

interface Challenge1Props {
  challengeText: string;
  setIsVisible1: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVisible2: React.Dispatch<React.SetStateAction<boolean>>;
}

const Challenge1: React.FC<Challenge1Props> = ({
  challengeText,
  setIsVisible1,
  setIsVisible2,
}) => {
  const handleChallenge1 = (): void => {
    setIsVisible1(false);
    setIsVisible2(true);
  };
  return (
    <div className="challenge-container">
      <div className="challenge-text-container">
        <h2>Challenge 1</h2>
        <p>{challengeText}</p>
      </div>
      <div className="challenge1-container">
        <button className="btn challenge1-btn-style" onClick={handleChallenge1}>
          Click me!
        </button>
      </div>
    </div>
  );
};

export default Challenge1;

/*
Megoldás: pointer-events: none; Kikapcsolása
*/

/*
A disabled nem jó megoldás, mert a disabled hatására nem regisztrálódik az onClick, ha a felhasználó eltávolítja a disabled-et devTools-ban, akkor pedig újra kéne renderelni hogy regisztrálva legyen a klikkesemény, ami itt nem kiveitelezhető.
*/
