import React, { useEffect, useState } from 'react';
import { getMonitors, getMetrics } from './services/DatadogService';
import CreateMonitorPopup from './components/CreateMonitorPopup';
import MonitorTable from './components/MonitorTable';
import MetricTable from './components/MetricTable';
import './App.css';

function App() {
  const [monitors, setMonitors] = useState([]);
  const [metrics, setMetrics] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const monitorsData = await getMonitors();
        setMonitors(monitorsData);

        const metricsData = await getMetrics(['system.cpu.user'], '2023-05-09T00:00:00Z', '2023-05-09T23:59:59Z');
        setMetrics(metricsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleMonitorCreated = (newMonitor) => {
    setMonitors([...monitors, newMonitor]);
    setShowPopup(false);
  };

  const handleWebhookData = (data) => {
    // Handle the webhook data and update the UI as needed
    console.log('Received webhook data:', data);
    // ...
  };

  const handleCreateMonitorClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="app">
      <h1 className="app__title">Datadog Monitoring</h1>
      <MonitorTable monitors={monitors} />
      <button className="app__create-btn" onClick={handleCreateMonitorClick}>
        Create New Monitor
      </button>
      {showPopup && (
        <CreateMonitorPopup
          onMonitorCreated={handleMonitorCreated}
          onClose={handlePopupClose}
        />
      )}
      <MetricTable metrics={metrics} />
    </div>
  );
}

export default App;