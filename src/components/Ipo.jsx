import React, { useState, useEffect } from 'react';
import './Ipo.css';

const Ipo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.iex.cloud/v1/data/CORE/UPCOMING_IPOS/market?token=pk_426dcba32a6848019e70d304cfadbf3f')
      .then(response => response.json())
      .then(result => setData(result))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div >
      <h1 className="heading"> Upcoming IPO</h1>
    <div className="card-container">
    {data.map(item => (
      <div key={item.symbol} className="card">
        <h3>{item.companyName}</h3>
        <p>Filed Date: {item.filedDate}</p>
        <p>Status: {item.status}</p>
        <p>Managers: {item.managers}</p>
        <p>Offering Date: {item.offeringDate}</p>
        <p>Price Range Low: {item.priceRangeLow} </p>
        <p>Price Range High: {item.priceRangeHigh} </p>
        <p>Shares: {item.shares}</p>
        <p>Symbol: {item.symbol}</p>
        <p>Updated: {item.updated}</p>
        <p>Volume: {item.volume}</p>
      </div>
    ))}
  </div>
  </div>
  );
};

export default Ipo;
