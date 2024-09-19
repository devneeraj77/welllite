
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";


const BmiForm = () => {
  const [weight, setWeight] = useState<number | "">("");
  const [height, setHeight] = useState<number | "">("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [bmi, setBmi] = useState<number | null>(null);
  const [animate, setAnimate] = useState(false);

  const calculateBmi = () => {
    // Convert inputs to numbers if they are not empty
    const weightNum =
      typeof weight === "number" ? weight : parseFloat(weight as string);
    const heightNum =
      typeof height === "number" ? height : parseFloat(height as string);

    if (weightNum > 0 && heightNum > 0) {
      let weightInKg: number;
      let heightInMeters: number;

      if (unit === "imperial") {
        weightInKg = weightNum * 0.453592; // Convert pounds to kg
        heightInMeters = heightNum * 0.0254; // Convert inches to meters
      } else {
        weightInKg = weightNum;
        heightInMeters = heightNum / 100; // Convert cm to meters
      }

      const calculatedBmi = weightInKg / heightInMeters ** 2;
      setBmi(calculatedBmi);
      setAnimate(true); // Trigger animation
    } else {
      setBmi(null);
      setAnimate(false);
    }
  };

  // Define color based on BMI range
  const getBmiColor = () => {
    if (bmi === null) return "text-gray-200";
    if (bmi < 18.5) return "text-blue-300";
    if (bmi < 24.9) return "text-green-300";
    if (bmi < 29.9) return "text-yellow-300";
    return "bg-red-300";
  };

  return (
    <main className="pt-16 text-ts md:p-8  p-2 bg-primary  items-center justify-center flex flex-col">
      <section className=" w-full sm:max-w-lg  min-h-[75vh] justify-center flex flex-col  mx-auto">
        <div className="shadow-md shadow-muted p-4">
          <h1 className="text-2xl text-tp font-bold mb-4">BMI Calculator</h1>
          <div className="md:flex justify-between gap-4 ">
            <div className="mb-4 ">
              <label className="block text-sm  font-medium mb-2">
                Weight ({unit === "metric" ? "kg" : "pounds"})
              </label>
              <input
                type="number"
                value={weight === "" ? "" : weight}
                onChange={(e) =>
                  setWeight(e.target.value === "" ? "" : Number(e.target.value))
                }
                className="p-2 w-full mt-1 md:h-16 md:text-2xl border-green-300 focus:ring-4 file:ring-2 border border-secondary ring-muted rounded-md outline-0 outline-slate-300 text-ts active:ring-2"
                placeholder="Enter weight"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Height ({unit === "metric" ? "cm" : "inches"})
              </label>
              <input
                type="number"
                value={height === "" ? "" : height}
                onChange={(e) =>
                  setHeight(e.target.value === "" ? "" : Number(e.target.value))
                }
                className="p-2 w-full mt-1 md:h-16 md:text-2xl border-green-300 focus:ring-4 file:ring-2 border border-secondary ring-muted rounded-md outline-0 outline-slate-300 text-ts active:ring-2"
                placeholder="Enter height"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Unit</label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value as "metric" | "imperial")}
              className="p-2 w-full mt-1 border-green-300 focus:ring-4 file:ring-2 border border-secondary ring-muted text-sm rounded-md outline-0 outline-slate-300 text-ts active:ring-2"
            >
              <option value="metric" className="p-2 w-full mt-1 border-green-300 focus:ring-4 file:ring-2 border border-secondary ring-muted text-sm rounded-md outline-0 outline-slate-300 text-ts active:ring-2">Metric (kg, cm)</option>
              <option value="imperial" className="p-2 w-full mt-1 border-green-300 focus:ring-4 file:ring-2 border border-secondary ring-muted text-sm rounded-md outline-0 outline-slate-300 text-ts active:ring-2">Imperial (pounds, inches)</option>
            </select>
          </div>

          <Button
            onClick={calculateBmi}
            className="bg-accent w-fit hover:opacity-75 p-3 rounded-md active:scale-95 transition-all "
          >
            Calculate BMI
          </Button>
          {bmi !== null && (
            <div className="text-center  flex justify-center items-center ">
              <motion.div
                className={`mt-6 p-4 rounded  text-2xl m w-fit text-center shadow-md shadow-muted ${getBmiColor()}`}

              >
                Your BMI: {bmi.toFixed(2)}
              </motion.div>
            </div>
          )}
        </div>
      </section>
      <section className=' basis-1/3 max-w-6xl m-auto justify-center items-center p-2 md:pt-10 text-sm lg:text-base border-muted'>
      <p>
          <strong className='text-accent'>BMI (Body Mass Index)</strong> is a simple calculation used to assess whether a person
          has a healthy body weight in relation to their height. It’s commonly used to
          screen for weight categories that may lead to health issues, but it’s not a
          direct measure of body fat.
        </p>
        <div className="my-4 max-w-lg mx-auto">
          <h2>BMI Categories:</h2>
          <ul className="">
            <li><strong>Underweight:</strong> BMI &lt; 18.5</li>
            <li><strong>Normal weight:</strong> BMI 18.5 - 24.9</li>
            <li><strong>Overweight:</strong> BMI 25 - 29.9</li>
            <li><strong>Obesity:</strong> BMI ≥ 30
              <ul>
                <li>Class 1 Obesity: BMI 30 - 34.9</li>
                <li>Class 2 Obesity: BMI 35 - 39.9</li>
                <li>Class 3 Obesity: BMI ≥ 40 (Severe/Morbid Obesity)</li>
              </ul>
            </li>
          </ul>
        </div>
        
        <div className="p-6   space-y-4">
          <h2 className="text-xl font-bold">To calculate BMI (Body Mass Index), the standard formula is:</h2>

          <div className="space-y-2">
            <p><strong>BMI</strong> = <strong>weight (kg)</strong> / <strong>height (m)</strong><sup>2</sup></p>
            <p>Steps:</p>
            <ol className="list-decimal list-inside">
              <li>Measure the weight in kilograms (kg).</li>
              <li>Measure the height in meters (m).</li>
              <li>Square the height.</li>
              <li>Divide the weight by the squared height.</li>
            </ol>
          </div>

          <div className=" max-w-4xl m-auto flex  justify-center items-start gap-2 italic ">
            <h3 className="text-lg font-semibold">Example:</h3>
            <div className="">
              <p>For a person who weighs 70 kg and is 1.75 meters tall:</p>
              <p>
                <strong>BMI</strong> = 70 / (1.75)<sup>2</sup> = 70 / 3.0625 ≈ 22.86
              </p>
            </div>
          </div>

          <h3 className="text-lg font-semibold">For Imperial Units:</h3>
          <p>If using pounds (lbs) and inches (in):</p>
          <p><strong>BMI</strong> = (weight (lbs) × 703) / (height (in))<sup>2</sup></p>

          <div className=" max-w-4xl m-auto flex  justify-center items-start gap-2 italic ">
            <h3 className="text-lg font-semibold">Example:</h3>
            <div>
              <p>For someone who weighs 154 lbs and is 68 inches tall:</p>
              <p>
                <strong>BMI</strong> = (154 × 703) / (68)<sup>2</sup> = 108262 / 4624 ≈ 23.4
              </p>
            </div>
          </div>

        </div>



      </section>
    </main>
  );
};

export default BmiForm;
