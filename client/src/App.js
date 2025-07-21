import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// API service using axios
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/transaction');
        setMessage(response.data[0].amount);
      } catch (error) {
        console.error('Error fetching data:', error);
        setMessage('Error connecting to backend');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
         <div>
      <h2>Transactions</h2>
      <ul>
      {message}
      </ul>
    </div>
      </header>
    </div>
  );
}

export default App;
