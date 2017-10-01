import React from 'react'; 
import ReactDom from 'react-dom';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';    
import { BrowserRouter, Route, Switch }  from 'react-router-dom';

import LayoutUn from './components/LayoutUn';
import LayoutHome from './components/LayoutHome';
import rootReducer from './redux/reducers';
import { fetchEvents, fetchCategories } from './redux/actions';

// Feuille de style
import './styles.css';

//const store = createStore(rootReducer);
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
let store = createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//console.log("store.getState() : ", store.getState())
store.subscribe(
    () => console.log("store.subscribe() ", store.getState())
);
store.dispatch(fetchEvents(8));
store.dispatch(fetchCategories());
//console.log("store.getState() : ", store.getState())

ReactDom.render(
    <Provider store={store} >
        <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/page-1" component={LayoutUn} />
                        <Route path="/" component={LayoutHome} />
                    </Switch>
                </div>
            </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);