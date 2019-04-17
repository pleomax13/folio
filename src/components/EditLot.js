import React from 'react';
import { Formik, Field, Form } from "formik";
import Headline from './Headline';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import EditLotSchema from './EditLotSchema';
import './css/Main.css';
import './css/forms.css';
import photData from './photData';
import {Link} from 'react-router-dom';

function simulateNetworkRequest() {
    return new Promise(resolve => setTimeout(resolve, 500));
  }

class EditLot extends React.Component {
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
                <Headline headline = 'редактирование лота'/>
                <Formik 
                    initialValues = {{
                        name: this.props.name,
                        dateEnd: this.props.dateEnd,
                        startPrice: this.props.startPrice,
                        author: this.props.author,
                        dateStart: this.props.startDate,
                        addFile: '',
                        year: this.props.year
                    }}
                    validationSchema = {EditLotSchema}
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
                                <label htmlFor = 'startPrice'>Стартовая цена</label>
                                <Field 
                                    type = 'number'
                                    className = 'form-control'
                                    name = 'startPrice'
                                />
                                {
                                    errors.startPrice &&
                                    touched.startPrice && <div className = 'text-danger'>{errors.startPrice}</div>
                                }
                            </div>
                            <div className = 'form-group'>
                                <label htmlFor = 'dateStart'>Дата начала</label>
                                <Field 
                                    type = 'date'
                                    className = 'form-control'
                                    name = 'dateStart'
                                />
                                {
                                    errors.dateStart &&
                                    touched.dateStart && <div className = 'text-danger'>{errors.dateStart}</div>
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
                                        to = {`/folio/auction/lot/${this.props.id}`}
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

export default EditLot;