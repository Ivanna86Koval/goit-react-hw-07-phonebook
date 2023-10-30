import { List, Item, ListItemBtn } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onGetText = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  return (
    <List>
      {onGetText().map(({ id, name, number }) => (
        <Item key={id}>
          <p>{name} </p>
          <p>{number}</p>
          <ListItemBtn
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </ListItemBtn>
        </Item>
      ))}
    </List>
  );
};
