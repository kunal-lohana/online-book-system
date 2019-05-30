import React from 'react';
import '../AddBook/AddBook.css';
import { connect} from 'react-redux';
import {addBook} from '../../actions/BookActions';
import { bindActionCreators } from 'redux';

const AddBook = (props) => {
    const authenticateBookDetails = (event) =>{
        event.preventDefault();
        event.stopPropagation();
        const eventTarget = event.target.elements;
        const details = {
            'name': eventTarget[1].value.trim(),
            'author': eventTarget[2].value.trim(),
            'description' : eventTarget[3].value.trim(),
            'count': 0,
        }
        props.actions.addBook(details);
        props.history.push('/');
        
    }
    const navigateHomePage =() => {
        props.history.push('/');
        return null;
    }
    return (
        
            <form onSubmit={authenticateBookDetails} id="addBookForm">
                <div className='add_book_header'>
                    <h2>Add Book Details</h2>
                </div>
                <div className='close_btn' onClick={navigateHomePage}>
                    <button>X</button>
                </div>
                <div className='add_book_content_wrapper'>
                    <label name='book_name' className='add_book_description_label'>Book Name</label>
                    <input type='text' placeholder='Name' className='add_book_text' required></input>
                </div>
                <div className='add_book_content_wrapper'>
                    <label name='book_author_name' className='add_book_description_label'>Author Name</label>
                    <input type='text' placeholder='Author' className='add_book_text' required></input>
                </div>
                <div className='add_book_content_wrapper'>
                    <label name='book_description' className='add_book_description_label'>Description</label>
                    <textarea type='text' placeholder='Description' className='add_book_text' required></textarea>
                </div>
                <div className='add_book_content_wrapper'>
                    <button type='submit'>Add Book</button>
                </div>
            </form>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        actions: bindActionCreators({
            addBook
        },dispatch)
    }
}

export default connect(null,mapDispatchToProps )(AddBook);