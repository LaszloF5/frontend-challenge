import React, { useState } from "react";
import Challenge1 from "./Components/Challenge1";
import Challenge2 from "./Components/Challenge2";
import Challenge3 from "./Components/Challenge3";
import Challenge4 from "./Components/Challenge4";
import Challenge5 from "./Components/Challenge5";
import Challenge6 from "./Components/Challenge6";
import Challenge7 from "./Components/Challenge7";
import Challenge8 from "./Components/Challenge8";
import Challenge9 from "./Components/Challenge9";
import "./App.css";

function App() {
  const [isVisible1, setIsVisible1] = useState<boolean>(true);
  const [isVisible2, setIsVisible2] = useState<boolean>(false);
  const [isVisible3, setIsVisible3] = useState<boolean>(false);
  const [isVisible4, setIsVisible4] = useState<boolean>(false);
  const [isVisible5, setIsVisible5] = useState<boolean>(false);
  const [isVisible6, setIsVisible6] = useState<boolean>(false);
  const [isVisible7, setIsVisible7] = useState<boolean>(false);
  const [isVisible8, setIsVisible8] = useState<boolean>(false);
  const [isVisible9, setIsVisible9] = useState<boolean>(false);

  const challengeText: string = `Click the button!`;
  const challenge2Text: string = `Click the .... button?`;
  return (
    <div className="App">
      {isVisible1 && (
        <Challenge1
          challengeText={challengeText}
          setIsVisible1={setIsVisible1}
          setIsVisible2={setIsVisible2}
        />
      )}
      {isVisible2 && (
        <Challenge2
          challenge2Text={challenge2Text}
          setIsVisible2={setIsVisible2}
          setIsVisible3={setIsVisible3}
        />
      )}
      {isVisible3 && (
        <Challenge3
          challengeText={challengeText}
          setIsVisible3={setIsVisible3}
          setIsVisible4={setIsVisible4}
        />
      )}
      {isVisible4 && (
        <Challenge4
          challengeText={challengeText}
          setIsVisible4={setIsVisible4}
          setIsVisible5={setIsVisible5}
        />
      )}
      {isVisible5 && (
        <Challenge5
          challengeText={challengeText}
          setIsVisible5={setIsVisible5}
          setIsVisible6={setIsVisible6}
        />
      )}
      {isVisible6 && (
        <Challenge6
          challengeText={challengeText}
          setIsVisible6={setIsVisible6}
          setIsVisible7={setIsVisible7}
        />
      )}
      {isVisible7 && (
        <Challenge7
          challengeText={challengeText}
          setIsVisible7={setIsVisible7}
          setIsVisible8={setIsVisible8}
        />
      )}
      {isVisible8 && (
        <Challenge8
          challengeText={challengeText}
          setIsVisible8={setIsVisible8}
          setIsVisible9={setIsVisible9}
        />
      )}
      {isVisible9 && (
        <Challenge9
          setIsVisible9={setIsVisible9}
          challengeText={challengeText}
        />
      )}
    </div>
  );
}

export default App;

//challenge4 buggos

//tesztelni
