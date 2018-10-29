import React, { Component } from 'react';
import { getItems } from './actions/userActions';
import UserList from './components/UserList'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import './App.css';

import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Container>
            <UserList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
