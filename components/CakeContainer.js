import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { buyCake } from '../redux/cake/cakeAction';

function CakeContainer() {
    const state = useSelector(state => state.cake.noOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
          
            <h2>No of cakes:{state}  </h2>
            <button onClick = {() =>dispatch(buyCake())}>BUY</button>
          
            
        </div> 
    )
}

export default CakeContainer
