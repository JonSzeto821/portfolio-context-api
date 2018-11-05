import React from 'react';
import { Consumer } from '../content/context';

//TODO: update logo file paths once all imported

const Technology = props => {
  return(
    <Consumer>
      {value => {
        // console.log('🤓', value);
        const [projects] = [value.projects];

        let projectList = projects.map((arrayItem, i) => {
          const [technology] = [arrayItem.technology];

          return technology;
        });

        let techList = projectList.map((techItem, i) => {
          const [name, logo, altText] = [techItem[i].name, techItem[i].logo, techItem[i].altText];

          return (
            <img className="techLogo" key={i} name={name} src={logo} alt={altText} />
          );
        });

        return (
          <React.Fragment>
            <h3>Technology</h3>
            {techList}
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export default Technology;
