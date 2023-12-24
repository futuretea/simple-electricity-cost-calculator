import React, { useState } from "react";
import "tailwindcss/tailwind.css";

function App() {
  const [power, setPower] = useState(100); // in watts
  const [hours, setHours] = useState(8);
  const [rate, setRate] = useState(0.6); // in RMB per kWh
  const [result, setResult] = useState(null);

  const calculateCosts = () => {
    const daily = (power / 1000) * hours * rate;
    const weekly = daily * 7;
    const monthly = daily * 30;
    const yearly = daily * 365;
    setResult({ daily, weekly, monthly, yearly });
  };

  const reset = () => {
    setPower(100);
    setHours(8);
    setRate(0.6);
    setResult(null);
  }

  const allFieldsFilled = power && hours && rate;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="block text-gray-700 text-xl font-bold mb-2">
          Electricity Cost Calculator
        </h1>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="power"
          >
            Device Power (W)
          </label>
          <input
            id="power"
            type="number"
            value={power}
            onChange={(e) => setPower(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="hours"
          >
            Daily Usage (Hours)
          </label>
          <input
            id="hours"
            type="number"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="rate"
          >
            Electricity Rate (RMB/kWh)
          </label>
          <input
            id="rate"
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-between">
        <button
            className={`bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline`}
            onClick={reset}
          >
            Reset
          </button>
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              !allFieldsFilled && "opacity-50 cursor-not-allowed"
            }`}
            onClick={calculateCosts}
            disabled={!allFieldsFilled}
          >
            Calculate
          </button>
        </div>
      </div>

      {result && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="block text-gray-700 text-lg font-bold mb-2">
            Results
          </h2>
          <table className="table-fixed w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Daily</th>
                <th className="px-4 py-2">Weekly</th>
                <th className="px-4 py-2">Monthly</th>
                <th className="px-4 py-2">Yearly</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td className="border px-4 py-2">{result.daily.toFixed(2)}</td>
                <td className="border px-4 py-2">{result.weekly.toFixed(2)}</td>
                <td className="border px-4 py-2">
                  {result.monthly.toFixed(2)}
                </td>
                <td className="border px-4 py-2">{result.yearly.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
