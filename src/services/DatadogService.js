import axios from 'axios';

const API_KEY = '3633aebf34e3f9481362646301c5328e';
const APP_KEY = 'd8904e74bf39523d5a184b492d4ba3bacefc0cb8';
const BASE_URL = 'https://api.datadoghq.com/api/v1';

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    'api_key': API_KEY,
    'application_key': APP_KEY,
  },
});

export const getMonitors = async () => {
  try {
    const response = await instance.get('/monitor');
    return response.data.monitors;
  } catch (error) {
    console.error('Error fetching monitors:', error);
    throw error;
  }
};

export const getMetrics = async (metricNames, start, end) => {
  try {
    const response = await instance.get('/query', {
      params: {
        'query': metricNames.map(name => `${name}{*}`).join(','),
        'start': start,
        'end': end,
      },
    });
    return response.data.series;
  } catch (error) {
    console.error('Error fetching metrics:', error);
    throw error;
  }
};

export const createMonitor = async (message, name, query, type) => {
  try {
    const response = await instance.post('/monitor', {
      message,
      name,
      query,
      type,
    });
    return response.data.monitor;
  } catch (error) {
    console.error('Error creating monitor:', error);
    throw error;
  }
};