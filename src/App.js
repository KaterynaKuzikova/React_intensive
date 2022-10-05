import styles from './App.css';
import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Info from './Components/Information/Information';
import FilledProfile from './Components/FilledProfile/FilledProfile';

export default function App() {
  const [filled, setFilled] = useState(false);
  const [data, setData] = useState(null);

  const handleSubmit = (data) => {
    setData(data);
    setFilled(true);
  };

  return (
    <div className={styles.main}>
      {!filled && <Header text='Creating a profile' />}
      {!filled && <Info onSubmit={handleSubmit} />}
      {filled && <FilledProfile data={data} />}
    </div>
  );
}