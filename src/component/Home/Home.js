import React , { useState, useEffect } from "react";
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import '../Home/Home.css';
import Book from '../Book/Book.js';
import AddBookImage from '../../Images/add-book.png';
import { Link } from 'react-router-dom';

const Home = (props) => {
    const [ book_list, setBookList] = useState([]);
    const [ search, setSearch] = useState('');
    const [search_book, setSearchData] = useState([]);
    let search_obj =[];

    useEffect(() => {
        setBookList(props.book_list_state);
    }, [book_list, props.book_list_state]);

    const searchBook = (e,search) => {
        const inputValue = e.target.value;
        setSearch(inputValue);
        let search_book = book_list.filter( (book, index) => {
            return book.name.toLowerCase().indexOf(inputValue) !== -1
        })
        setSearchData(search_book);
    }

    const getBookObject = () =>{
        search_obj = search_book.length ? search_book : book_list;
        const obj = search_obj.length ? ( 
            search_obj.map((book ,index) =>{
                return (<Book key={`${book.name} ${index}`} detail={book} index={index}/>)
            })
        ) :   (<div><p>No Records found</p></div>)
        return obj;
    }
    

    return (
        <>
            <div className='book_list_header'>
                <div className='add_button_wrapper'>
                    <Link  to= '/add-book' title='Add Book' >
                        <img alt='' src={AddBookImage} className='add_icon_image'/>
                    </Link>
                </div>
                <div>
                    <input type='text' className='search_input_box' value={search} placeholder='search...' onChange={(e)=>searchBook(e,search)}></input>
                </div>
            </div>
            <div className='book_list_wrapper'> 
                {   
                    getBookObject()
                }
            </div>
        </>
    )
}
const mapStateToProps = (state) => {
    const data = state.BookReducer;
    return {
        book_list_state : data.book_list,
    }
}

export default withRouter(connect(mapStateToProps, null)(Home));

