import React from 'react';
import '../Styles/challenges.css';

interface challenge4Props {
    challengeText: string;
    setIsVisible4: React.Dispatch<React.SetStateAction<boolean>>;
    setIsVisible5: React.Dispatch<React.SetStateAction<boolean>>;
}

const Challenge4: React.FC<challenge4Props> = ({
    challengeText,
    setIsVisible4,
    setIsVisible5
}) => {

    const handleChallenge4 = () => {
        setIsVisible4(false);
        setIsVisible5(true);
    }

    return (
        <div className='challenge-container'>
        <div className="challenge-text-container">
        <h2>Challenge 4</h2>
        <p>{challengeText}</p>
      </div>
        <div className="challenge4-div challenge4-container">
            <button className='btn challenge4-btn-style' onClick={handleChallenge4}>Click me!</button>
            </div>
        </div>
    )
}

export default Challenge4;

/*
Megoldás: z-index átírása 2 v magasabb értékre.
*/