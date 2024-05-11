import React from 'react';

const MonitorTable = ({ monitors }) => {
  return (
    <div className="monitor-table">
      <h2 className="monitor-table__title">Datadog Monitors</h2>
      <table className="monitor-table__table">
        <thead>
          <tr>
            <th>Message</th>
            <th>Name</th>
            <th>Query</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {monitors.map((monitor) => (
            <tr key={monitor.id} className="monitor-table__row">
              <td>{monitor.message}</td>
              <td>{monitor.name}</td>
              <td>{monitor.query}</td>
              <td>{monitor.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonitorTable;