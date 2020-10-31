import React, { Component } from 'react';
import Model from 'react-modal';
import './model.css';
Model.setAppElement('#root');

 class ModelPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             modelIsOpen:false,
             popupEdit:false,
             name:'',
             desg:'',
             number:'',
             id:'',
             db:[]
        }
    }
    submit = (e) =>
    {
        const{name,desg,number} =this.state 
        e.preventDefault()
        const obj = {
            name,desg,number,id:Date.now()
        }
        this.setState({
            db:[...this.state.db,obj],
            modelIsOpen:false,
            name:'',
            desg:'',
            number:''
        })
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    editButton = (e) =>
    {
        const res = this.state.db.filter(i => i.id === e);
            if(res)
            {
                 res.map(i=>(
            this.setState({
                name:i.name,
                desg:i.desg,
                number:i.number,
                id:i.id,
                popupEdit:true
                })
                ))
            }
    }
    save = (e) =>
    {
        e.preventDefault();
        const {id,name,number,desg,db} = this.state;
        const data = Object.assign([],db);
        const index = db.findIndex(i=>i.id === id);
        const user = Object.assign({},data[index])
        user.name = name;
        user.desg = desg;
        user.number = number;
        data[index] = user;
        this.setState({db:data,popupEdit:false,name:'',
            desg:'',
            number:'',id:''});
    }
    delete = (id) =>
    {
        const data = Object.assign([],this.state.db);
        const index = data.findIndex(i =>i.id === id);
        data.splice(index,1);
        this.setState({db:data})

    }
    
    render() {
        const {modelIsOpen,name,desg,number,db,popupEdit} = this.state
        
        return (
            <div>
                
             <div>
                  <Model
                    className = 'modal'
                    isOpen = {popupEdit}
                    onRequestClose = {() =>this.setState({popupEdit:false,name:'',desg:'',number:''})}
                  >
                       <div className = "modalWrapper" >
                        <form onSubmit = {this.save}>
                            <input type = "text" placeholder = "Name" name = "name" value = {name} onChange = {this.handleChange}/>
                             <input type = "text" placeholder = "Desg" name = "desg" value = {desg} onChange = {this.handleChange}/>
                              <input type = "text" placeholder = "number" name = "number" value = {number} onChange = {this.handleChange}/>
                              <button type = "submit">Save</button>
                        </form>
                        <button onClick = {() =>{this.setState({popupEdit:false,name:'',desg:'',number:''})}}>close</button>
                    </div>


                  </Model>

             </div>
             {/* <marquee scrollamount = "10">
                 <p>REST or RESTful APIs were designed to take advantage of existing protocols. 
                     While REST - or Representational State Transfer - can be used over nearly any protocol,
                      when used for web APIs it typically takes advantage of HTTP.
                      ... One of the key advantages of REST APIs is that they provide a great deal of flexibility</p>
             </marquee> */}

                <button  onClick = {() =>{this.setState({modelIsOpen:true})}}>Add</button>
             
                <Model
                className = 'modal'
                isOpen = {modelIsOpen}
                onRequestClose = {() =>this.setState({modelIsOpen:false})}
                >
                    <div className = "modalWrapper" >
                        <form onSubmit = {this.submit}>
                            <input type = "text" placeholder = "Name" name = "name" value = {name} onChange = {this.handleChange}/>
                             <input type = "text" placeholder = "Desg" name = "desg" value = {desg} onChange = {this.handleChange}/>
                              <input type = "text" placeholder = "number" name = "number" value = {number} onChange = {this.handleChange}/>
                              <button type = "submit">Add</button>
                        </form>
                        <button onClick = {() =>{this.setState({modelIsOpen:false})}}>close</button>
                    </div>
                </Model>
                
                <div>
                    <table>
                        <tbody>
                            
                            <tr>
                                <th>Sno</th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Number</th>
                                <th>Action</th>
                            </tr>
                            {
                                db.length?
                                db.map((i,index) =>
                                (
                                    <tr key = {index}>
                                         <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            {i.name}
                                        </td>
                                        <td>
                                            {i.desg}
                                        </td>
                                        <td>
                                            {i.number}
                                        </td>
                                        <td>
                                            <button onClick = {() => this.editButton(i.id)}>Edit</button>
                                            <button onClick = {() =>{this.delete(i.id)}}>Delete</button>
                                        </td>
                                       
                                    </tr>

                                ))
                                :null
                            }

                        </tbody>
                    </table>
                </div>

           

               
             
                
            </div>
        )
    }
}

export default ModelPage
