import React from 'react';

import './css/Headline.css'

class Headline extends React.Component {
    render() {
        return (
            <h2 className = 'headline text-center mb-4'>
                {this.props.headline.toUpperCase()} /
            </h2>
        );
    }
}

export default Headline;