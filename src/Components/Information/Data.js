export const initialData = {
    name: '',
    surname: '',
    date: '',
    phone: '',
    site: '',
    about: '',
    stack: '',
    project: ''
  };
  
  export const inputs = [
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
      header: 'Sureame',
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
      placeholder: '+380-97-345-65-65'
    },
    {
      id: 5,
      name: 'site',
      header: 'Link to the site',
      className: 'site',
      type: 'url',
      placeholder: 'Enter link to your site'
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