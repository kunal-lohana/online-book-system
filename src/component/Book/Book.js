import React from 'react';
import '../Home/Home.css';
import { connect} from 'react-redux';
import { Link } from 'react-router-dom';
import editBookDetailImage from '../../Images/edit.png';
import bookImage from '../../Images/book-image.jpeg';
import {incrementCounter} from '../../actions/BookActions';
import { bindActionCreators } from 'redux';

const Book = ( props) => {
    const {detail, index} = props;

    const incrementCount = (count , index) => {
        const incrementCount = count +1;
        props.actions.incrementCounter(incrementCount, index);
    }
    
        return (
            <div key={`${detail.name} ${index}`} className='book_list_content'>
                <div className="book_header">
                    <img alt='' src={bookImage} className='default_book_image'></img>
                    <div className='edit-icon-wrapper' title='Edit Book'>
                        <Link  to={{pathname: '/edit-book',  editParams:{detail:detail,index : index}}} >
                            <img alt='' src={editBookDetailImage} className='edit_icon_image'/>
                        </Link>
                    </div>
                    <div className='book_name'>
                    <span className='description_label'>Book Name : </span>
                    <div className='description_value'><span >{detail.name}</span></div>
                    </div>
                </div>
                <div className='book_description'>
                    <div className='book_content'>
                        <span className='description_label'>Author : </span>
                        <div className='description_value'>
                            <span >{detail.author}</span></div>
                        </div>
                    <div className='book_content'>
                        <span className='description_label'>Description : </span>
                        <div className='description_value'><span >{detail.description}</span></div>
                    </div>
                    <div className="book_content">
                        <div className="view-count">
                            <span>Count : {detail.count}  </span>
                            <div className="view-book" onClick={()=>incrementCount(detail.count,index)}>
                                <Link to={{pathname: '/show-book',  editParams:{detail:detail,index : index}}} ><button>View Book</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


const mapDispatchToProps = (dispatch) =>{
    return {
        actions: bindActionCreators({
            incrementCounter
        },dispatch)
    }
}

export default connect( null , mapDispatchToProps )(Book);