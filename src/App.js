import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from './components/container';
import { Provider } from './components/content/context';
// import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <h1>New Portfolio with Context API</h1>
            <Switch>
              <Route exact path='/' component={Container} />
            </Switch>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
