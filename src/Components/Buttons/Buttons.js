import React from 'react';
import styles from './Buttons.module.css';

class Buttons extends React.Component {
  render() {
    return (
      <button className={styles.buttons} type={this.props.type}>
        {this.props.text}
      </button>
    );
  }
}

export default Buttons;