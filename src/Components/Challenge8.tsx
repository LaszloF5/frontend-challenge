import React from "react";
import '../Styles/challenges.css';

interface Challenge8Props {
    setIsVisible8: React.Dispatch<React.SetStateAction<boolean>>;
    setIsVisible9: React.Dispatch<React.SetStateAction<boolean>>;
}

const Challenge8: React.FC<Challenge8Props> = ({
    setIsVisible8,
    setIsVisible9
}) => {
    const handleChallenge8 = (): void => {
        setIsVisible8(false);
        setIsVisible9(true);
    }

    const alertClick = () => {
        alert('This is not the right button.');
    }

    return (
        <div className='challenge-container'>
        <h2>Challenge 8</h2>
        <button className="btn other8-btn" onClick={alertClick}>Click me!</button>
        <button className="btn challenge8-btn-style" onClick={handleChallenge8}>Click me!</button>
        </div>
    )
}

export default Challenge8;

/*
Megoldás: pointer-events: none; Kikapcsolása
*/