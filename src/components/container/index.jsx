import React from 'react';
import About from '../templates/about';
import Contact from '../templates/contact';
import Technology from '../technology';
import ProjectLinks from '../projectLinks';
import { Consumer } from '../content/context';

const Container = () => {
  return(
    <Consumer>
      {value => {
        // console.log('apple', value);
        return (
          <React.Fragment>
            <About />
            <Contact />
            <Technology />
            <ProjectLinks />
          </React.Fragment>
        );
      }}
    </Consumer>
  );
}

export default Container;
