import React, {useState} from "react";
import "../Styles/challenges.css";

interface Challenge10Props {
  setIsVisible10: React.Dispatch<React.SetStateAction<boolean>>;
  challengeText: string;
}

const Challenge10: React.FC<Challenge10Props> = ({
  setIsVisible10,
  challengeText,
}) => {

  const victoryText: string = 'Congratulations! You solved all challenges successfully!';

  const [isClicked, setIsClicked] = useState<boolean>(true);

  const handleClick = () => {
    setIsClicked(false);
  }

  return (
    <div className="challenge-container">
      <div className="challenge-text-container">
        <h2>Challenge 10</h2>
        <p>{challengeText}</p>
      </div>
      <div className="challenge10-container">
        {isClicked ? (<button className="btn challenge10-btn-style" onClick={handleClick}>Click Me!</button>) : victoryText}
      </div>
    </div>
  );
};

export default Challenge10;
