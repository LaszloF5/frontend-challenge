import React from "react";

interface Challenge2Props {
  challenge2Text: string;
  setIsVisible2: React.Dispatch<React.SetStateAction<boolean>>
  setIsVisible3: React.Dispatch<React.SetStateAction<boolean>>
}

const Challenge2: React.FC<Challenge2Props> = ({ challenge2Text, setIsVisible2, setIsVisible3 }) => {

  const handleChallenge2 = () => {
    setIsVisible2(false);
    setIsVisible3(true);
  }

  return (
    <div className='challenge-container'>
      <h2>Challenge 2</h2>
      <p>{challenge2Text}</p>
      <button className="challenge2-btn-style" onClick={handleChallenge2}>Click me!</button>
    </div>
  );
};

export default Challenge2;

/*
Megoldás: visibility: hidden; Kikapcsolása v visible
*/

