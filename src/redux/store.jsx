import {createStore, combineReducers} from 'redux';
import  {multiformReducer,tabReducer} from './reducer';


const rootReducer =combineReducers({
    multiform: multiformReducer,
    tab: tabReducer
})


export const store = createStore(rootReducer)