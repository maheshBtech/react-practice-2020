import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {buyIce} from '../redux/Ice/IceActions';


function Ice() {
    const state = useSelector(state => state.ice.noOfIce)
    const dispatch = useDispatch()
    return (
        <div>
          
            <h2>No of iceCreams:{state}  </h2>
            <button onClick = {() =>dispatch(buyIce())}>BUY</button>
          
            
        </div> 
    )
}

export default Ice
