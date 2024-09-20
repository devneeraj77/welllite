"use client"
import { useState } from 'react';

const WHRCalculator = () => {
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');
  const [whr, setWhr] = useState<number | null>(null);
  const [healthRisk, setHealthRisk] = useState('');

  const calculateWHR = (e: React.FormEvent) => {
    e.preventDefault();

    const waistValue = parseFloat(waist);
    const hipValue = parseFloat(hip);

    if (!waistValue || !hipValue || waistValue <= 0 || hipValue <= 0) {
      alert('Please enter valid measurements.');
      return;
    }

    const whrValue = waistValue / hipValue;
    setWhr(whrValue);

    if (whrValue < 0.8) {
      setHealthRisk('Low Health Risk');
    } else if (whrValue >= 0.8 && whrValue <= 0.85) {
      setHealthRisk('Moderate Health Risk');
    } else {
      setHealthRisk('High Health Risk');
    }
  };

  return (
    <main className='md:p-8  p-2 text-ts bg-primary'>


      <section className="basis-2/3 flex flex-col items-center justify-center p-2 min-h-screen text-tp">

        <h1 className="text-3xl font-bold mb-8">Waist-to-Hip Ratio (WHR) Calculator</h1>

        <form
          onSubmit={calculateWHR}
          className="w-full max-w-md p-6  rounded  shadow-md shadow-muted"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Waist (in inches or cm)</label>
            <input
              type="number"
              value={waist}
              onChange={(e) => setWaist(e.target.value)}
              className="p-2 w-full mt-1 md:h-16 md:text-2xl bg-muted text-tp border-green-300 focus:ring-4 file:ring-2 border border-secondary ring-muted rounded-md outline-0 outline-slate-300  active:ring-2"
              required
              min="1"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Hip (in inches or cm)</label>
            <input
              type="number"
              value={hip}
              onChange={(e) => setHip(e.target.value)}
              className="p-2 w-full mt-1 md:h-16 md:text-2xl bg-muted text-tp border-green-300 focus:ring-4 file:ring-2 border border-secondary ring-muted rounded-md outline-0 outline-slate-300  active:ring-2"
              required
              min="1"
            />
          </div>
          <button
            type="submit"
            className="bg-accent hover:opacity-75 p-3 rounded-md active:scale-95 transition-all "
          >
            Calculate WHR
          </button>

        </form>

        {whr !== null && (
          <div className="mt-6 p-4 bg-muted rounded shadow-md shadow-muted">
            <p className="text-lg">Your WHR: <span className="font-bold">{whr.toFixed(2)}</span></p>
            <p className={`text-lg font-bold ${healthRisk === 'High Health Risk' ? 'text-red-500' : 'text-green-500'}`}>
              {healthRisk}
            </p>
          </div>
        )}
      </section>
      <section className=' basis-1/3 max-w-6xl m-auto justify-center items-center p-2 md:pt-10 text-sm lg:text-base  border-muted'>
        <p>For determining hip measurements for women, the formula utilized is contingent upon the specific calculation required. If the focus is on hip circumference for body measurements, it is recommended to wrap a tape measure around the widest part of the hips and buttocks to obtain an accurate measurement.</p> <br />
        <p>If you need to figure out your <strong className='text-accent'> Waist-to-Hip Ratio (WHR)</strong> to assess your health risks related to fat distribution, use this formula:</p>
        <div className='p-6'>
          <h5 className='font-bold text-ts'>Waist-to-Hip Ratio (WHR) Formula:</h5>
          <div className="flex italic items-center justify-center gap-2 p-4 text-ts">
            <p className=" font-semibold">WHR = </p>

            <div className=" font-bold flex flex-col items-center">
              <span>Waist Circumference</span>
              <hr className="w-full  my-2 border-ts" />
              <span>Hip Circumference</span>
            </div>
          </div>

        </div>
        <div className="p-6 ">
          <h2 className="text-2xl font-semibold mb-4">Steps to Measure:</h2>

          <p className="mb-2">
            <strong>Waist Circumference:</strong> Wrap the measuring tape around the slimmest part of your waist, usually right above your belly button.
          </p>

          <p className="mb-4">
            <strong>Hip Circumference:</strong> Don&apos;t forget to measure around the fullest part of your hips and buttocks!
          </p>

          <h3 className="text-xl font-semibold mb-4">Example:</h3>

          <p className="mb-2">
            If a woman has a waist circumference of 28 inches (71 cm) and a hip circumference of 40 inches (102 cm), the waist-to-hip ratio (WHR) would be:
          </p>

          <div className="flex gap-2 justify-center items-center mb-4">
            <p className="font-bold">WHR =</p>
            <div className="flex flex-col  items-center">
              <span>28</span>
              <hr className="w-24 my-2 border-black" />
              <span>40</span>
            </div>
            <p className="mt-2 font-bold">WHR = 0.7</p>
          </div>

          <h3 className="text-xl font-semibold mb-4">Interpretation of WHR:</h3>

          <ul className="list-disc ml-6 mb-4">
            <li><strong>Low Health Risk:</strong> WHR &lt; 0.80</li>
            <li><strong>Moderate Health Risk:</strong> WHR between 0.80 and 0.85</li>
            <li><strong>High Health Risk:</strong> WHR &gt; 0.85</li>
          </ul>

          <p className="text-sm text-gray-700">
            Remember, your waist-to-hip ratio is an important way to tell if you have too much fat around your waist, which can be risky for your heart and overall health.
            If you have any other questions about measuring your hips, just ask!
          </p>
        </div>

      </section>
    </main>
  );
};

export default WHRCalculator;
