import React from "react";
import {ToDoList} from "./ToDoList";
import "./ToDoStyle.css";


export class ToDoCreateTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            task: "",
        }
    }

    onTaskChangeHandler = (e) => {
        this.setState((prev) =>({
            ...prev,
            task: e.target.value,
        }));
    }

    onSubmitHandler = (e) => {
        e.preventDefault();
        if (this.state.task)
        this.setState(prev => ({
            task: "",
            tasks: [...prev.tasks, { task: this.state.task }
            ],
        }))
    }

    render() {
        return (
            <>
                <form className="form" onSubmit={this.onSubmitHandler}>
                    <label>Input task
                        <input type="text" className="taskInput" id="input"
                               onChange={this.onTaskChangeHandler} value={this.state.task}/>
                        <button id="btn"> Submit </button>
                    </label>
                </form>
                <ul className="taskHolderWrapper" id="taskHolderWrapper">
                {this.state.tasks.map(({task}, index) => (
                        <ToDoList key = {task + index} task = {task} index = {index}/>
                    ))}
                </ul>
            </>
        );
    }
}