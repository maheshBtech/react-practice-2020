import {SUCCESS,FAIL,REQUEST} from './UserType';


 export const request = () =>{
    return{
        type:REQUEST
    }
}
export const success = (users) =>{
    return{
        type:SUCCESS,
        payload:users
    }
}
export const fail = (error) =>{
    return{
        type:FAIL,
        payload:error
    }
}

export const fetchUsers = () =>{
    return (dispatch)=>{
        dispatch(request)
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            dispatch(success(res.data))
        })
        .catch((err) =>{
            dispatch(fail(errorMsg))

        })
      }
}