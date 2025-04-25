import React, { useRef } from "react";

interface challenge7Props {
  challengeText: string;
  setIsVisible6: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVisible7: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVisible8: React.Dispatch<React.SetStateAction<boolean>>;
}

const Challenge7: React.FC<challenge7Props> = ({
  challengeText,
  setIsVisible6,
  setIsVisible7,
  setIsVisible8
}) => {

    const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const buttons = Array.from({ length: 250 }, (_, i) => i + 1);

  const handleDontClick = () => {
    alert('I warned you!');
    setIsVisible6(true);
    setIsVisible7(false);
  }

  const handleChallenge7 = (i: number) => {
    const el = buttonRefs.current[i];
    if (el instanceof Element) {
      const computedStyle = getComputedStyle(el);
      const filterValue = computedStyle.filter;
      if (!filterValue.includes("blur")) {
        setIsVisible7(false);
        setIsVisible8(true);
      }
    }
  };
  

  return (
    <div className="challenge-container">
      <div className="challenge-text-container">
        <h2>Challenge 7</h2>
        <p>{challengeText}</p>
      </div>
      <div className="challenge7-div">
        {buttons.map((num, i) => (
          <button
          ref={(el) => {buttonRefs.current[i] = el}}
          className="btn challenge7-btn-style"
          key={num}
          onClick={() => {
            if (i === 200) {
              handleChallenge7(i);
            } else {
              alert('I told you...');
              handleDontClick();
            }
          }}
        >
          {i === 200 ? "Click me!" : `Don't click me!`}
        </button>
        ))}
      </div>
    </div>
  );
};

export default Challenge7;

/*
Megoldás: filter kikapcsolása.
*/
