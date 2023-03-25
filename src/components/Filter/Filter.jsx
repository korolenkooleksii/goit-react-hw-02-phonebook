import { nanoid } from 'nanoid';
import { Wrapper, LabelForm, InputForm } from './Filter.styled';

const Filter =({state, updateFilter})=> {

  const idForm = nanoid();

    return (
      <Wrapper>
        <LabelForm htmlFor={idForm}>
          Find contact by name
          <InputForm
            id={idForm}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={(e)=>{updateFilter(e.currentTarget.value.trim());}}
            value={state.filter}
          />
        </LabelForm>
      </Wrapper>
    );

}

export default Filter;
