import React from 'react';
import styles from './Input.module.css';

export default function Input({ onChange, ...props }) {
  const handleChange = (e) => {
    onChange(e);
  };

  return (
    <div className={styles.input}>
      <label>
        {props.header}
      </label>
      <input {...props} onChange={handleChange} />
    </div>
  );
}