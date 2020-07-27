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
    const baseName = "/online-book-system";
    return(
        <BrowserRouter basename={baseName}>
                <Header/>
                    <div className='container'>
                        <Switch>
                            <Route exact strict path="/" component={Home}></Route>
                            <Route  path="/add-book" component={AddBook}></Route>
                            <Route  path="/edit-book" component={EditBookDetails}></Route>
                            <Route  path="/show-book" component={ShowBook}></Route>
                        </Switch>
                    </div>
                <Footer/>
        </BrowserRouter>
    )
}
export default RoutingElement;
