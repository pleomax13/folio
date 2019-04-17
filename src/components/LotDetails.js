import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Formik, Field, Form } from "formik";
import Headline from './Headline';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import {Link} from 'react-router-dom';
import * as Yup from 'yup';

class LotDetails extends React.Component {
    constructor() {
        super();

        this.state = {
            show: false
        }

        this.handleClose = this.handleClose.bind(this); 
        this.handleOpen = this.handleOpen.bind(this); 
    }

    endAuction() {
        const endDate = new Date(this.props.date);
        const now = new Date();
        const total = Math.ceil((endDate.getTime() - now.getTime())/1000/60/60/24);
        const string = total.toString();
        const last = string[string.length-1];
        const prev = string[string.length-2]
        const days = () => {
            if(last === '1' && prev !== '1') {
                return 'день'
            }
            else if ((last === '2'|| last === '3' || last === '4') && prev !== '1') {
                return 'дня'
            }
            else return 'дней'
        }
        
        if(total >= 0) {
            return [`${total} ${days()}`, false];
        }
        else if (endDate.getMonth() === now.getMonth() && endDate.getDate() === now.getDate()) {
            return ['0 дней', false];
        }
        else return ['Завершен', true];
    }

    handleClose() {
        this.setState({
            show: false
        });
    }

    handleOpen() {
        this.setState({
            show: true
        });
    }

    schema() {
        let start = this.props.startPrice;
        let current = this.props.price;
        start = parseInt(start, 10);
        current = parseInt(current, 10);

        function minVal() {
            if (current >= start) {
                return current+1;
            }
            else return start;
        }

        const schema = Yup.object().shape({
            rate: Yup.number()
                .min(minVal(),`Минимальная ставка: ${minVal()} руб`)
        });

        return schema;
    }

    render() {
        const days = this.endAuction()[0];
        const buttonDis = this.endAuction()[1];
        const schema = this.schema();

        return(
            <div className = 'main-content px-3'>
            <Headline headline = 'подробно о лоте'/>
            <ButtonToolbar className = 'mb-3 mt-3'>
                <Button
                    variant = 'danger'
                    className = 'mr-2 mb-2'
                    onClick = {() => this.handleOpen()} 
                >
                    Удалить лот
                </Button>
                <Link
                    variant = 'primary'
                    className = 'mb-2 btn btn-primary'
                    to = {`/folio/auction/lot/${this.props.id}/edit-lot`}
                >
                    Редактировать лот
                </Link>
            </ButtonToolbar>
            <Row>
                <Col className = 'justify-content-center' xl = {6} lg = {6} md = {6}>
                    <img src = {this.props.img} style = {{maxWidth: 'auto', width: '100%'}} className = 'rounded' alt = {this.props.name}/>
                </Col>
                <Col xl = {6} lg= {6} md = {6}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{this.props.name}</Card.Title>
                        </Card.Body>
                        <ListGroup className = 'list-group-flush'>
                            <ListGroup.Item className = 'd-flex' style = {{height: '75px'}}>
                                <div>Автор:</div>
                                <div className = 'text-secondary ml-auto mr-0 text-right'>
                                    {this.props.author}
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item className = 'd-flex'>
                                <div>Год:</div>
                                <div className = 'text-secondary ml-auto mr-0 text-right'>
                                    {this.props.year}
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button 
                                className = 'mx-auto'
                                variant = 'danger'
                                block
                                disabled
                            >
                                {this.props.startDate} - {this.props.date}
                            </Button>
                        </Card.Body>
                        <ListGroup className = 'list-group-flush'>
                            <ListGroup.Item className = 'd-flex'>
                                <div>До окончания осталось:</div>
                                <div className = 'text-dark ml-auto mr-0 text-right font-weight-bold'>
                                    {days}
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item className = 'd-flex'>
                                <div>Старт:</div>
                                <div className = 'text-dark ml-auto mr-0 text-right font-weight-bold'>
                                    {this.props.startPrice} руб
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item className = 'd-flex'>
                                <div>Текущая цена:</div>
                                <div className = 'text-dark ml-auto mr-0 text-right font-weight-bold'>
                                    <span className = 'text-success'>{this.props.price}</span> руб
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                        <Card.Footer>
                            <Formik 
                                initialValues = {{
                                    rate: ''
                                }}
                                validationSchema = {schema}
                                onSubmit = {() => console.log('done')}
                                render = {({ errors, touched }) => (
                                    <Form
                                        name = 'formRate'
                                        action = {this.props.action}
                                        method = 'post'
                                        className = 'form-box form-inline'
                                    >
                                        <div className = 'form-group mx-auto mt-2 d-flex flex-column'>
                                            <Field
                                                type = 'number'
                                                className = 'form-control mr-auto'
                                                name = 'rate'
                                                disabled = {buttonDis}
                                            />
                                            {
                                                errors.rate &&
                                                touched.rate && <div className = 'text-danger mx-auto mt-1'>{errors.rate}</div>
                                            }
                                           
                                        </div>
                                        <Button 
                                                variant = 'primary' 
                                                className = 'mx-auto mt-2' 
                                                type = 'submit'
                                                name="submit"
                                                disabled = {buttonDis}
                                            >
                                                Сделать ставку
                                            </Button>
                                    </Form>
                                )}
                            />
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Modal show = {this.state.show} onHide = {this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Удаление</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Удалить лот?</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick = {this.handleClose}>Нет</Button>
                            <Button variant="danger">Да</Button>
                        </Modal.Footer>
            </Modal>
            </div>
        );
    }
}

export default LotDetails;