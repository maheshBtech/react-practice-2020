 import {BUY_ICE} from './IceTypes'
 const initialState = {
     noOfIce:20
 }
 
 const IceReducer = (state = initialState,action) =>{
     switch(action.type)
     {
         case BUY_ICE:
             return{
                 ...state,noOfIce : state.noOfIce-1
             }
         default:return state
     }
 }

 export default IceReducer

 