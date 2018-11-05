import React from 'react';
import About from '../templates/about';
import Contact from '../templates/contact';
import Technology from '../technology';
import { Consumer } from '../content/context';

const Container = () => {
  return(
    <Consumer>
      {value => {
        // console.log('apple', value);
        return (
          <React.Fragment>
            <h1>{value.about.name}</h1>
            <About />
            <Contact />
            <Technology />
          </React.Fragment>
        );
      }}
    </Consumer>
  );
}

export default Container;
