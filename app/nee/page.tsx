"use client";

import { useState } from "react";

function calculateBMI(weight, height) {
  const bmi = (weight / (height * height)) * 10000; // height in cm, weight in kg
  return parseFloat(bmi.toFixed(2)); // round to 2 decimal places
}

function getCategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 24.9) return "Normal weight";
  if (bmi < 29.9) return "Overweight";
  return "Obese";
}

export default function Home() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const handleCalculate = () => {
    const calculatedBmi = calculateBMI(parseFloat(weight), parseFloat(height));
    setBmi(calculatedBmi);
    setCategory(getCategory(calculatedBmi));
  };

  return (
    <main>
      <section className="m-auto sm:w-[55vw]">
        <div className="bg-rose-500 p-2  ">
          <h1 className="text-3xl font-bold py-2 text-[#353535]">BMI Calculator</h1>
          <div className="py-2 m-auto w-[55%] ">
            <label>
              Weight (kg):
              <input className="h-12 rounded-md p-2"
                type="number"
                placeholder="weight in kg"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </label>
          </div>
          <div className="py-2 m-auto w-[55%] ">
            <label>
              Height (cm):
              <input className="h-12 rounded-md p-2"
                type="number"
                placeholder="height in cm"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </label>
          </div>
          <button
            className="py-2 px-2 rounded-md bg-slate-300 active:bg-slate-500"
            onClick={handleCalculate}>Calculate BMI</button>

          {bmi && (
            <div>
              <h2>Your BMI is {bmi}</h2>
              <p>You are {category}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}