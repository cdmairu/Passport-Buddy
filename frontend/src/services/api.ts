import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const testAPI = () => {
  return api.get('/');
};

// Add more API functions here as you build features
export const authAPI = {
  login: (credentials: {email: string, password: string}) => {
    return api.post('/api/auth/login', credentials);
  },
  register: (userData: {username: string, email: string, password: string}) => {
    return api.post('/api/auth/register', userData);
  },
};

export const flightAPI = {
  getFlights: () => api.get('/api/flights'),
  addFlight: (flightData: any) => api.post('/api/flights', flightData),
};

export default api;
