import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { Form, Label, FormItem, FormBtn } from './AddContactForm.styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddContactForm = () => {
  const contacts = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeInput = e => {
    switch (e.target.name) {
      case 'name':
        return setName(e.currentTarget.value);
      case 'number':
        return setNumber(e.currentTarget.value);
      default:
        break;
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const checkNewContact = contacts.some(item => {
      return item.name.trim() === name.trim();
    });
    if (checkNewContact) {
      toast.success(`${name} is already in book contacts `, {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        <Label>Name</Label>
        <FormItem
          type="text"
          name="name"
          onChange={changeInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          value={name}
        />
        <Label>Number</Label>
        <FormItem
          type="tel"
          name="number"
          onChange={changeInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
          value={number}
        />
        <FormBtn type="submit">Add contact</FormBtn>
        <ToastContainer />
      </Form>
    </div>
  );
};
