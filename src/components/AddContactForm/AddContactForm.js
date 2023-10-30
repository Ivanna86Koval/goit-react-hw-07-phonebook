import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { nanoid } from '@reduxjs/toolkit';
import { addContacts } from 'redux/operation';
import { selectContacts } from 'redux/selector';
import { Form, Label, FormItem, FormBtn } from './AddContactForm.styled';


//const nameInputId = nanoid();
//const numberInputId = nanoid();

export const AddContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

  const checkNewContact = contacts.some(
  contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );
    if (checkNewContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContacts({ name, number }));
    setName('');
    setNumber('');
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Label>Name</Label>
        <FormItem
           type="text"
           name="name"
           value={name}
           onChange={handleChange}
           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
           required
         />
        <Label>Number</Label>
        <FormItem
           type="tel"
           name="number"
           value={number}
           onChange={handleChange}
           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
           required
         />
        <FormBtn type="submit">Add contact</FormBtn>
        </Form>
    </div>
  );
};

export default AddContactForm;