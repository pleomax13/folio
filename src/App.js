import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
//import Home from './components/Home';
//import Registr from './components/Registr';
//import AddPhotographer from './components/AddPhotographer';
//import AddNewLot from './components/AddNewLot';
//import EditLot from './components/EditLot';
//import {LotsList} from './components/LotsList';
//import Photographers from './components/Photographers';
//import {getComp} from './components/LotsList';
import Main from './components/Main';
//import LotDetails from './components/LotDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main location = {this.props.location}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
