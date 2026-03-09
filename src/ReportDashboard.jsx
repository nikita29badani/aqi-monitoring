import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { AlertTriangle, Wind, Activity, ShieldAlert, CheckCircle2 } from 'lucide-react';

const ReportDashboard = ({ data, onClose }) => {
  const getAqiColor = (aqi) => {
    if (aqi <= 50) return '#22c55e';
    if (aqi <= 100) return '#eab308';
    if (aqi <= 200) return '#f97316';
    return '#ef4444';
  };

  const color = getAqiColor(data.aqi);

  return (
    <motion.div 
      className="dashboard-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="dashboard-modal"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <button className="close-btn" onClick={onClose}>&times;</button>
        
        <div className="dashboard-header">
          <h2>{data.location}</h2>
          <div className="aqi-badge" style={{ backgroundColor: color }}>
            <Wind size={24} color="#fff" />
            <span className="aqi-value">{data.aqi}</span>
            <span className="aqi-label">{data.category}</span>
          </div>
        </div>

        <div className="dashboard-grid">
          <div className="info-card">
            <div className="card-title">
              <Activity size={18} />
              <h3>Primary Source</h3>
            </div>
            <p>{data.source}</p>
          </div>

          <div className="info-card">
            <div className="card-title">
              <ShieldAlert size={18} />
              <h3>Health Advisory</h3>
            </div>
            <p>{data.healthAdvisory}</p>
          </div>

          <div className="info-card full-width">
            <div className="card-title">
              <CheckCircle2 size={18} />
              <h3>Mitigation Steps</h3>
            </div>
            <p>{data.mitigation}</p>
          </div>
        </div>

        <div className="chart-container">
          <h3>7-Day AQI Trend Prediction</h3>
          <div className="chart-wrapper">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.trend}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#666' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#666' }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="aqi" 
                  stroke="#3b82f6" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }} 
                  activeDot={{ r: 6 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ReportDashboard;