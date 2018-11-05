import React, { Component } from 'react';
import { Consumer } from '../content/context';
import About from '../templates/about';

class Test extends Component {
  render () {
    return(
      <Consumer>
        {value => {
          console.log('guava', value);
          let [about, location, bio] = [value.about, value.about.location, value.about.bio];

          return (
            <React.Fragment>
              <About />
              <h3>{about.links.contact.email}</h3>
              <h3>{location}</h3>
              <p>{bio.p1}</p>
              <p>{bio.p2}</p>
              <p>{bio.p3}</p>
              <img src={value.image} alt="little bob belcher" />
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Test;
