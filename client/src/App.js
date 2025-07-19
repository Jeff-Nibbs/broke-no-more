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
        const response = await api.get('/poop');
        setMessage(response.data.test);
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
        <h1>MERN Stack App</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p>{message}</p>
        )}
      </header>
    </div>
  );
}

export default App;
