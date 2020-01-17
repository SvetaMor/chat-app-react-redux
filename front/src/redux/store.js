import {createStore, combineReducers} from 'redux';
import appReducer from './appReducer';
import {reducer as formReducer} from 'redux-form';

let reducers=combineReducers({
    form: formReducer,
    app: appReducer
});

let store = createStore(reducers);

export default store;
