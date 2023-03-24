import { nanoid } from 'nanoid';
const { Component } = require('react');

const INITIAL_STATE = {
  name: '',
};

class Form extends Component {
  idName = nanoid();

  state = {
    name: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmitForm}>
        <label htmlFor={this.idName}>
          Name
          <input
            id={this.idName}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleChange}
            value={name}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
