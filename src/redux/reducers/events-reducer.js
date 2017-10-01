import { FETCH_EVENTS } from '../actions/index';

function eventsReducer (state = [], action) {
    switch(action.type) {
        case FETCH_EVENTS : 
            console.log("action FETCH_EVENTS ", action);
            console.log(action.payload.data.results);
            const newEvents = action.payload.data.results;
            return newEvents
        default : 
            return state;
    }
}

export default eventsReducer;