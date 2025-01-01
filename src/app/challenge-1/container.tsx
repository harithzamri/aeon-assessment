"use client";

import { useState } from "react";

export default function Container() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [answer, setAnswer] = useState(0);

  function calculateTwoNumbers() {
    if (firstNumber === "" || secondNumber === "") {
      alert("Please fill in both numbers");
      return;
    }

    const num1 = Number(firstNumber);
    const num2 = Number(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers");
      return;
    }

    setAnswer(num1 + num2);
  }

  function handleReset() {
    setFirstNumber("");
    setSecondNumber("");
    setAnswer(0);
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <input
        className="border-solid border-2 border-black p-1"
        placeholder="First Number"
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)}
        type="number"
      />
      <input
        className="border-solid border-2 border-black p-1"
        placeholder="Second Number"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
        type="number"
      />
      <div className="flex gap-2">
        <button
          className="border-solid border-2 border-black p-1"
          onClick={calculateTwoNumbers}
        >
          Add Two Numbers
        </button>
        <button
          className="border-solid border-2 border-black p-1"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      {answer !== null && <div>Total: {answer}</div>}
    </div>
  );
}
