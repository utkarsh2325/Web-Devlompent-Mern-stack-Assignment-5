import React from 'react';
import useFetch from './useFetch';
import './App.css';

function App() {
  const apiUrl = 'https://api.escuelajs.co/api/v1/products';
  const { data, loading, error } = useFetch(apiUrl);

  return (
    <div className="container">
      <header className="header">
        <h1>Photos & Products Gallery</h1>
      </header>

      {loading && (
        <div className="loader-container">
          <div className="spinner"></div>
          <p>Loading items, please wait...</p>
        </div>
      )}

      {error && (
        <div className="error-box">
          <p>Error: {error}</p>
        </div>
      )}

      {!loading && !error && data && (
        <div className="grid">
          {data.slice(0, 12).map((item) => {
            const imageUrl =
              item.images && item.images.length > 0 && item.images[0].startsWith('http')
                ? item.images[0]
                : 'https://via.placeholder.com/300';

            return (
              <div key={item.id} className="card">
                <div className="img-wrapper">
                  <img src={imageUrl} alt={item.title} />
                </div>
                <div className="card-info">
                  <h3>{item.title}</h3>
                  <p className="price">₹{item.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;