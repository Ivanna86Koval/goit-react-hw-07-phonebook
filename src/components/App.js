import {Container, Title, SubTitle } from './App.styled'
import {AddContactForm} from './AddContactForm/AddContactForm';
import {Filter} from './Filter/Filter';
import { ContactList } from "./ContactList/ContactList";

export const App = () => {
     return (
      <Container>
        <Title>Phonebook</Title>
        <AddContactForm/>
        <SubTitle>Contacts</SubTitle>
        <Filter/>
        <ContactList/>
      </Container>
    );
};

