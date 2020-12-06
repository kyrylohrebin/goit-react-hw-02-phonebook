import { Component } from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

class App extends Component {
  state = {
    contacts: [],
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

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          contactAdd={this.handleAddContact}
          checkUnique={this.handleCheckUnique}
        />

        <h2>Contacts</h2>
        <ContactList contacts={contacts} onRemove={this.handleRemoveContact} />
      </div>
    );
  }
}

export default App;
