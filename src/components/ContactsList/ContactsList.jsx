import React from 'react';
import { nanoid } from 'nanoid';
import Contact from '../Contact/Contact';
import { ItemContacts, ListContacts } from './ContactsList.styled';

const ContactsList = ({ state }) => {
  return (
    <ListContacts>
      {state.map(({ name, number }) => (
        <ItemContacts>
          <Contact key={nanoid()} name={name} number={number} />
        </ItemContacts>
      ))}
    </ListContacts>
  );
};

export default ContactsList;
