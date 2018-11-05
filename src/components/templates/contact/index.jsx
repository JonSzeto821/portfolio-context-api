import React from 'react'
// import PropTypes from 'prop-types'
import { Consumer } from '../../content/context'
import GHIcon from '../../content/icons/GH_Icon.svg';
import LIIcon from '../../content/icons/LI_Icon.svg';
import EmailIcon from '../../content/icons/Email_Icon.svg';
import LocationIcon from '../../content/icons/location_icon.svg';
import PhoneIcon from '../../content/icons/phone_icon.svg';
import '../../../styles/contact.css';

const Contact = props => {
  return (
    <Consumer>
      {value => {
        console.log('💩', value);
        const [email, linkedin, github, location, phone] = [value.about.links.contact.email, value.about.links.linkedin, value.about.links.github, value.about.location, value.about.phone];

        console.log('icons', value.icons);

        return (
          <React.Fragment>
            <div id="contactContainer">
        			<div id="contact-head">
        				<h2>Contact</h2>
{/*        				<img
        					className={["iconSize", "hide-mobile", "contact-icon"].join(' ')}
        					name='name'
        					src={icon.image}
        					alt={icon.altText}
        				/>*/}
        			</div>
        			<div id="contactContent">
        				<ul className="social-media">
        			        <li>
        						<a href={github} target="_blank"><img className="logoSize" id="GHIcon" src={GHIcon} alt="GitHub Icon" /></a>
        						<a href={github} target="_blank" className="link">GitHub</a>
        			        </li>
        			        <li>
        						<a href={linkedin} target="_blank"><img className="logoSize" id="LIIcon" src={LIIcon} alt="LinkedIn Icon" /></a>
        						<a href={linkedin} target="_blank" className="link">LinkedIn</a>
        					</li>
        					<li>
        						<a href={email} className="link"><img className="logoSize" id="EmailIcon" src={EmailIcon} alt="Email Icon" /></a>
        						<a href={email} className="link">Email</a>
        					</li>
        				</ul>
        				<ul className="location-phone">
        				    <li>
        						<img className="logoSize" id="LocationIcon" src={LocationIcon} alt="Location Icon" />
        						<div className="inline-mobile">{location}</div>
        					</li>
        					<li>
        				   		<img className="logoSize" id="LocationIcon" src={PhoneIcon} alt="Location Icon" />
        				    	<div className="inline-mobile">{phone}</div>
        				    </li>
        				</ul>
        			</div>
        		</div>
          </React.Fragment>
        );
      }}
    </Consumer>
  )
}

export default Contact;
