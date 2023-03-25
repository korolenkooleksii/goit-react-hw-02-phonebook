import React from 'react';
import { nanoid } from 'nanoid';
import {
  ItemContacts,
  ListContacts,
  ButtonDelete,
} from './ContactsList.styled';

const ContactsList = ({ state }) => {
  return (
    <ListContacts>
      {state.map(({ name, number }) => (
        <ItemContacts key={nanoid()}>
          {name}: {number}
          <ButtonDelete type='button'>Delete</ButtonDelete>
        </ItemContacts>
      ))}
    </ListContacts>
  );
};

export default ContactsList;
