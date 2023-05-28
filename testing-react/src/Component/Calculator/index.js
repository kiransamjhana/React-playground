import { useState } from "react";
import { Button } from "./Button";

export const Calculator = () => {
  const buttons = [
    {
      className: "ac",
      label: "AC",
    },
    {
      className: "c",
      label: "←",
    },
    {
      className: "perc",
      label: "%",
    },
    {
      className: "divide",
      label: "/",
    },
    {
      className: "7",
      label: "7",
    },
    {
      className: "8",
      label: "8",
    },
    {
      className: "9",
      label: "9",
    },
    {
      className: "x",
      label: "*",
    },
    {
      className: "4",
      label: "4",
    },
    {
      className: "5",
      label: "5",
    },
    {
      className: "6",
      label: "6",
    },
    {
      className: "minus",
      label: "-",
    },
    {
      className: "1",
      label: "1",
    },
    {
      className: "2",
      label: "2",
    },
    {
      className: "3",
      label: "3",
    },
    {
      className: "plus",
      label: "+",
    },
    {
      className: "0",
      label: "0",
    },
    {
      className: "dot",
      label: ".",
    },
    {
      className: "equals",
      label: "=",
    },
  ];

  const [displayValue, setDisplayValue] = useState(0);

  const operators = ["+", "-", "%", "*", "/", "."];

  const handleButtonClick = (val) => {
    if (val === "AC") {
      return setDisplayValue(0);
    }

    if (val === "←") {
      return setDisplayValue(displayValue.slice(0, -1));
      //   console.log("inside div", stringToDisplay);
    }

    if (val === "=") {
      const lastChar = setDisplayValue(displayValue.slice(-1));

      console.log(lastChar);

      if (operators.includes(lastChar)) {
        setDisplayValue = setDisplayValue(displayValue.slice(0, -1));
      }
    }

    setDisplayValue(displayValue + val);
  };

  return (
    <div className="wrapper">
      <div className="calculator">
        <div className="display">{displayValue}</div>
        {buttons.map((item, index) => (
          <Button
            key={index}
            className={item.className}
            label={item.label}
            handleButtonClick={handleButtonClick}
          />
        ))}
      </div>
    </div>
  );
};
