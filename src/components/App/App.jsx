import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Container, TitleForm, TitleContacts } from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  updateState = date => {
    this.setState(prevState => ({
      contacts: [
        { name: date.name, number: date.number, id: nanoid() },
        ...prevState.contacts,
      ],
    }));
  };

  updateFilter = date => {
    this.setState({ filter: date });
  };

  /*
  const values = [51, -3, 27, 21, -68, 42, -37];
const positiveValues = values.filter(value => value >= 0);
console.log(positiveValues); // [51, 27, 21, 42]
  */

  filterByName = () => {
    const { contacts, filter } = this.state;
    // console.log(contacts[0].name, filter);
    const arr = contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
    console.log(arr); 
    return arr;
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Container>
        <TitleForm>Phonebook</TitleForm>
        <ContactForm updateState={this.updateState} />
        <TitleContacts>Contacts</TitleContacts>
        <Filter state={filter} updateFilter={this.updateFilter} />
        {this.state.filter === '' ? (
          <ContactsList state={contacts} />
        ) : (
          // this.filterByName()
          // console.log(555)
            <ContactsList state={this.filterByName()} />
        )}
      </Container>
    );
  }
}

export default App;
