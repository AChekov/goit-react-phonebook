import { Component } from 'react';
import { nanoid } from 'nanoid';
// import { Title } from './App.styled';
import AppContainer from './AppContainer';
import Container from './Container';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const findContact = this.state.contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    findContact
      ? alert('This name is already in contact')
      : this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = event => {
    const { value } = event.currentTarget;

    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    return (
      <AppContainer title="Phonebook">
        <Container title="You can add new contacts below:">
          <ContactForm onSubmit={this.addContact} />
        </Container>
        <Container title="Your Contacts:">
          <Filter filter={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        </Container>
      </AppContainer>
    );
  }
}
