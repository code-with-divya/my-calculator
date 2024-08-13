import { useState, useEffect } from "react";
import "./index.css";

function Main() {
  const [inputvalue, setinputvalue] = useState("");

  function display(value) {
    setinputvalue(inputvalue + value);
  }

  function calculate() {
    try {
      const answers = eval(inputvalue);
      setinputvalue(String(answers));
    } catch (e) {
      setinputvalue("Error");
    }
  }

  function clear() {
    setinputvalue("");
  }

  function handleKeyDown(event) {
    const { key } = event;
    if (key >= "0" && key <= "9") {
      display(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      display(key);
    } else if (key === "Enter") {
      calculate();
    } else if (key === "Backspace") {
      setinputvalue(inputvalue.slice(0, -1));
    } else if (key === "Escape") {
      clear();
    } else if (key === ".") {
      display(".");
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [inputvalue]);

  return (
    <>
      {/* <center className="his">HEY THIS IS MY CALCULATOR....!!!</center> */}
      <form className="calculator" name="calc">
        <input type="text" className="value" value={inputvalue } readOnly />
        <span className="num clear" onClick={() => clear()}>
          c
        </span>
        <span onClick={() => display("/")}>/</span>
        <span onClick={() => display("*")}>*</span>
        <span onClick={() => display("7")}>7</span>
        <span onClick={() => display("8")}>8</span>
        <span onClick={() => display("9")}>9</span>
        <span onClick={() => display("-")}>-</span>
        <span onClick={() => display("4")}>4</span>
        <span onClick={() => display("5")}>5</span>
        <span onClick={() => display("6")}>6</span>
        <span className="plus" onClick={() => display("+")}>
          +
        </span>
        <span onClick={() => display("1")}>1</span>
        <span onClick={() => display("2")}>2</span>
        <span onClick={() => display("3")}>3</span>
        <span onClick={() => display("0")}>0</span>
        <span onClick={() => display("00")}>00</span>
        <span onClick={() => display(".")}>.</span>
        <span className="num equal" onClick={() => calculate()}>
          =
        </span>
      </form>
    </>
  );
}

export default Main;
