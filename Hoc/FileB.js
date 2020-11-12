import React ,{Component} from 'react';
import updatedComponent from './HocFile'
class FileB extends Component{
    // constructor()
    // {
    //     super()
    //     this.state = {
    //         count:0
    //     }
    // }

    // onclick = () =>{
    //     this.setState(
    //         {
    //             count:this.state.count+1
    //         }
    //     )
    // }
    render()
    {
        const {count,onclick} = this.props
        return(
            <div>
                <button onMouseOver = {() =>onclick()}> clicks : {count} times</button>
            </div>
        )
    }
}
export default updatedComponent(FileB)