import React, { Component } from 'react';
import { Consumer } from '../content/context';

class Test extends Component {
  render () {
    return(
      <Consumer>
        {value => {
          console.log('test comp', value);
          return (
            <React.Fragment>
              <h1>{value.name}</h1>
              <h3>{value.image}</h3>
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Test;
