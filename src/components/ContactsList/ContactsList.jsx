import React from 'react';
import { nanoid } from 'nanoid';
import {
  ItemContacts,
  ListContacts,
  ButtonDelete,
} from './ContactsList.styled';
import { TbPoint } from 'react-icons/tb';

const ContactsList = ({ state, deleteContact }) => {
  return (
    <ListContacts>
      {state.map(({ name, number, id }) => (
        <ItemContacts key={nanoid()} id={id}>
          <TbPoint/>
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
