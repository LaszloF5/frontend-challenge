import React from 'react';

interface challenge5Props {
    challengeText: string;
    setIsVisible5: React.Dispatch<React.SetStateAction<boolean>>;
    setIsVisible6: React.Dispatch<React.SetStateAction<boolean>>;
}

const Challenge5: React.FC<challenge5Props> = ({
    challengeText,
    setIsVisible5,
    setIsVisible6
}) => {

    const handleChallenge5 = () => {
        setIsVisible5(false);
        setIsVisible6(true);
    }

    return (
        <div className='challenge-container'>
        <div className="challenge-text-container">
        <h2>Challenge5</h2>
        <p>{challengeText}</p>
      </div>
        <div className="challenge5-div">
            <button className='btn challenge5-btn-style' onClick={handleChallenge5}>Click me!</button>
        </div>
        </div>
    )
}

export default Challenge5;

/*
    Megoldás: challenge5-div height tulajdonságát kell módosítani, hogy látszódjon a gomb. Utána már kattintható lesz.
*/