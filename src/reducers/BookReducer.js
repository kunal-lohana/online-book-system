import {ADD_BOOK_DESCRIBTION, EDIT_BOOK_DESCRIBTION, INCREMENT_COUNTER} from '../context/context';

const data= [
    {
        'name': 'The 4-Hour Work Week',
        'author': 'Tim Ferriss',
        'description' : 'A cross between Jack Welch and a Buddhist monk',
        'count' : 6
    },{
        'name': 'The Power of Positive Thinking',
        'author': 'Norman Vincent Peale',
        'description' : ' The Power of Positive Thinking is a book written to help men and women who are haunted with living in a inferiority complex and have lost faith in themselves',
        'count' : 5
    },{
        'name': 'Think & Grow Rich',
        'author': 'Napoleon Hill',
        'description' : ' To the greatest extent possible, the text and formatting have been kept exactly the same as in the original release with the exception of some minor formatting changes.',
        'count' : 1
    },{
        'name': 'Secret',
        'author': 'Paul nausek',
        'description' : 'When you have it, anything seems achievable. When it is lacking, it can sometimes be tough to get out of bed',
        'count' : 10
    }
];

const initialState = {
    book_list : data,
    add_book : {},
    edit_book : {},
    delete_book : null
}


const BookReducer = (state = initialState, action) => {
    switch (action.type) {     
        
        case ADD_BOOK_DESCRIBTION:
            const book_list= [...state.book_list.concat(action.payload)];
            return {book_list :book_list};

        case EDIT_BOOK_DESCRIBTION:
            const data=[...state.book_list.slice(0, action.index), action.payload, ...state.book_list.slice(action.index+1)]     
            return {book_list:data};

        case INCREMENT_COUNTER:
            let detail = {...state.book_list[action.index]};
            detail.count =  action.paylod;       
            const object = [...state.book_list.slice(0, action.index), detail, ...state.book_list.slice(action.index+1)];
            return {book_list:object};

        default:         
            return state;  
    }
} 
export {BookReducer};