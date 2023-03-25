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
    filter: ' ',
  };

  updateState = date => {
    if (this.state.contacts.some(el => el.name === date.name)) {
      alert(`${date.name} is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [
          { name: date.name, number: date.number, id: nanoid() },
          ...prevState.contacts,
        ],
      }));
    }
  };

  updateFilter = date => {
    this.setState({ filter: date });

    // const { contacts, filter } = this.state;
    // console.log(contacts, filter);
    // const arr = contacts.filter(el =>
    //   el.name.toLowerCase().includes(filter.toLowerCase())
    // );
    // return arr;
  };

  filterByName = () => {
    const { contacts, filter } = this.state;
    const arr = contacts.filter(el =>
      el.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
    return arr;
  };

  // filterByName = () => {
  //   const { contacts, filter } = this.state;

  //   const filteredArray = contacts.reduce((acc, el) => {
  //     (el.name.toLowerCase().includes(filter.toLowerCase())) && acc.push(el)
  //     return acc.push(el)
  //   }, []);

  //   return filteredArray;
  // };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
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
          // console.log(this.filterByName())
          <ContactsList state={this.filterByName()} />
          // <ContactsList state={this.updateFilterByName()} />
          // console.log(99999999)
        )}
      </Container>
    );
  }
}

export default App;
