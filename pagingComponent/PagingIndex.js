import React, { Component } from 'react'

export class PagingIndex extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             pagesIndex:[],
             totalLength:this.props.totalLength,
             totalRows:this.props.totalRows
        }
    }


    componentDidMount(){
        this.fetchTableIndex()
        console.log(this.props.totalLength)
    }

   fetchTableIndex = () =>
   {
       const{totalLength,totalRows} = this.state
        for(let i=1;i<=Math.ceil(totalLength/totalRows);i++)
            {
                   this.state.pagesIndex.push(i)
            }

           

         
   }
    
    render() {
        const{pagesIndex}=this.state
         console.log(pagesIndex)
         this.fetchTableIndex()
        
            return(
             <div>
                    
                         <ul >
                             {
                        pagesIndex.map((i) =>{
                            return(
                               
                                    <li key = {i}>
                                        <a href = "!#">{i}</a>
                                        </li>
                            )
                        })    
                    }
                    </ul>
                    
                </div>
        )
    }
}

export default PagingIndex
