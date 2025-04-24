import React from "react";

interface Challenge3Props {
  challengeText: string;
  setIsVisible3: React.Dispatch<React.SetStateAction<boolean>>;
  setIsVisible4: React.Dispatch<React.SetStateAction<boolean>>;
}
const Challenge3: React.FC<Challenge3Props> = ({
  challengeText,
  setIsVisible3,
  setIsVisible4,
}) => {
  const handleChallenge3 = () => {
    setIsVisible3(false);
    setIsVisible4(true);
  };

  return (
    <div className="challenge-container challenge3-div">
      <div className="challenge-text-container">
        <h2>Challenge3</h2>
        <p>{challengeText}</p>
      </div>
      <div className="challenge3-container">
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div>
                              <div>
                                <div>
                                  <div>
                                    <div>
                                      <div>
                                        <div>
                                          <div>
                                            <div>
                                              <div>
                                                <div>
                                                  <div>
                                                    <div>
                                                      <div>
                                                        <div>
                                                          <div>
                                                            <div>
                                                              <div>
                                                                <div>
                                                                  <div>
                                                                    <button
                                                                      className="btn challenge3-btn-style"
                                                                      onClick={
                                                                        handleChallenge3
                                                                      }
                                                                    >
                                                                      Click me!
                                                                    </button>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenge3;

/*
Megoldás: display: none; Kikapcsolása v block
*/
