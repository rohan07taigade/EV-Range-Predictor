import React, { useState } from "react";
import "./App.css";

function App() {
  const [speed, setSpeed] = useState(80);
  const [temp, setTemp] = useState(25);
  const [battery, setBattery] = useState(75);
  const [category, setCategory] = useState("SUV");
  const [range, setRange] = useState(null);
  const [loading, setLoading] = useState(false); // New: Loading state for better UI

  const handlePredict = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading animation

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: category,
          speed_kmh: Number(speed),
          temperature_c: Number(temp),
          battery_kwh: Number(battery),
        }),
      });

      const data = await response.json();
      setRange(data.estimated_range_km);
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to connect to the server. Is the backend running?");
    }
    setLoading(false); // Stop loading animation
  };

  return (
    <div className="app-container">
      <div className="glass-panel">
        <h1>EV Range Predictor</h1>
        <p className="subtitle">AI-Powered Efficiency Analysis</p>

        <form onSubmit={handlePredict} className="controls-grid">
          <div className="input-group">
            <label>Speed (km/h)</label>
            <input
              type="number"
              value={speed}
              onChange={(e) => setSpeed(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Temperature (°C)</label>
            <input
              type="number"
              value={temp}
              onChange={(e) => setTemp(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Battery Capacity (kWh)</label>
            <input
              type="number"
              value={battery}
              onChange={(e) => setBattery(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Vehicle Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="Hatchback">Hatchback</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Truck">Truck</option>
            </select>
          </div>

          <button type="submit" className="predict-btn">
            {loading ? "Calculating..." : "Analyze Range"}
          </button>
        </form>

        {range && (
          <div className="result-box">
            <span className="label">Estimated Range</span>
            <span className="value">
              {range} <small>km</small>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
