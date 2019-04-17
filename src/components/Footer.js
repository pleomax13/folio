import React from 'react';
import './css/Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className = 'footer mx-auto'>
                <div className = 'text-center mt-auto mb-0 text-white'>&copy; Dmitry Saveliev, 2019</div>
            </footer>
        );
    }
}

export default Footer;