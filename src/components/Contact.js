import React from 'react';
import Image from 'react-bootstrap/Image';
import './css/Contact.css'

class Contact extends React.Component {
    render() {
        return(
            <div className = 'contact d-flex flex-column justify-content-center mx-auto mb-5'>
                <Image src = {this.props.url}/>
                <div className = 'mt-3 text-center'>
                    {this.props.info}
                </div>
            </div>
        );
    }
}

export default Contact;