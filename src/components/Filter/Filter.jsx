import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Wrapper, LabelForm, InputForm } from './Filter.styled';

class Filter extends Component {
  state = {
    filter: '',
  };

  idForm = nanoid();

  handleChange = e => {
    this.setState({ filter: e.currentTarget.value });
    this.props.updateFilter(this.state.filter);
  };

  render() {
    return (
      <Wrapper>
        <LabelForm htmlFor={this.idForm}>
          Find contact by name
          <InputForm
            id={this.idForm}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            value={this.state.filter}
          />
        </LabelForm>
      </Wrapper>
    );
  }
}

export default Filter;
