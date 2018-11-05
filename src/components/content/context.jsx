import React, { Component } from 'react';
// import axios from 'axios';
import { about, project, icons } from './content.json';

const MyContext = React.createContext();

export class Provider extends Component {

  state = {
    about: about,
    projects: project,
    icons: icons,
    image: 'https://i.pinimg.com/originals/3b/13/7d/3b137da67bd82e35cb2136ebf894ea5d.jpg',
  };

  componentDidMount() {

  }

  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export const Consumer = MyContext.Consumer;
