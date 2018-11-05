import React from 'react';
import { Consumer } from '../content/context';

//TODO: may need to move map functions into projectTemplate container to list one set of links per template

const ProjectLinks = props => {

  return(
    <Consumer>
      {value => {
        // console.log('🤯', value);
        const projects = value.projects;

        let githubLinks = projects.map((githubLink, i) => {
          const github = githubLink.links.github;

          return (
            <a key={i} href={github} rel="noopener noreferrer" target="_blank">GitHub</a>
          );
        });

        let appLinks = projects.map((appLink, i) => {
          const application = appLink.links.github;

          return (
            <a key={i} href={application} rel="noopener noreferrer" target="_blank">Launch</a>
          );
        });

        // console.log('githubLinks', githubLinks);

        return (
          <React.Fragment>
            <h3>ProjectLinks</h3>
            <table className="borderStyle">
      				<tbody>
      					<tr>
      						<td>
      							<div className="container">
      								{/*<a className="btn btn-2 launch" href={hrefApp} rel="noopener noreferrer" target="_blank">Launch</a>*/}
                      {appLinks}
      							</div>
      						</td>
      						<td>
      							<div className="container">
      								{/*<a className="btn btn-2 github" href={hrefGitHub} rel="noopener noreferrer" target="_blank">GitHub</a>*/}
                      {githubLinks}
      							</div>
      						</td>
      					</tr>
      				</tbody>
      			</table>
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export default ProjectLinks;
