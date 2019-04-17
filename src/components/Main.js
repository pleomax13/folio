import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";
import About from './About';
import Photographers from './Photographers';
import LotsList from './LotsList';
import Registr from './Registr';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import './css/MainAnim.css';

class Main extends React.Component {
    render(){
        return(
            <main style = {{maxWidth: '1300px',}} className = 'mx-auto'>
                <TransitionGroup>
                    <CSSTransition classNames="fade" timeout={250} key = {this.props.location.key}>
                        <Switch location = {this.props.location}>
                            <Route exact path = '/folio' component = {About}/>
                            <Route path = '/folio/photographers' component = {Photographers} />
                            <Route path = '/folio/auction' component = {LotsList} />
                            <Route path = '/folio/reg' component = {Registr} />
                            <Route render = {() =>
                                <h1 className = 'text-center'>Not Found</h1>
                            } />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </main>
        );
    }
}

export default Main;