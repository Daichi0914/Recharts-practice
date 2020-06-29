import React from 'react';
import LineChartSample from './LineChartSample';
import BarChartSample from './BarChartSample';
import './App.css';

function App() {
  const style = {
    width: '90%',
    margin: '0 auto',
    marginTop: 100,
    display: 'flex',
  };
  return (
    <div className='App'>
      <div style={style}>
        <LineChartSample />
        <BarChartSample />
      </div>
    </div>
  );
}

export default App;
