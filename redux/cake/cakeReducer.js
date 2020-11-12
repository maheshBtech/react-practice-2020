const { BUY_CAKE } = require("./cakeType")

const initialState = {
    noOfCakes:10
}

const CakeReducer = (state = initialState,action) =>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,noOfCakes: state.noOfCakes-1
            }
            default:return state
    }

}

export default  CakeReducer