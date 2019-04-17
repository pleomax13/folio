import React from 'react';
import Table from 'react-bootstrap/Table';
import './css/Main.css';
import Headline from './Headline';
import photData from './photData';
import bin from './images/bin.svg';
import pencil from './images/pencil.svg';
import {Link, Switch, Route} from 'react-router-dom';
import AddPhotographer from './AddPhotographer';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Edit extends React.Component {
    findPhotographer(id) {
        const phot = photData.filter(value => value.id === id);

        return phot[0];
    }

    render() {
        const phot = this.findPhotographer(parseInt(this.props.match.params.id, 10));

        if (!phot) {
          return <div className = 'main-content text-center'><h4>Извините, фотограф не найден</h4></div>
        }

        return(
            <AddPhotographer 
                name = 'formEdPeople'
                action = ''
                headline = 'редактирование информации о фотографе'
                fio = {phot.fio}
                birthday = {phot.birthday}
                inform = {phot.inform}
            />
        );
    }
}

class Photographers extends React.Component {
    constructor() {
        super();

        this.state = {
            fio: '',
            birthday: '',
            inform: '',
            show: false,
            id: ''
        }

        this.dataState = this.dataState.bind(this);
        this.handleClose = this.handleClose.bind(this); 
        this.handleOpen = this.handleOpen.bind(this); 
    }

    dataState(fio, birthday, inform) {
        this.setState({
            fio: fio,
            birthday: birthday,
            inform: inform
        });
    }

    handleClose() {
        this.setState({
            show: false
        });
    }

    handleOpen(id, fio) {
        this.setState({
            show: true,
            id: id,
            fio: fio
        });
    }

    render() {
        const phot = photData.map(value => 
                <tr key = {value.id}>
                    <td>{value.fio}</td>
                    <td>{value.birthday}</td>
                    <td>{value.inform}</td>
                    <td className = 'text-center'>
                        <Link 
                            className = 'mr-3 mb-3'
                            to = {`/folio/photographers/edit-photographer/${value.id}`} 
                            title = 'Редактировать'
                        >
                            <img src = {pencil} alt = 'Редактировать'/>
                        </Link>
                        <span 
                            onClick = {() => this.handleOpen(value.id, value.fio)} 
                            style = {{cursor: 'pointer'}}
                        >
                            <img src = {bin} alt = 'Удалить'/>
                        </span>
                    </td>
                </tr>
            );
        return(
            <>
                <Switch>
                    <Route path = '/folio/photographers/add-photographer' 
                        render = {() => 
                            <AddPhotographer 
                                name = 'formAddPeople'
                                action = ''
                                headline = 'добавление информации о фотографе' 
                            />
                        } 
                    />
                    <Route exact path = '/folio/photographers' 
                        render = {() =>
                            <div className = 'main-content px-3'>
                                <Headline headline = 'фотографы'/>
                                    <Link className = 'btn btn-primary mb-3 text-white' to = '/folio/photographers/add-photographer'>Добавить фотографа</Link>
                                    <Table variant = 'dark' striped hover bordered responsive>
                                        <thead>
                                            <tr>
                                                <th>ФИО</th>
                                                <th>Дата рождения</th>
                                                <th>Информация</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {phot}
                                        </tbody>
                                    </Table>
                            </div>
                        }
                    />
                    <Route 
                        path = '/folio/photographers/edit-photographer/:id' 
                        component = {Edit}
                            />
                        }
                    />
                </Switch>
                <Modal show = {this.state.show} onHide = {this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Удаление</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Удалить запись о фотографе:</p>
                            <p>{this.state.fio}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick = {this.handleClose}>Нет</Button>
                            <Button variant="danger" data-id = {this.state.id}>Да</Button>
                        </Modal.Footer>
                </Modal>
            </>
            
        );
    }
}

export default Photographers;