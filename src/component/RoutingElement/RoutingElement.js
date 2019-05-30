/* eslint-disable no-unused-expressions */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home.js';
import '../RoutingElement/RoutingElement.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AddBook from '../AddBook/AddBook';
import EditBookDetails from '../EditBookDetail/EditBookDetail';
import ShowBook from '../showBook/ShowBook';


const  RoutingElement = () => {
    return(
        <BrowserRouter>
                <Header/>
                    <div className='container'>
                        <Switch>
                            <Route exact strict path="/" component={Home}></Route>
                            <Route exact strict path="/add-book" component={AddBook}></Route>
                            <Route exact strict path="/edit-book" component={EditBookDetails}></Route>
                            <Route exact strict path="/show-book" component={ShowBook}></Route>
                        </Switch>
                    </div>
                <Footer/>
        </BrowserRouter>
    )
}
export default RoutingElement;
