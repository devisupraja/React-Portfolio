import React, { useEffect, useState, useContext } from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const { isDark } = useContext(StyleContext);
  const [isChecked, setChecked] = useState(isDark);
  const styleContext = useContext(StyleContext);

  useEffect(() => {
    return () => {
      styleContext.changeTheme();
    };
  }, []);

  return (
    <input type="image" src={isDark ? require("../../assets/images/sun.svg") : require("../../assets/images/moon.svg")}
      alt="Background" width="48" height="48"
      value={isDark}
      onClick = {() => {
        styleContext.changeTheme();
        setChecked(!isChecked);
      }}></input>
    // <label className="switch">
    //   {/* <input
    //     checked={isDark}
    //     onChange={() => {
    //       styleContext.changeTheme();
    //       setChecked(!isChecked);
    //     }}
    //   />
    //   {isDark && (
    //     <img
    //       alt="Sun"
    //       src={require("../../assets/images/sun.svg")}
    //     ></img>
    //   )}
    //   {!isDark && (
    //     <img
    //       alt="Moon"
    //       src={require("../../assets/images/moon.svg")}
    //     ></img>
    //   )} */}
    //   {/* <span className="slider round"></span> */}
    // </label>
  );
};
export default ToggleSwitch;
