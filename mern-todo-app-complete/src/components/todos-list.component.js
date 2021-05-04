import React, { Component } from 'react'

import axios from 'axios';
import Delete from './delete-todo.component'
export default class TodosList extends Component {
    constructor(props) {
        super(props);
        this.state = {todos: []};
    }
    
    async componentDidMount()  {
       await axios.get('https://app-todo-thien.herokuapp.com/Todos')
            .then(response => {
                if (response.data == null){return}
                this.setState({ todos: response.data });
    
            })
            
            .catch(function (error){
                console.log(error);
            })
            
        }
    abc =  (e) =>{
            console.log(e.id)
            
            let newData = this.state.todos.filter(el=>el._id != e._id)
            this.setState({todos: newData});
            console.log(newData);
        }
 
    render() {
      
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.todos.map((currentTodo, index) =>(
                            <Delete currentTodo={currentTodo} key={index} todo={this.abc} onClick={this.abc}/>
                         ))}

                    </tbody>

                </table>
            </div>
        )
    }
}
