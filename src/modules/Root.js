import React from "react";
import {Provider} from "react-redux";
import configureStore from './../state';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import todoContainer from "./todos//components/container";
import configureApi from "./../api";

const _store = configureStore();
export const api = configureApi()

export default () => (
<Provider store={ _store }>
    <Router>
        <Switch>
            <Route path ="/todos" component={todoContainer}/>
            <Redirect to="/todos"/>
        </Switch>
    </Router>
</Provider>
);