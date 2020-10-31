import React,{Component} from 'react';
import Axios from 'axios';
import './paging.css'



class Paging extends  Component
{
    constructor(props){
        super(props)
        this.state = {
            data:[],
            tableData:[],
            currentPage:1,
            rowsPerPage:10,
            Pages:[]
        }
    }

    setPagesIndex = () =>
    {
        console.log("setpages called")
        const{data,rowsPerPage,Pages} = this.state;
        
        let cloneData = Object.assign([],Pages)
        
        for(let i=1;i<=Math.ceil(data.length/rowsPerPage);i++)
        {
            cloneData[i-1]=i;  
        }

        this.setState({
            Pages:cloneData,
        })  
    }

    componentDidMount()
    {
       // this.getTableData()
    }

    getTableData = async() =>{
        console.log("axios called")
       
       Axios.get('https://jsonplaceholder.typicode.com/comments')
       .then((res) =>{
            this.setState({
                data:res.data
            })
             this.setPagesIndex()
            this.setTableData();
           
       })
       .catch((err)=>{
           console.log(err)
       })      
    }

    setTableData =async () =>
    {
        try{
            const {rowsPerPage,data,currentPage,Pages} =this.state
            const page = currentPage === 0 || currentPage === Pages.length+1 ? 1: currentPage;
            let lastPageIndex =  page * rowsPerPage;
            let firstPageIndex = lastPageIndex -  rowsPerPage;
            let tablerows  =data.slice(firstPageIndex,lastPageIndex);

              this.setState({
                tableData:tablerows,
                currentPage:page
            })
        }
        catch(err)
        {
            console.log(err)
        }
    }

    setCurrentPage = async(n) =>
    { 
       console.log(`clicked,${n}`)

       await this.setState({
            currentPage:n
        })

        this.setTableData();
    }
    next =async() =>{
     const { currentPage , Pages } = this.state
      await this.setState({
            currentPage:this.state.currentPage+1
        })
        this.setTableData();
    }
      previous =async() =>{

      await this.setState({
            currentPage:this.state.currentPage-1
        })
        this.setTableData();
    }
    render()
    {
        const {Pages,tableData} = this.state
        // console.log(this.state.currentPage)
        return(
            <div>
                <div>
                    <table>
                        <tbody>
                            
                                <tr>
                                    <th>Sno</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>body</th>
                                </tr>
                           
                            {
                               tableData?
                                tableData.map((i,index) =>{
                                   return(
                                        <tr key = {index}>
                                        <td>{i.id}</td>
                                        <td>{i.name}</td>
                                        <td>{i.email}</td>
                                        <td>{i.body}</td>
                                    </tr>
                                   )
                                })
                                :null
                            }
                        </tbody>
                    </table>
                </div>
               {/* <PagingIndex totalLength = {data.length} totalRows = {rowsPerPage}/> */}
               <div className = "nav"  >
                   <ul>
                       {/* <li >
                          <a onClick = {() =>this.previous()} href = "#"> Previous</a>
                       </li> */}
                       <button onClick = {() =>this.previous()}>Previous</button>
                   </ul>
                   {
                       Pages.map((i,index) =>(
                       <li key = {index}>
                           <a onClick = {() =>this.setCurrentPage(i)} href = "#" >{i}</a>
                           </li>
                       ))
                   }
                   <ul>
                       {/* <li>
                         <a onClick = {() =>this.next()} href = "#">  Next</a>
                       </li> */}
                       <button onClick = {() => this.next()}>Next</button>
                   </ul>
                   {/* <div className = "nav" >
                       {
                          Pages.map(Number=>(
                               <div key = {Number}>
                                   <button onClick = {() =>this.setCurrentPage(Number)}>
                                       {Number}
                                       </button>
                               </div>
                           )
                            )
                       }
                   </div> */}


                   
                   
               </div>

            </div>
        )
    }
}

export default Paging
