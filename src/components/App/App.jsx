import Form from 'components/Form/Form';
import { Component } from 'react';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitForm = data => {
    console.log('data - ', data);
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <Form onSubmit={this.formSubmitForm} name={ } />
        <ul>
          Contacts
          <li></li>
        </ul>
      </div>
    );
  }
}

export default App;
