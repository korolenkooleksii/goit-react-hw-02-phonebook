import React from 'react';
import { nanoid } from 'nanoid';
import {
  ItemContacts,
  ListContacts,
  ButtonDelete,
} from './ContactsList.styled';

const ContactsList = ({ state, deleteContact }) => {
  return (
    <ListContacts>
      {state.map(({ name, number, id }) => (
        <ItemContacts key={nanoid()} id={id}>
          {name}: {number}
          <ButtonDelete
            type="button"
            onClick={e => {
              deleteContact(e.currentTarget.closest('li').id);
            }}
          >
            Delete
          </ButtonDelete>
        </ItemContacts>
      ))}
    </ListContacts>
  );
};

export default ContactsList;
