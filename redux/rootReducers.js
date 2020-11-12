import{combineReducers} from 'redux';
import  CakeReducer from './cake/cakeReducer';
import  IceReducer from './Ice/IceReducer'
import UserReducer from './user/UserReducer';


const rootReducer = combineReducers({
    ice : IceReducer,
    cake : CakeReducer,
    user:UserReducer
})

export default rootReducer