import React from "react";
import '../Styles/challenges.css';

interface Challenge8Props {
    setIsVisible8: React.Dispatch<React.SetStateAction<boolean>>;
}

const Challenge1: React.FC<Challenge8Props> = ({
    setIsVisible8,
}) => {
    const handleChallenge8 = (): void => {
        console.log('8');
    }

    const alertClick = () => {
        alert('This is not the right button.');
    }

    return (
        <div className='challenge-container'>
        <h2>Challenge 8</h2>
        <button className="other8-btn" onClick={alertClick}>Click me!</button>
        <button className="challenge8-btn-style" onClick={handleChallenge8}>Click me!</button>
        </div>
    )
}

export default Challenge1;

/*
Megoldás: pointer-events: none; Kikapcsolása
*/