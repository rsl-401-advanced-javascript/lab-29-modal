import React from 'react';

import Form from './form.js';
import Modal from './modal';
import If from './if';

import './styles.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      people: [],
      selectedPerson: '',
    };
  }

  handleForm = (count, people) => {
    this.setState({ count, people });
  };

  showPerson = person => {
    this.setState({ selectedPerson: person });
  };

  deselectPerson = () => {
    this.setState({ selectedPerson: '' });
  }

  render() {
    return (
      <>
        <Form prompt="Get some Star Wars Folks..." handler={this.handleForm} />
        <If condition={this.state.selectedPerson}>
          <Modal close={this.deselectPerson}>
            <h3>Selected Character: {this.state.selectedPerson}</h3>
          </Modal>
        </If>
        <ul>
          {Object.keys(this.state.people).map((person, idx) => {
            return (
              <li key={idx}>
                <a href="#" onClick={() => this.showPerson(person)}>
                  {person}
                </a>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
