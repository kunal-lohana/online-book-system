import {ADD_BOOK_DESCRIBTION, EDIT_BOOK_DESCRIBTION, INCREMENT_COUNTER} from '../context/context.js';

export const addBook =(data) =>{
    return {
        type : ADD_BOOK_DESCRIBTION,
        payload : data
    }
}

export const editBook =(data,index) =>{
    return {
        type : EDIT_BOOK_DESCRIBTION,
        payload : data,
        index : index
    }
}

export const incrementCounter = (count, index) =>{
    return {
        type : INCREMENT_COUNTER,
        paylod : count,
        index : index
    }
}