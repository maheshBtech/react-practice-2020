import React ,{Component} from 'react';
import updatedComponent from './HocFile'

class FileA extends Component{
    // constructor()
    // {
    //     super()
    //     this.state = {
    //         count:0
    //     }
    // }

    // onclick = () =>{
    //     // this.setState(prevState => {
    //     //     return {count:prevState.count +1}
    //     // })
    //     this.setState({
    //         count:this.state.count +1
    //     })
    
    // }
    render()
    {
        const {count,onclick} = this.props
        return(
            <div>
                <button onClick = { () =>onclick()}> clicks : {count} times</button>
            </div>
        )
    }
}
export default updatedComponent(FileA)