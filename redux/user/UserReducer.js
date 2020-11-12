import {SUCCESS,FAIL,REQUEST} from './UserType';

const initialState = {
    loading:false,
    users:[],
    error:''
}

const UserReducer = (state = initialState,action) =>{
    switch(action.type){
        case SUCCESS:
            return{
                loading:false,
                users:action.payload,
                error:''
            }
        case FAIL:
            return{
                loading:false,
                users:[],
                error:action.payload
            }
        case REQUEST:
            return {
                ...state,
                loading:true
            }
            default : return state

    }
}
export default UserReducer