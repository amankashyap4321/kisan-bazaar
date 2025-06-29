import React, { useState } from "react";

const KnowSubsidy = () => {
  const [area, setArea] = useState("");
  const [unit, setUnit] = useState("sqft");
  const [subsidy, setSubsidy] = useState(null);

  const conversionRates = {
    sqft: 1,
    gaz: 9,
    bigha: 27000,
    acre: 43560,
  };

  const subsidyPerSqFt = 2.5; // Example: ₹2.5 per square foot

  const handleCalculate = () => {
    const totalSqFt = parseFloat(area) * (conversionRates[unit] || 1);
    const totalSubsidy = totalSqFt * subsidyPerSqFt;
    setSubsidy(totalSubsidy.toFixed(2));
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Know Your Subsidy</h1>
      <div className="bg-white rounded-lg shadow p-6 max-w-xl mx-auto">
        <div className="mb-4">
          <label className="block font-medium mb-1">Enter Land Area</label>
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="e.g., 500"
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Select Unit</label>
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="sqft">Square Feet</option>
            <option value="gaz">Gaz</option>
            <option value="bigha">Bigha</option>
            <option value="acre">Acre</option>
          </select>
        </div>
        <button
          onClick={handleCalculate}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
        >
          Calculate Subsidy
        </button>

        {subsidy !== null && (
          <div className="mt-6 text-xl font-semibold">
            Estimated Subsidy: ₹{subsidy}
          </div>
        )}
      </div>
    </div>
  );
};

export default KnowSubsidy;
