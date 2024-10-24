"use client";

import { useState } from "react";

// Interface for BMI calculation parameters
interface BMICalculationParams {
  weight: number;
  height: number;
  isMetric: boolean;
}

// Function to calculate BMI
function calculateBMI({ weight, height, isMetric }: BMICalculationParams): number {
  if (isMetric) {
    // Metric: weight in kg, height in cm
    return (weight / (height * height)) * 10000; // Convert to BMI
  } else {
    // Imperial: weight in lbs, height in inches
    return (weight / (height * height)) * 703; // Convert to BMI
  }
}

// Function to get BMI category
function getCategory(bmi: number): string {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 24.9) return "Normal weight";
  if (bmi < 29.9) return "Overweight";
  return "Obese";
}

export default function Home() {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");
  const [isMetric, setIsMetric] = useState<boolean>(true); // Default to metric

  const handleCalculate = () => {
    const calculatedBmi = calculateBMI({
      weight: parseFloat(weight),
      height: parseFloat(height),
      isMetric,
    });
    setBmi(parseFloat(calculatedBmi.toFixed(2))); // Round to 2 decimal places
    setCategory(getCategory(calculatedBmi));
  };

  return (
    <main>
      <section className="m-auto sm:w-[55vw]">
        <div className="bg-rose-500 p-2">
          <h1 className="text-3xl font-bold py-2 text-[#353535]">BMI Calculator</h1>
          <div className="py-2 m-auto w-[55%]">
            <label>
              Measurement System:
              <select
                className="h-12 rounded-md p-2 ml-2"
                value={isMetric ? "metric" : "imperial"}
                onChange={(e) => setIsMetric(e.target.value === "metric")}
              >
                <option value="metric">Metric (kg, cm)</option>
                <option value="imperial">Imperial (lbs, inches)</option>
              </select>
            </label>
          </div>
          <div className="py-2 m-auto w-[55%] ">
            <label>
              Weight ({isMetric ? "kg" : "lbs"}):
              <input
                className="h-12 rounded-md p-2"
                type="number"
                placeholder={`weight in ${isMetric ? "kg" : "lbs"}`}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </label>
          </div>
          <div className="py-2 m-auto w-[55%] ">
            <label>
              Height ({isMetric ? "cm" : "inches"}):
              <input
                className="h-12 rounded-md p-2"
                type="number"
                placeholder={`height in ${isMetric ? "cm" : "inches"}`}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </label>
          </div>
          <button
            className="py-2 px-2 rounded-md bg-slate-300 active:bg-slate-500"
            onClick={handleCalculate}
          >
            Calculate BMI
          </button>

          {bmi !== null && (
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
