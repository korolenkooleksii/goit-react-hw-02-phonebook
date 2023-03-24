import { nanoid } from 'nanoid';
import { Component } from 'react';
import {
  Container,
  TitleForm,
  FormInput,
  ButtonForm,
  LabelForm,
  InputForm,
} from './App.styled';
import ContactsList from '../ContactsList/ContactsList';

const INITIAL_STATE = {
  name: '',
  number: '',
};
class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  idName = nanoid();
  idNumber = nanoid();
  idContact = nanoid();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    
    this.setState(prevState => ({
      contacts: [
        { name: this.state.name, number: this.state.number, id: nanoid() },
        ...prevState.contacts,
      ],
    }));

    this.reset();
  };



  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number, contacts } = this.state;
    return (
      <Container>
        <TitleForm>Phonebook</TitleForm>
        <FormInput onSubmit={this.handleSubmitForm}>
          <LabelForm htmlFor={this.idName}>
            Name
            <InputForm
              id={this.idName}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              value={name}
            />
          </LabelForm>
          <LabelForm htmlFor={this.idNumber}>
            Number
            <InputForm
              id={this.idNumber}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              value={number}
            />
          </LabelForm>
          <ButtonForm type="submit" disabled={!(name || number)}>
            Add contact
          </ButtonForm>
        </FormInput>
        <ContactsList state={contacts} />
      </Container>
    );
  }
}

export default App;
