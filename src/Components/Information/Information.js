import React from 'react';
import Buttons from '../Buttons/Buttons';
import Button from '../Buttons/Buttons';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import styles from './Information.module.css';

class Info extends React.Component {
  state = {
    name: '',
    surname: '',
    date: '',
    phone: '',
    site: '',
    about: '',
    stack: '',
    project: ''
  };

  inputs = [
    {
      id: 1,
      name: 'name',
      header: 'Name',
      className: 'name',
      type: 'text',
      placeholder: 'Enter your name'
    },
    {
      id: 2,
      name: 'surname',
      header: 'Surname',
      className: 'surname',
      type: 'text',
      placeholder: 'Enter your Surname'
    },
    {
      id: 3,
      name: 'date',
      header: 'Date of birth',
      className: 'date',
      type: 'date',
      placeholder: 'Enter your date of birth'
    },
    {
      id: 4,
      name: 'phone',
      header: 'Phone number',
      className: 'phone',
      type: 'tel',
      placeholder: '+380-097-345-65-65'
    },
    {
      id: 5,
      name: 'site',
      header: 'Link to the site',
      className: 'site',
      type: 'url',
      placeholder: 'Enter the link to your site'
    },
    {
      id: 6,
      name: 'stack',
      header: 'Technologies stack',
      className: 'stack',
      type: 'text',
      placeholder: 'Technologies'
    }
  ];

  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let data = Object.fromEntries(formData);

    for (let key in data) {
      data[key] = data[key].trim();
      this.setState((prevState) => ({ ...prevState, [key]: data[key] }));
    }

    if (this.checkEntries(data)){
      this.props.onSubmit(data);
    }
  };

  checkEntries = (data) => {
    this.deleteAllErrorsMessages();

    for (let key in data) {
      if (data[key] === '') {
        const node = document.getElementsByClassName([key])[0];
        node.classList.add(styles.errorBorder);
        node.insertAdjacentHTML(
          'afterend',
          `<span class=${styles.error}>fill the field</span>`
        );
        node.focus();
        return false;
      }
    }

    for (const key in data) {
      if (key === 'name' || key === 'surname') {
        const regex = new RegExp('^[A-ZА-Я][a-zа-я]+$', 'g');
        if (!regex.test(data[key])) {
          const node = document.getElementsByClassName([key])[0];
          node.classList.add(styles.errorBorder);
          node.insertAdjacentHTML(
            'afterend',
            `<span class=${styles.error}>Name must start with a capital letter</span>`
          );
          node.focus();
          return false;
        }
      }

      if (key === 'site') {
        console.log('site is checking');
        const regex = new RegExp('^(https://)');
        console.log(regex.test(data[key]));
        if (!regex.test(data[key])) {
          const node = document.getElementsByClassName([key])[0];
          node.classList.add(styles.errorBorder);
          node.insertAdjacentHTML(
            'afterend',
            `<span class=${styles.error}>A link to the site should start with https://</span>`
          );
          node.focus();
          return false;
        }
      }

      if (key === 'phone') {
        const regex = new RegExp('^[0-9-]+$');
        if (!regex.test(data[key])) {
          const node = document.getElementsByClassName([key])[0];
          node.classList.add(styles.errorBorder);
          node.insertAdjacentHTML(
            'afterend',
            `<span class=${styles.error}>Please, enter valid phone number</span>`
          );
          node.focus();
          return false;
        }
        if (data[key].length > 12) {
          const node = document.getElementsByClassName([key])[0];
          node.classList.add(styles.errorBorder);
          node.insertAdjacentHTML(
            'afterend',
            `<span class=${styles.error}>Your phone number should be less then 12</span>`
          );
          node.focus();
          return false;
        }
      }

      if (key === 'about' || key === 'project') {
        if (data[key].length > 600) {
          const node = document.getElementsByClassName([key])[0];
          node.classList.add(styles.errorBorder);
          node.focus();
          return false;
        }
      }
    }
    return true;
  };

  deleteAllErrorsMessages() {
    const errors = document.getElementsByClassName(styles.error);
    for (let i = 0; i < errors.length; i++) {
      errors[i].remove();
    }
    const errorBorders = document.getElementsByClassName(styles.errorBorder);
    for (let i = 0; i < errorBorders.length; i++) {
      errorBorders[i].classList.remove(styles.errorBorder);
    }
  }

  handleReset = (e) => {
    e.preventDefault();
    this.setState({
      name: '',
      surname: '',
      date: '',
      phone: '',
      site: '',
      about: '',
      stack: '',
      project: ''
    });
    this.deliteAllErrorsMessages();
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <form
        className={styles.form}
        onSubmit={this.handleSubmit}
        onReset={this.handleReset}>
        {this.inputs.map((input) => (
          <Input
            key={input.id}
            {...input}
            value={this.state[input.name]}
            onChange={this.handleChange}
          />
        ))}

        <Textarea
          name='about'
          text='About you'
          className='about'
          rows='7'
          placeholder='Here is the place where you can leave some information about yourself'
          value={this.state.about}
          onChange={this.handleChange}
        />

        <Textarea
          name='project'
          text='About your last project'
          className='project'
          rows='7'
          placeholder='Please describe your last project'
          value={this.state.project}
          onChange={this.handleChange}
        />

        <div className='form__buttons'>
          <Buttons type='submit' text='Save' />
          <Buttons type='reset' text='Cancel' />
        </div>
      </form>
    );
  }
}

export default Info;