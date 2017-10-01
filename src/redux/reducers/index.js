import { combineReducers } from 'redux';
import events from './events-reducer';
import categories from './categories-reducer';

const rootReducer = combineReducers(
    {
        events,
        categories
    }
)

export default rootReducer;