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
    contacts: [],
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

  componentDidMount() {
    try {
      const localContacts = localStorage.getItem('contacts') ?? '[]';

      this.setState({
        contacts: JSON.parse(localContacts),
      });
    } catch (err) {
      console.error(err);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      try {
        const localContacts = JSON.stringify(this.state.contacts);

        localStorage.setItem('contacts', localContacts);
      } catch (err) {
        console.error(err);
      }
    }
  }

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
