import React from 'react';
import { List, Item, ListItemBtn } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/operation';
import { selectVisibleContacts } from 'redux/selector';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  // const onGetText = () => {
  //   const normalizedFilter = search.toLowerCase().trim();
  //   return contacts.filter(item => {
  //     return item.name.toLowerCase().includes(normalizedFilter);
  //   });
  // };

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.phone}
          {
            <ListItemBtn
              type="button"
              onClick={() => dispatch(deleteContacts(contact.id))}
            >
              Delete
            </ListItemBtn>
          }
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
