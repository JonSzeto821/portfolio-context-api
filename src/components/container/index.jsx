import React from 'react';
import About from '../templates/about';
import { Consumer } from '../content/context';

const Container = () => {
  return(
    <Consumer>
      {value => {
        console.log('apple', value);
        return (
          <React.Fragment>
            <h1>{value.about.name}</h1>
            <About />
          </React.Fragment>
        );
      }}
    </Consumer>
  );
}

export default Container;
