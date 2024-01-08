import React, { useState, useEffect } from 'react';
import './Ipo.css';

const CurrencyExchange = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=pk_426dcba32a6848019e70d304cfadbf3f')
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  const formattedTimestamp = (time) =>{
      return new Date(time).toLocaleString();
  } 
  
  return (
    <div >
      <h1 className="heading">Currency Exchange</h1>
    <div className="card-container">
    {data.map(item => (
        <div key={item.symbol} className="card">
        <h3>Company Symbol: {item.symbol}</h3>
        <p>Rate: {item.rate}</p>        
        <p>Time: {formattedTimestamp(item.timestamp)}</p>
      </div>
    ))}
  </div>
  </div>
  );
};

export default CurrencyExchange;
