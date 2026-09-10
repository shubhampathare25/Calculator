import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";
import Heading from "./components/Heading";

function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else if (buttonText === "⌫") {
      setCalVal(calVal.slice(0, -1));
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.calculator}>
        <Heading />
        <Display displayValue={calVal} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </div>
  );
}

export default App;
