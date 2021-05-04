import React, { Component } from 'react'
import axios from 'axios'
import { Link  } from 'react-router-dom';
export default class Delete extends Component {
    constructor(props) {
        super(props);
        
    }
async submit(e) {
        const obj = {
            todo_description: e.todo_description,
            todo_responsible: e.todo_responsible,
            todo_priority: e.todo_priority,
            todo_completed: e.todo_completed
        };
        this.props.todo(e)

     await   axios.delete('https://app-todo-thien.herokuapp.com/Todos/delete/'+e._id, obj)
      
      
       
}

    render() {
        return (
        <tr >
            <td className={this.props.currentTodo.todo_completed ? 'completed' : ''}>{this.props.currentTodo.todo_description}</td>
            <td className={this.props.currentTodo.todo_completed ? 'completed' : ''}>{this.props.currentTodo.todo_responsible}</td>
            <td className={this.props.currentTodo.todo_completed ? 'completed' : ''}>{this.props.currentTodo.todo_priority}</td>
            <td>
                <Link className="btn btn-success" to={"/edit/" + this.props.currentTodo._id}>Edit</Link>
                
                <Link type="button" onClick={()=>this.submit(this.props.currentTodo)}  to={"/"} className="btn btn-danger ml-5">delete</Link>
            </td>
        </tr>
        )
    }
}
