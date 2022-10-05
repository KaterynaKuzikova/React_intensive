import React from 'react';
import styles from './Header.module.css';

export default function Header (...props) {
    return (
      <React.Fragment>
        <h1>{this.props.text}</h1>
      </React.Fragment>
    );
  }