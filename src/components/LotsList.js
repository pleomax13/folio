import React from 'react';
import Row from 'react-bootstrap/Row';
import './css/Main.css';
import Headline from './Headline';
import Lot from './Lot';
import lotData from './lotData';
import {Link, Switch, Route} from 'react-router-dom';
import AddNewLot from './AddNewLot';
import LotDetails from './LotDetails';
import EditLot from './EditLot';

class Details extends React.Component {
    findLot(id) {
        const lot = lotData.filter(value => value.id === id);

        return lot[0];
    }

    render() {
        const lot = this.findLot(parseInt(this.props.match.params.id, 10));

        if (!lot) {
            return <div className = 'main-content text-center'><h4>Извините, лот не найден</h4></div>
        }

        return(
            <LotDetails 
                img = {lot.img}
                name = {lot.name}
                author = {lot.author}
                year = {lot.year}
                startDate = {lot.startDate}
                date = {lot.date}
                startPrice = {lot.startPrice}
                price = {lot.price}
                action = ''
                id = {lot.id}
            />
        );
    }
}

class Edit extends React.Component {
    findLot(id) {
        const lot = lotData.filter(value => value.id === id);

        return lot[0];
    }

    render() {
        const lot = this.findLot(parseInt(this.props.match.params.id, 10));

        if (!lot) {
          return <div className = 'main-content text-center'><h4>Извините, лот не найден</h4></div>
        }

        return(
            <EditLot 
                name = {lot.name}
                author = {lot.author}
                year = {lot.year}
                startDate = {lot.startDate}
                dateEnd = {lot.date}
                startPrice = {lot.startPrice}
                action = ''
                id = {lot.id}
            />
        );
    }
}

class LotsList extends React.Component {
    render() {
        const Lots = lotData.map(value => <Lot 
            img = {value.img} 
            key = {value.id}
            name = {value.name}
            price = {value.price}
            author = {value.author}
            date = {value.date} 
            dataId = {value.id}
            link = {`/folio/auction/lot/${value.id}`} 
          />);

        return(
            <Switch>
                <Route exact path = '/folio/auction'
                    render = {() =>
                        <div className = 'main-content px-3'>
                            <Headline headline = 'список лотов' />
                            <Link className = 'btn btn-primary text-white mb-4' to = '/folio/auction/add-new-lot'>Добавить лот</Link>
                            <Row className = 'justify-content-center'> 
                                {Lots}
                            </Row>
                        </div>
                    }
                />
                <Route path = '/folio/auction/add-new-lot' 
                    render = {() =>
                        <AddNewLot headline = 'добавление нового лота'/>
                    } 
                />
                <Route path = '/folio/auction/lot/:id/edit-lot' component = {Edit} />
                <Route path = '/folio/auction/lot/:id' component = {Details}/>
            </Switch>
        );
    }
}

export default LotsList;