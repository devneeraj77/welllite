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
    const weightNum =
      typeof weight === "number" ? weight : parseFloat(weight as string);
    const heightNum =
      typeof height === "number" ? height : parseFloat(height as string);

    if (weightNum > 0 && heightNum > 0) {
      let weightInKg: number;
      let heightInMeters: number;

      if (unit === "imperial") {
        weightInKg = weightNum * 0.453592;
        heightInMeters = heightNum * 0.0254;
      } else {
        weightInKg = weightNum;
        heightInMeters = heightNum / 100;
      }

      const calculatedBmi = weightInKg / heightInMeters ** 2;
      setBmi(calculatedBmi);
      setAnimate(true); // Trigger animation
    } else {
      setBmi(null);
      setAnimate(false);
    }
  };

  const getBmiColor = () => {
    if (bmi === null) return "text-gray-200";
    if (bmi < 18.5) return "text-blue-300";
    if (bmi < 24.9) return "text-green-300";
    if (bmi < 29.9) return "text-yellow-300";
    return "bg-red-300";
  };

  return (
    <main className="pt-16 text-ts md:p-8 p-2 bg-primary items-center justify-center flex flex-col">
      <section className="w-full sm:max-w-lg min-h-[75vh] justify-center flex flex-col mx-auto">
        <div className="shadow-md shadow-muted p-4 rounded-md">
          <h1 className="text-2xl text-tp font-bold mb-4">BMI Calculator</h1>
          <div className="md:flex justify-between gap-4">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Weight ({unit === "metric" ? "kg" : "pounds"})
              </label>
              <input
                type="number"
                value={weight === "" ? "" : weight}
                onChange={(e) =>
                  setWeight(e.target.value === "" ? "" : Number(e.target.value))
                }
                className="p-2 w-full mt-1 md:h-16 md:text-2xl bg-muted text-tp border-green-300 focus:ring-4 file:ring-2 border border-secondary ring-muted rounded-md outline-0 outline-slate-300 active:ring-2"
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
                className="p-2 w-full mt-1 md:h-16 md:text-2xl bg-muted text-tp border-green-300 focus:ring-4 file:ring-2 border border-secondary ring-muted rounded-md outline-0 outline-slate-300 active:ring-2"
                placeholder="Enter height"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Unit</label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value as "metric" | "imperial")}
              className="p-2 w-full mt-1 border-green-300 focus:ring-4 file:ring-2 bg-muted border border-secondary ring-muted text-sm rounded-md outline-0 outline-slate-300 text-ts active:ring-2"
            >
              <option value="metric">Metric (kg, cm)</option>
              <option value="imperial">Imperial (pounds, inches)</option>
            </select>
          </div>

          <Button
            onClick={calculateBmi}
            className="bg-accent w-fit hover:opacity-75 p-3 rounded-md active:scale-95 transition-all"
          >
            Calculate BMI
          </Button>
          {bmi !== null && (
            <div className="text-center flex justify-center items-center">
              <motion.div
                className={`mt-6 p-4 rounded text-2xl w-fit text-center shadow-md shadow-muted ${getBmiColor()}`}
                initial={{ scale: 0 }}
                animate={{ scale: animate ? 1.2 : 1 }}
                transition={{ duration: 0.5 }}
              >
                Your BMI: {bmi.toFixed(2)}
              </motion.div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default BmiForm;
