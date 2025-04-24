import React from 'react';

interface challenge6Props {
    challengeText: string;
    setIsVisible6: React.Dispatch<React.SetStateAction<boolean>>;
    setIsVisible7: React.Dispatch<React.SetStateAction<boolean>>;
}

const Challenge6: React.FC<challenge6Props> = ({
    challengeText,
    setIsVisible6,
    setIsVisible7
}) => {

    const handleChallenge6 = () => {
        setIsVisible6(false);
        setIsVisible7(true);
    }

    return (
        <div className='challenge-container'>
        <div className="challenge-text-container">
        <h2>Challenge6</h2>
        <p>{challengeText}</p>
      </div>
        <div className="challenge6-div challenge6-container">
            <button className='btn challenge6-btn-style' onClick={handleChallenge6}>Click me!</button>
            </div>
        </div>
    )
}

export default Challenge6;

/*
Megoldás: left: 0;
*/