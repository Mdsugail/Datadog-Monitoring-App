import React, { useState } from 'react';
import { createMonitor } from '../services/DatadogService';

const CreateMonitorPopup = ({ onMonitorCreated, onClose }) => {
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newMonitor = await createMonitor(message, name, query, type);
      onMonitorCreated(newMonitor);
      resetForm();
    } catch (error) {
      console.error('Error creating monitor:', error);
    }
  };

  const resetForm = () => {
    setMessage('');
    setName('');
    setQuery('');
    setType('');
  };

  return (
    <div className="popup">
      <div className="popup__inner">
        <h2 className="popup__title">Create New Monitor</h2>
        <form onSubmit={handleSubmit} className="popup__form">
          <div className="popup__form-group">
            <label htmlFor="message" className="popup__label">
              Message:
            </label>
            <input
              type="text"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="popup__input"
            />
          </div>
          <div className="popup__form-group">
            <label htmlFor="name" className="popup__label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="popup__input"
            />
          </div>
          <div className="popup__form-group">
            <label htmlFor="query" className="popup__label">
              Query:
            </label>
            <input
              type="text"
              id="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="popup__input"
              required
            />
          </div>
          <div className="popup__form-group">
            <label htmlFor="type" className="popup__label">
              Type:
            </label>
            <input
              type="text"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="popup__input"
              required
            />
          </div>
          <div className="popup__buttons">
            <button type="submit" className="popup__button popup__button--primary">
              Create Monitor
            </button>
            <button type="button" onClick={onClose} className="popup__button popup__button--secondary">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMonitorPopup;