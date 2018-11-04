import React, { Component } from 'react';

const MyContext = React.createContext();

export class Provider extends Component {
  state = {
    header: `Search for a Hero`,
    name: 'Jon Szeto',
    image: 'Image',
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
