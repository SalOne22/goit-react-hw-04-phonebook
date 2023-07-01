import PropTypes from 'prop-types';

import { ContactItem, List } from './ConstactList.styled';

export const ContactList = ({ contacts, onDelete }) => (
  <List>
    {contacts.map(({ name, number, id }) => (
      <ContactItem key={id}>
        <p>
          {name}: {number}
        </p>
        <button onClick={() => onDelete(id)}>Delete</button>
      </ContactItem>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
