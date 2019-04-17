import React from 'react';
import About from './About';
import Contacts from './Contacts';
import './css/Main.css';

class Home extends React.Component {
    render() {
        return(
            <div className = 'main-content'>
                <About />
                <Contacts />
            </div>
        );
    }
}

export default Home;