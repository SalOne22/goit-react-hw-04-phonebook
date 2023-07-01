import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { Form, Input, Label } from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  nameInputId = nanoid();

  state = INITIAL_STATE;

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    this.props.onSubmit({ ...this.state });
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            pattern="^[A-Za-z\u0080-\uFFFF ']+$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={this.state.number}
            pattern="^(\+?[0-9.\(\)\-\s]*)$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <button type="submit">Add contact</button>
      </Form>
    );
  }
}
