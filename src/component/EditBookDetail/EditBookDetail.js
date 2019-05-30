import React, { useState } from 'react';
import '../AddBook/AddBook.css';
import { connect} from 'react-redux';
import {editBook} from '../../actions/BookActions';
import { bindActionCreators } from 'redux';

const EditBookDetail = (props) => {
    const {detail, index} = props.location.editParams;
    const [editObject, setEditedOjbect] = useState(detail);

    const changeHandler= (event) => {
        event.persist()
        setEditedOjbect((prevState)=>{
            const data = {...prevState,[event.target.name] : event.target.value};
            return data;
        })
    }

    const editBook = (event) =>{
        event.preventDefault();
        event.stopPropagation();
        const eventTarget = event.target.elements;
        const details = {
            'name': eventTarget[1].value.trim(),
            'author': eventTarget[2].value.trim(),
            'description' : eventTarget[3].value.trim(),
            'count' :editObject.count,
        }
        props.actions.editBook(details,index);
        props.history.push('/');
    }

    const navigateHomePage =() => {
        props.history.push('/');
        return null;
    }
    return (
        <>
            <form onSubmit={editBook} id="editBookForm">
                <div className='add_book_header'>
                    <h2>Edit Book Details</h2>
                </div>
                <div className='close_btn' onClick={navigateHomePage}>
                    <button>X</button>
                </div>
                <div className='add_book_content_wrapper'>
                    <label name='book_name' className='add_book_description_label'>Book Name</label>
                    <input type='text'name="name" placeholder='Name' onChange={(e)=>changeHandler(e)} value={editObject.name} className='add_book_text' required></input>
                </div>
                <div className='add_book_content_wrapper'>
                    <label name='book_author_name' className='add_book_description_label'>Author Name</label>
                    <input type='text' name='author' value={editObject.author} onChange={(e)=>changeHandler(e)} placeholder='Author' className='add_book_text' required></input>
                </div>
                <div className='add_book_content_wrapper'>
                    <label name='book_description' className='add_book_description_label'>Description</label>
                    <textarea type='text' name='description' value={editObject.description} onChange={(e)=>changeHandler(e)} placeholder='Description' className='add_book_text' required></textarea>
                </div>
                <div className='add_book_content_wrapper'>
                    <button type='submit'>Save Detail</button>
                </div>
            </form>
            </>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        actions: bindActionCreators({
            editBook
        },dispatch)
    }
}

export default connect(null,mapDispatchToProps )(EditBookDetail);