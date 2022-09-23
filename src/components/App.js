import React, { Component } from 'react';
import uniqid from "uniqid";
import Overview from './Overview';
class App extends Component {
    constructor() {
      super();
      this.state = {
        task: {text: "", id: uniqid()},
        tasks: [],
      }
    }
    handleChange = (e) => {
        this.setState({
          task : {
            text: e.target.value,
            id: this.state.task.id,
          }
        });
      };
      
      onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
          tasks: this.state.tasks.concat(this.state.task),
          task: { text: '' , id: uniqid()},
        });
      };
    render(){
        console.log(this.state)
        const { task, tasks } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmitTask}>
                    <label htmlFor = "taskInput">Enter Task: </label>
                    <input
                    onChange={this.handleChange}
                    type = "text"
                    id = "taskInput"
                    value = {task.text}
                    />
                    <button type='submit'>Add Task</button>
                </form>
                <Overview tasks={tasks}/>
            </div>
        )
    }
}
  export default App;