import styles from "./ButtonsContainer.module.css";

const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C", "⌫", "/", "*",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3", "=",
    "0", ".",
  ];

  const getButtonStyle = (buttonName) => {
    if (buttonName === "C" || buttonName === "⌫") {
      return `${styles.button} ${styles.specialButton}`;
    } else if (["/", "*", "-", "+"].includes(buttonName)) {
      return `${styles.button} ${styles.operatorButton}`;
    } else if (buttonName === "=") {
      return `${styles.button} ${styles.equalsButton}`;
    }
    return styles.button;
  };

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button
          key={buttonName}
          className={getButtonStyle(buttonName)}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
