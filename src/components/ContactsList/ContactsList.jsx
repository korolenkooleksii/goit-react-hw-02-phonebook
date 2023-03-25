import React from 'react';
import { nanoid } from 'nanoid';
import { ItemContacts, ListContacts } from './ContactsList.styled';

const ContactsList = ({ state }) => {
  return (
    <ListContacts>
      {state.map(({ name, number }) => (
        <ItemContacts key={nanoid()}>
          {name}: {number}
        </ItemContacts>
      ))}
    </ListContacts>
  );
};

export default ContactsList;
