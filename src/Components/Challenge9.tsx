import React from "react";

interface Challenge9Props {
    challengeText: string;
    setIsVisible9: React.Dispatch<React.SetStateAction<boolean>>;
    setIsVisible10: React.Dispatch<React.SetStateAction<boolean>>;
}

const Challenge9: React.FC<Challenge9Props> = ({
    challengeText,
    setIsVisible9,
    setIsVisible10
}) => {

    const handleClick = () =>{
        setIsVisible9(false);
        setIsVisible10(true);
    }
    return (
        <div className="challenge-container">
        <div className="challenge-text-container">
        <h2>Challenge 9</h2>
        <p>{challengeText}</p>
      </div>
        <div className="challenge9-div challenge9-container">
            <div className="inner-div">
            <button className="btn challenge9-btn-style" onClick={handleClick}>Click me!</button>
            </div>
        </div>
        </div>
    )
}

export default Challenge9;