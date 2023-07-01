import { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { Section } from './Section';
import theme from 'theme';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

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

  createContact = ({ name, number }) => {
    name = name.trim();

    if (
      this.state.contacts.find(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    this.setState(prev => {
      return {
        contacts: [...prev.contacts, { name, number, id: nanoid() }],
      };
    });
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterContacts = () => {
    return this.state.contacts.filter(({ name }) =>
      name.includes(this.state.filter)
    );
  };

  handleFilter = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.createContact} />
        </Section>
        <Section title="Contacts">
          <Filter onChange={this.handleFilter} />
          <ContactList
            contacts={this.filterContacts()}
            onDelete={this.deleteContact}
          />
        </Section>
      </ThemeProvider>
    );
  }
}
