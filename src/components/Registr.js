import React from 'react';
import { Formik, Field, Form } from "formik";
import Headline from './Headline';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import RegistrFormSchema from './RegistrFormSchema';
import './css/Main.css';
import './css/forms.css';

function simulateNetworkRequest() {
    return new Promise(resolve => setTimeout(resolve, 500));
  }

class Registr extends React.Component {
    constructor() {
        super();

        this.state = {
            isLoading: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({isLoading: true}, () => {
            simulateNetworkRequest().then(() => {
                this.setState({ isLoading: false });
              });
        });
    }

    render() {
        const {isLoading} = this.state;

        return(
            <div className = 'main-content'>
                <Headline headline = 'регистрация нового пользователя'/>
                <Formik 
                    initialValues = {{
                        email: '',
                        username: '',
                        password: ''
                    }}
                    validationSchema = {RegistrFormSchema}
                    onSubmit = {this.handleClick}
            
                    render = {({ errors, touched }) => (
                        
                        <Form
                            name="formreg"
                            action="" 
                            method="post"
                            className = 'form-box'
                        >
                        <div className="form-group">
                                <label htmlFor = 'username'>Имя</label>
                                <Field 
                                    type="text" 
                                    className="form-control" 
                                    name="username"
                                />
                                {
                                    errors.username &&
                                    touched.username && <div className = 'text-danger'>{errors.username}</div>
                                }
                            </div>
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
                                <ButtonToolbar className = 'justify-content-center'>
                                    <Button 
                                        variant = 'primary' 
                                        className = 'mr-3' 
                                        type = 'submit'
                                        name="submit"
                                        disabled = {isLoading}
                                    >
                                        {isLoading ? 'Отправка...' : 'Зарегистрироваться'}
                                    </Button>
                                    <Button 
                                        variant = 'secondary'
                                        name="cancel"
                                        onClick = {() => this.props.history.goBack()} //вернуться назад
                                    >
                                        Отмена
                                    </Button>
                                </ButtonToolbar>
                        </Form>
                    )}
                />
            </div>
        );
    }
}

export default Registr;