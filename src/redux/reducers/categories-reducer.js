import { FETCH_CATEGORIES } from '../actions/index';

function categories (state = [], action) {
    switch(action.type) {
        case FETCH_CATEGORIES : 
            console.log("action FETCH_CATEGORIES ", action);
            return action.payload;
        default : 
            return state;
    }   
}

export default categories;