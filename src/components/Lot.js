import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';

class Lot extends React.Component {
    endAuction() {
        const endDate = new Date(this.props.date);
        const now = new Date();
        const total = endDate.getTime() - now.getTime();

        if(total >= 0) {
            return this.props.date;
        }
        else if (endDate.getMonth() === now.getMonth() && endDate.getDate() === now.getDate()) {
                return 'Сегодня';
            }
            else return 'Завершен';
    }

    render() {
        const date = this.endAuction();
        return(
            <Col xl = {3} lg = {4} md = {5} sm = {6}>
                <Link 
                    style = {{maxWidth: '300px', textDecoration: 'none'}} 
                    className = 'card overflow-hidden mx-auto mb-4' 
                    to = {this.props.link}
                >
                        <div className = 'bg-secondary d-flex justify-content-center align-items-center img-lot-container' style = {{width: '100%', height: '250px', maxHeight: '250px'}}>
                            <Card.Img variant = 'top' src = {this.props.img} style = {{height: 'auto', maxWidth: '100%', width: 'auto', maxHeight: '250px'}}/>
                        </div>
                        <Card.Body>
                            <Card.Title className = 'text-dark'>{this.props.name}</Card.Title>
                        </Card.Body>
                        <ListGroup className = 'list-group-flush'>
                            <ListGroup.Item className = 'd-flex' style = {{height: '75px'}}>
                                <div className = 'text-dark'>Автор:</div>
                                <div className = 'text-secondary ml-auto mr-0 text-right'>
                                    {this.props.author}
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item className = 'd-flex'>
                                <div className = 'text-dark'>Текущая цена:</div>
                                <div className = 'text-primary ml-auto mr-0 text-right font-weight-bold'>
                                    {this.props.price}
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                        <Card.Footer>
                            <small className = 'text-muted d-flex'>
                                <div>Дата окончания:</div>
                                <div className = 'ml-auto mr-0 text-right font-weight-normal'>
                                    {date}
                                </div>
                            </small>
                        </Card.Footer>
                </Link>
            </Col>
        );
    }
}

export default Lot;