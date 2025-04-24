import React from 'react';
import '../Styles/challenges.css';

interface challenge4Props {
    setIsVisible4: React.Dispatch<React.SetStateAction<boolean>>;
    setIsVisible5: React.Dispatch<React.SetStateAction<boolean>>;
}

const Challenge4: React.FC<challenge4Props> = ({
    setIsVisible4,
    setIsVisible5
}) => {

    const handleChallenge4 = () => {
        setIsVisible4(false);
        setIsVisible5(true);
    }

    return (
        <div className='challenge-container'>
        <h2>Challenge 4</h2>
        <div className="challenge4-div">
            <button className='btn challenge4-btn-style' onClick={handleChallenge4}>Click me!</button>
            </div>
        </div>
    )
}

export default Challenge4;

/*
Megoldás: z-index átírása 2 v magasabb értékre.
*/