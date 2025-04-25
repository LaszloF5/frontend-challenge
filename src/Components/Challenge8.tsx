import React, {useState} from "react";
import "../Styles/challenges.css";

interface Challenge8Props {
  challengeText: string;
  setIsVisible8: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVisible9: React.Dispatch<React.SetStateAction<boolean>>;
}

const Challenge8: React.FC<Challenge8Props> = ({
  challengeText,
  setIsVisible8,
  setIsVisible9,
}) => {

  const [funnyText, setFunnyText] = useState<boolean>(false);

  const myFunnyText: string = 'clicked-button';

  const handleOtherClick = () => {
    alert("This is not the right button.");
    setFunnyText(true);
  }

  const handleChallenge8 = (): void => {
    setIsVisible8(false);
    setIsVisible9(true);
  };

  return (
    <div className="challenge-container">
      <div className="challenge-text-container">
        <h2>Challenge 8</h2>
        <p>{challengeText}</p>
      </div>
      <div className="challenge8-container">
        <button className={`btn other8-btn ${funnyText ? 'clicked-button' : ''}`} onClick={handleOtherClick}>
          Click me!
        </button>
        <button className="btn challenge8-btn-style" onClick={handleChallenge8}>
          Click me!
        </button>
      </div>
    </div>
  );
};

export default Challenge8;

/*
Megoldás: pointer-events: none; Kikapcsolása
*/
