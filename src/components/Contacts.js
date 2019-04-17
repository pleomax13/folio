import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Contact from './Contact';
import Headline from './Headline';
import place from './css/images/place.svg';
import phone from './css/images/phone.svg';
import email from './css/images/email.svg';
import './css/Contacts.css'

class Contacts extends React.Component {
    render() {
        return(
            <div className = 'mx-auto contacts'>
                <Headline headline = 'контакты' />
                <Row style = {{maxWidth: '700px'}} className = 'mx-auto'>
                    <Col>
                        <Contact 
                            url = {place} 
                            info = 'г. Донецк' 
                        />
                    </Col>
                    <Col>
                        <Contact 
                            url = {phone} 
                            info = '+38099 123 45 67' 
                        />
                    </Col>
                    <Col>
                        <Contact 
                            url = {email} 
                            info = 'email@gmail.com' 
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Contacts;