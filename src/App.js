import styles from './App.css';
import React, { Component } from 'react';
import Header from './Components/Header/Header';
import Info from './Components/Information/Information';
import FilledProfile from './Components/FilledProfile/FilledProfile';

class App extends Component {
  state = {
    filled: false,
    data: {}
  };
  handleSubmit = (data) => {
    this.setState((prevState) => ({ ...prevState, filled: true, data: data }));
  };

  render() {
    return (
      <div className={styles.main}>
        {!this.state.filled && <Header text='Creating of anketa' />}
        {!this.state.filled && <Info onSubmit={this.handleSubmit} />}
        {this.state.filled && <FilledProfile data={this.state.data} />}
      </div>
    );
  }
}
export default App;