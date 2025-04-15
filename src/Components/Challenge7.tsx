import React, { useRef } from "react";

interface challenge7Props {
  setIsVisible7: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVisible8: React.Dispatch<React.SetStateAction<boolean>>;
}

const Challenge7: React.FC<challenge7Props> = ({
  setIsVisible7,
  setIsVisible8
}) => {

    const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const buttons = Array.from({ length: 250 }, (_, i) => i + 1);

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
      <h2>Challenge 7</h2>
      <div className="challenge7-div">
        {buttons.map((num, i) => (
          <button
          ref={(el) => {buttonRefs.current[i] = el}}
          className="challenge7-btn-style"
          key={num}
          onClick={() => {
            if (i === 200) {
              handleChallenge7(i);
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
