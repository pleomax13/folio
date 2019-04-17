import React from 'react';
import Headline from './Headline';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/About.css';
import './css/Main.css';

class About extends React.Component {
    render() {
        return (
            <div className = 'mx-auto main-content'>
                <Headline headline = 'о сервисе'/>
                <Row className = 'mx-auto' style = {{maxWidth: '1300px'}}>
                    <Col className = 'text-justify d-flex align-items-center'>
                        <div>
                            <p>
                            Сервис предназначен для проведения аукционов фотографий.
                            Здесь вы можете просмотреть список фотографов,которые предоставляют свои работы для покупки, а также весь список лотов.
                            </p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default About;