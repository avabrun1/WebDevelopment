
import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
      setLoading(true);
      setError(null);
      try {
          const response = await axios.get('http://localhost:3000');
          setData(response.data);
      } catch (err) {
          setError(err.message);
      } finally {
         setLoading(false); 
      }
  };

  return (
      <div>
          <button onClick={handleClick} disabled={loading}>
              {loading ? 'Loading...' : 'Fetch Data'}
          </button>
          {error && <p style={{ color: 'red' }}>Error: {error}</p>}
          {data && <p>Data from backend: {data.message}</p>}
      </div>
  );
}

export default App;
