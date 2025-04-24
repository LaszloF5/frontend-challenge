import React from "react";

interface Challenge9Props {
    setIsVisible9: React.Dispatch<React.SetStateAction<boolean>>;
}

const Challenge9: React.FC<Challenge9Props> = ({
    setIsVisible9
}) => {

    const handleClick = () =>{
        console.log('Clicked.')
    }
    return (
        <div className="challenge-container">
        <h2>Challenge9</h2>
        <div className="challenge9-div">
            <div className="inner-div">
            <button className="btn challenge9-btn-style" onClick={handleClick}>Click me!</button>
            </div>
        </div>
        </div>
    )
}

export default Challenge9;