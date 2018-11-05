import React from 'react'
// import PropTypes from 'prop-types'
import { Consumer } from '../../content/context'

const About = props => {
  return (
    <Consumer>
      {value => {
        console.log('guava', value);
        const [bio, name, image] = [value.about.bio, value.about.name, value.about.image];

        return (
          <React.Fragment>
      			<table id="aboutContainer">
      				<thead>
      					<tr>
      						<td>
      							<h1>{name}</h1>
      						</td>
      					</tr>
      				</thead>
      				<tbody >
      					<tr>
      						<td>
      							<img className="center imgSize" name='name' src={image} alt='altText' />
      						</td>
      					</tr>
      					<tr className="bio">
      						<td>
      							<div>{bio.p1}</div><br />
      							<div>{bio.p3}</div>
      						</td>
      					</tr>
      					<tr className="contact-btn">
      						<td>
      							<div className="container">
      								{/*<a
      									className="btn btn-2 launch"
      									onClick={() => props.jumpToSlide()}
      								>
      								Contact
      								</a>*/}
                      <button
      									className="btn btn-2 launch"
      									onClick={() => props.jumpToSlide()}
      								>
      								Contact
                    </button>
      							</div>
      						</td>
      					</tr>
      				</tbody>
      			</table>
      			<br />
      			<br />
      			<br />
          </React.Fragment>
        );
      }}
    </Consumer>
  )
}

export default About;
