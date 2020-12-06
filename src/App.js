import { Component } from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = contact => {
    this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }));
  };

  handleCheckUnique = name => {
    const { contacts } = this.state;
    const isContactUnique = !!contacts.find(contact => contact.name === name);

    isContactUnique && alert(`${name} is already in contacts`);

    return !isContactUnique;
  };

  handleRemoveContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          contactAdd={this.handleAddContact}
          checkUnique={this.handleCheckUnique}
        />

        <h2>Contacts</h2>
        <h3>Find contacts by name</h3>
        <Filter filter={filter} onChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onRemove={this.handleRemoveContact}
        />
      </div>
    );
  }
}

export default App;
