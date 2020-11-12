
import {createStore} from 'redux';
import rootReducer from './rootReducers'


const Store = createStore(rootReducer)

export default Store 