import React from 'react';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import RootReducers from '../reducers/RootReducers';
import RoutingElement from '../component/RoutingElement/RoutingElement.js';


const initialState= {}
const store = createStore(RootReducers,initialState,applyMiddleware())

const  Store = () => {
    return (
        <Provider store={store}>
            <RoutingElement/>
        </Provider>
    )
}

export default Store;
