import {createStore} from 'redux';
import {reducer as formReducer} from 'redux-form';

let store = createStore(formReducer);

export default store;
