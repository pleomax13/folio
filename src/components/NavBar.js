import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './css/NavBar.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Formik, Field, Form } from "formik";
import RegistrFormSchema from './RegistrFormSchema';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor() {
        super();

        this.state = {
            show: false
        };

        this.handleClose = this.handleClose.bind(this); 
        this.handleOpen = this.handleOpen.bind(this); 
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

    render(){
        return(
            <>
            <Navbar bg = 'dark' variant = 'dark' className = 'mx-auto nav sticky-top' collapseOnSelect expand = 'sm' fixed = 'top'>
                <Link className = 'navbar-brand' to = '/folio'><h3 className = 'm-auto'>.FOLIO</h3></Link>
                <Navbar.Toggle aria-controls = 'responsive-navbar-nav' />
                <Navbar.Collapse>
                    <Nav className = 'ml-auto mr-0 ' style = {{color: 'white'}}>
                        <Link to = '/folio' className = 'nav-link'>ГЛАВНАЯ</Link>
                        <Link to = '/folio/photographers' className = 'nav-link'>ФОТОГРАФЫ</Link>
                        <Link to = '/folio/auction' className = 'nav-link'>АУКЦИОН</Link>
                    </Nav>
                <Nav className = 'mr-0 ml-auto login text-right'>
                    <div >
                        <Nav.Link  onClick = {this.handleOpen}>ВОЙТИ</Nav.Link>
                    </div>
                    <Link to = '/folio/reg' className = 'nav-link'>ЗАРЕГИСТРИРОВАТЬСЯ</Link>
                </Nav>
                </Navbar.Collapse> 
            </Navbar>
            <Modal show = {this.state.show} onHide = {this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Авторизация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik 
                        initialValues = {{
                            email: '',
                            password: ''
                        }}
                        validationSchema = {RegistrFormSchema}
                        onSubmit = {() => console.log('done!')}
                        
                        render = {({ errors, touched}) => (
                            <Form
                                action="" 
                                method="post"
                            >
                                <div className="form-group">
                                    <label htmlFor = 'email'>E-mail</label>
                                    <Field 
                                        type="email" 
                                        className="form-control" 
                                        aria-describedby="emailHelp" 
                                        placeholder="example@example.com" 
                                        name="email"
                                    />
                                    {
                                        errors.email &&
                                        touched.email && <div className = 'text-danger'>{errors.email}</div>
                                    }
                                    <small id="emailHelp" className="form-text text-muted">Мы никогда не передадим вашу электронную почту кому-либо еще.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor = 'password'>Пароль</label>
                                    <Field 
                                        type="password" 
                                        className="form-control" 
                                        placeholder="Введите пароль" 
                                        name="password"
                                    />
                                    {
                                        errors.password &&
                                        touched.password && <div className = 'text-danger'>{errors.password}</div>
                                    }
                                </div>
                                <Button 
                                    variant = 'primary'
                                    //onClick = {this.handleClose}
                                    type = 'submit'
                                    className = 'd-block mx-auto'
                                >
                                    Войти
                                </Button>
                            </Form>
                        )}
                    />
                </Modal.Body>
            </Modal>
            </>
        );
    }
}

export default NavBar;