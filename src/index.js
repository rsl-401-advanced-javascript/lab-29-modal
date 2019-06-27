import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './app.js';

class Main extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={App} />
      </Router>
    )
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
