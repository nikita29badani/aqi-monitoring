import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { locationData, generateMockReport } from './mockData';
import MapChart from './MapChart';
import ReportDashboard from './ReportDashboard';
import './App.css';

function App() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedWard, setSelectedWard] = useState('');
  const [reportData, setReportData] = useState(null);

  const states = Object.keys(locationData);
  const districts = selectedState ? Object.keys(locationData[selectedState]) : [];
  const wards = selectedDistrict ? locationData[selectedState][selectedDistrict] : [];

  const handleGenerateReport = () => {
    if (selectedState && selectedDistrict && selectedWard) {
      const fullWardName = `Ward ${selectedWard}`;
      const data = generateMockReport(selectedState, selectedDistrict, fullWardName);
      setReportData(data);
    } else {
      alert("Please select State, District, and Ward Number");
    }
  };

  return (
    <div className="app-container">
      <div className="sidebar">
        <h2>AQI Predictor</h2>
        
        <div className="form-group">
          <select value={selectedState} onChange={(e) => {
            setSelectedState(e.target.value);
            setSelectedDistrict('');
            setSelectedWard('');
          }}>
            <option value="">Select State</option>
            {states.map(state => <option key={state} value={state}>{state}</option>)}
          </select>
        </div>

        <div className="form-group">
          <select value={selectedDistrict} onChange={(e) => {
            setSelectedDistrict(e.target.value);
            setSelectedWard('');
          }} disabled={!selectedState}>
            <option value="">Select District</option>
            {districts.map(district => <option key={district} value={district}>{district}</option>)}
          </select>
        </div>

        <div className="form-group">
          <select value={selectedWard} onChange={(e) => setSelectedWard(e.target.value)} disabled={!selectedDistrict}>
            <option value="">Select Ward Number</option>
            {wards.map(ward => <option key={ward} value={ward}>Ward {ward}</option>)}
          </select>
        </div>

        <button onClick={handleGenerateReport}>Generate Report</button>
      </div>

      <div className="map-area">
       <MapChart selectedState={selectedState} selectedDistrict={selectedDistrict} />
        
        <AnimatePresence>
          {reportData && (
            <ReportDashboard data={reportData} onClose={() => setReportData(null)} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;