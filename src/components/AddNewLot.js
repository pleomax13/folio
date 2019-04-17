import React from 'react';
import { Formik, Field, Form } from "formik";
import Headline from './Headline';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import AddNewLotSchema from './AddNewLotSchema';
import './css/Main.css';
import './css/forms.css';
import photData from './photData';
import {Link} from 'react-router-dom';

function simulateNetworkRequest() {
    return new Promise(resolve => setTimeout(resolve, 500));
  }

class AddNewLot extends React.Component {
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
        const photographers = photData.map(val =><option value={val.fio} key = {val.id}>{val.fio}</option>);

        return(
            <div className = 'main-content'>
                <Headline headline = {this.props.headline}/>
                <Formik 
                    initialValues = {{
                        name: '',
                        year:'',
                        startPrice:'',
                        dateEnd:'',
                        author:'',
                        addFile: ''
                    }}
                    validationSchema = {AddNewLotSchema}
                    onSubmit = {this.handleClick}

                    render = {({ errors, touched }) => (
                        <Form
                            name = 'formAddLot'
                            action = {this.props.action}
                            method = 'post'
                            className = 'form-box'
                        >
                             <div className = 'form-group'>
                                <label htmlFor = 'name'>Название лота</label>
                                <Field 
                                    type = 'text'
                                    className = 'form-control'
                                    name = 'name'
                                />
                                {
                                    errors.name &&
                                    touched.name && <div className = 'text-danger'>{errors.name}</div>
                                }
                            </div>
                            <div className = 'form-group'>
                                <label htmlFor = 'author'>Автор</label>
                                <Field 
                                    component = 'select'
                                    className = 'form-control'
                                    name = 'author'
                                >
                                {
                                    errors.author &&
                                    touched.author && <div className = 'text-danger'>{errors.author}</div>
                                }
                                    {photographers}
                                </Field>
                            </div>
                            <div className = 'form-group'>
                                <label htmlFor = 'year'>Год</label>
                                <Field 
                                    type = 'number'
                                    className = 'form-control'
                                    name = 'year'
                                />
                                {
                                    errors.year &&
                                    touched.year && <div className = 'text-danger'>{errors.year}</div>
                                }
                            </div>
                            <div className = 'form-group'>
                                <label htmlFor = 'priceStart'>Стартовая цена</label>
                                <Field 
                                    type = 'number'
                                    className = 'form-control'
                                    name = 'priceStart'
                                />
                                {
                                    errors.priceStart &&
                                    touched.priceStart && <div className = 'text-danger'>{errors.priceStart}</div>
                                }
                            </div>
                            <div className = 'form-group'>
                                <label htmlFor = 'dateEnd'>Дата окончания</label>
                                <Field 
                                    type = 'date'
                                    className = 'form-control'
                                    name = 'dateEnd'
                                />
                                {
                                    errors.dateEnd &&
                                    touched.dateEnd && <div className = 'text-danger'>{errors.dateEnd}</div>
                                }
                            </div>
                            <div className = 'form-group'>
                                <label htmlFor = 'addFile'>Загрузка фотографии</label>
                                <Field 
                                    type = 'file'
                                    className = 'form-control-file'
                                    name = 'addFile'
                                />
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
                                        to = '/folio/auction'
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

export default AddNewLot;