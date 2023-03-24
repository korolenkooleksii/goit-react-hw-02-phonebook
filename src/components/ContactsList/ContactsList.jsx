import React from 'react';
import { nanoid } from 'nanoid';
import Contact from '../Contact/Contact'
import { TitleContacts, ItemContacts , Wrapper, ListContacts } from './ContactsList.styled';

const ContactsList = ({ state }) => {
  console.log({ state });

  return (
    <Wrapper>
      <TitleContacts>Contacts</TitleContacts>
      <ListContacts>
        {state.map(({ name, number }) => (
          <ItemContacts >
            <Contact key={nanoid()} name={name} number={number} />
          </ItemContacts>
        ))}
      </ListContacts>
    </Wrapper>
  );
};

export default ContactsList;
