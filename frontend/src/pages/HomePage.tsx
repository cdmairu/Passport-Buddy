import React, { useState, useEffect } from 'react';
import { testAPI } from '../services/api';

const HomePage: React.FC = () => {
  const [apiStatus, setApiStatus] = useState<string>('Checking...');

  useEffect(() => {
    const checkAPI = async () => {
      try {
        const response = await testAPI();
        setApiStatus(`✅ ${response.data.message}`);
      } catch (error) {
        setApiStatus('❌ API connection failed');
      }
    };

    checkAPI();
  }, []);

  return (
    <div>
      <div className="welcome">
        <h1>🌍 Welcome to Passport-Buddy!</h1>
        <p>Your travel companion for logging flights and sharing adventures</p>
      </div>

      <div className="status">
        <h3>System Status</h3>
        <p><strong>Frontend:</strong> ✅ React with TypeScript running</p>
        <p><strong>Backend:</strong> {apiStatus}</p>
      </div>

      <div>
        <h3>🚀 Ready to Build Features:</h3>
        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>User Authentication</li>
          <li>Flight Logging</li>
          <li>Travel Posts</li>
          <li>Interactive Map</li>
          <li>Travel Statistics</li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;