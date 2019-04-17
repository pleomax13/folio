import React from 'react';
import { Formik, Field, Form } from "formik";
import Headline from './Headline';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import AddPhotographerSchema from './AddPhotographerSchema';
import './css/Main.css';
import './css/forms.css';
import {Link} from 'react-router-dom';

function simulateNetworkRequest() {
    return new Promise(resolve => setTimeout(resolve, 500));
  }

class AddPhotographer extends React.Component {
    constructor() {
        super();

        this.state = {
            isLoading : false
        }
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

        return (
            <div className = 'main-content'>
                <Headline headline = {this.props.headline}/>
                <Formik
                    initialValues = {{
                        fio: this.props.fio === undefined ? '' : this.props.fio,
                        birthday: this.props.birthday === undefined ? '' : this.props.birthday,
                        inform: this.props.inform === undefined ? '' : this.props.inform
                    }}
                    validationSchema = {AddPhotographerSchema}
                    onSubmit = {this.handleClick}

                    render = {({errors, touched}) => (
                        <Form
                            name = {this.props.name}
                            action = {this.props.action}
                            method = 'post'
                            className = 'form-box'
                        >
                            <div className = 'form-group'>
                                <label htmlFor = 'fio'>ФИО</label>
                                <Field 
                                    type = 'text'
                                    className = 'form-control'
                                    name = 'fio'
                                />
                                {
                                    errors.fio &&
                                    touched.fio && <div className = 'text-danger'>{errors.fio}</div>
                                }
                            </div>
                            <div className = 'form-group'>
                                <label htmlFor = 'birthday'>Дата рождения</label>
                                <Field 
                                    type = 'date'
                                    className = 'form-control'
                                    name = 'birthday'
                                />
                                {
                                    errors.birthday &&
                                    touched.birthday && <div className = 'text-danger'>{errors.birthday}</div>
                                }
                            </div>
                            <div className = 'form-group'>
                                <label htmlFor = 'inform'>Информация</label>
                                <Field 
                                    component = 'textarea'
                                    className = 'form-control'
                                    name = 'inform'
                                />
                                {
                                    errors.inform &&
                                    touched.inform && <div className = 'text-danger'>{errors.inform}</div>
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
                                        {isLoading ? 'Отправка...' : 'Сохранить'}
                                    </Button>
                                    <Link 
                                        className = 'btn btn-secondary'
                                        name="cancel"
                                        to = '/folio/photographers'
                                    >
                                        Отмена
                                    </Link>
                                </ButtonToolbar>
                        </Form>
                    )}
                />
            </div>
        );
    }
}

export default AddPhotographer;