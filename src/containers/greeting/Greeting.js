import React, { useState, useContext } from "react";
import Typed from 'react-typed';
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.css";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const [isChecked1, setCard1] = useState(false);
  const [isChecked2, setCard2] = useState(false);
  const [isChecked3, setCard3] = useState(false);
  const [isChecked4, setCard4] = useState(false);
  const [isChecked5, setCard5] = useState(false);
  const [isChecked6, setCard6] = useState(false);

  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                <Typed
                  typeSpeed={80}
                  backSpeed={20}
                  strings={[
                    "Hi all, I'm <span class='accent'>Supraja</span><span className='wave-emoji'>👋</span>"
                  ]}
                  smartBackspace
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                  className="typed"
                />
                {/* {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span> */}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <div className="game-color">
              Lets have Some fun before you go to profile
            </div>
            <div className="font">
              hover on cards to play
            </div>
            <div className = "game-cards">
              <input type="image" className = "inputClass" src={isChecked1 ? require("../../assets/images/card1.png") : require("../../assets/images/question4.jpeg")}
                alt="Background" width="200" height="200"
                value={isChecked1}
                onMouseEnter={() => {
                  setCard1(!isChecked1);
                }}
                onMouseLeave={() => {
                  setCard1(!isChecked1);
                }}></input>
              <input type="image" className = "inputClass" src={isChecked2 ? require("../../assets/images/card2.png") : require("../../assets/images/question2.jpeg")}
                alt="Background" width="200" height="200"
                value={isChecked2}
                onMouseEnter={() => {
                  setCard2(!isChecked2);
                }}
                onMouseLeave={() => {
                  setCard2(!isChecked2);
                }}
                ></input>
              <input type="image" className = "inputClass" src={isChecked3 ? require("../../assets/images/card3.png"): require("../../assets/images/question3.png")}
                alt="Background" width="200" height="200"
                value={isChecked3}
                onMouseEnter={() => {
                  setCard3(!isChecked3);
                }}
                onMouseLeave={() => {
                  setCard3(!isChecked3);
                }}></input>
            </div>
            <div className = "game-cards">
              <input type="image" className = "inputClass" src={isChecked4 ? require("../../assets/images/card4.png"): require("../../assets/images/question1.jpeg")}
                alt="Background" width="200" height="200"
                value={isChecked4}
                onMouseEnter={() => {
                  setCard4(!isChecked4);
                }}
                onMouseLeave={() => {
                  setCard4(!isChecked4);
                }}></input>
              <input type="image" className = "inputClass" src={isChecked5 ? require("../../assets/images/card6.png") : require("../../assets/images/question5.jpeg")}
                alt="Background" width="200" height="200"
                value={isChecked5}
                onMouseEnter={() => {
                  setCard5(!isChecked5);
                }}
                onMouseLeave={() => {
                  setCard5(!isChecked5);
                }}
                ></input>
              <input type="image" className = "inputClass" src={isChecked6 ? require("../../assets/images/card5.png"): require("../../assets/images/question6.jpeg")}
                alt="Background" width="200" height="200"
                value={isChecked6}
                onMouseEnter={() => {
                  setCard6(!isChecked6);
                }}
                onMouseLeave={() => {
                  setCard6(!isChecked6);
                }}></input>
            </div>
            {/* <img
              alt="Sun"
              onMouseEnter={require("../../assets/images/question1.png")}
              src={require("../../assets/images/card1.png")}
            ></img> */}
            {/* {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )} */}
          </div>
        </div>
      </div>
    </Fade>
  );
}
