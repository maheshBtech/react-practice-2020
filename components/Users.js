import React, { Component } from 'react'

export class Users extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             age:''
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    
    render() {
        const {name,age} = this.state
        return (
            <div>
                <h4>name:{name} and age:{age}</h4>

                <form>
                    <input
                    placeholder = "enter name"
                    type = "text"
                    value = {name}
                    name = 'name'
                    onChange = {this.handleChange}
                    />
                    <br/>
                     <input
                    placeholder = "enter age"
                    type = "text"
                    value = {age}
                    name = 'age'
                    onChange = {this.handleChange}
                    />
                    
                </form>
                
            </div>
        )
    }
}

export default Users
