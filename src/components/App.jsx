import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { nanoid } from 'nanoid';
import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { useLocalStorage } from 'hooks/useLocalStorage';
import theme from 'theme';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const createContact = ({ name, number }) => {
    name = name.trim();

    if (
      contacts.find(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }

    setContacts(prev => [...prev, { name, number, id: nanoid() }]);
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const filterContacts = () => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
  };

  const handleFilter = evt => {
    setFilter(evt.target.value.toLowerCase());
  };

  return (
    <ThemeProvider theme={theme}>
      <Section title="Phonebook">
        <ContactForm onSubmit={createContact} />
      </Section>
      <Section title="Contacts">
        <Filter onChange={handleFilter} />
        <ContactList contacts={filterContacts()} onDelete={deleteContact} />
      </Section>
    </ThemeProvider>
  );
};
