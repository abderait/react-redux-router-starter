import axios from 'axios';
//import events_json from '../data/events.json';
import categories_json from '../data/categories.json';

export const FETCH_EVENTS = 'FETCH_EVENTS';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';

export function fetchEvents(limit) {
    const request = axios.get('https://randomuser.me/api/?results='+ limit +'&nat=FR')
    const action = {
        type: FETCH_EVENTS,
        payload : request
    }
    return action;
}

export function fetchCategories() {
    const action = {
        type: FETCH_CATEGORIES,
        payload : categories_json
    }
    return action;
}