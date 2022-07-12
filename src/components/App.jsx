import { Component } from 'react';
// import { nanoid } from 'nanoid';
import Container from './Container';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return <Container title="Phonebook"></Container>;
  }
}
