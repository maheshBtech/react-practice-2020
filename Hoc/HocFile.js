import React from 'react';

const updatedComponent = (OriginalComponent) =>{
    class upComponent extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                count:0
            }
        }
        onclick = () =>{
            this.setState(prevState =>{
                return{count:prevState.count + 1}
            })
        }

        render()
        {
            return(
                <OriginalComponent count = {this.state.count} onclick = {this.onclick}/>
            )
        }     
    }

    return upComponent
}

export default updatedComponent