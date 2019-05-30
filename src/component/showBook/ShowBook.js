import React, { useState } from 'react';
import '../AddBook/AddBook.css';
import { connect} from 'react-redux';

const ShowBook = (props) => {
    const {detail} = props.location.editParams;
    const [editObject, setEditedOjbect] = useState(detail);

    
    
    const navigateHomePage =() => {
        props.history.push('/');
        return null;
    }
    return (
        <div id="editBookForm">
            <div className='add_book_header'>
                <h2>Show Book Details</h2>
            </div>
            <div className='close_btn' onClick={navigateHomePage}>
                <button>X</button>
            </div>
            <div className='add_book_content_wrapper'>
                <span name='book_name' className='add_book_description_label'>Book Name:</span>
                <p name="name" className='show_book_detail'>{editObject.name}</p>
            </div>
            <div className='add_book_content_wrapper'>
                <span name='book_author_name' className='add_book_description_label'>Author Name: </span>
                <p name='author'className='show_book_detail'>{editObject.author}</p>
            </div>
            <div className='add_book_content_wrapper'>
                <span name='book_description' className='add_book_description_label'>Description :</span>
                <p className='show_book_detail'>{editObject.description}</p>
            </div>
        </div>
    )
}



export default connect(null ,null )(ShowBook);