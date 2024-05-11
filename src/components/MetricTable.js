import React from 'react';

const MetricTable = ({ metrics }) => {
  return (
    <div className="metric-table">
      <h2 className="metric-table__title">Datadog Metrics</h2>
      <table className="metric-table__table">
        <thead>
          <tr>
          <th>Message</th>
            <th>Name</th>
            <th>Query</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {metrics.map((metric) => (
            <tr key={metric.id} className="metric-table__row">
              <td>{metric.message}</td>
              <td>{metric.name}</td>
              <td>{metric.query}</td>
              <td>{metric.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MetricTable;