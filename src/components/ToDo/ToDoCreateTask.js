import React from "react";
import { v4 } from "uuid";
import {ToDoList} from "./ToDoList";
import "./ToDoStyle.css";
import {Select} from "../Select/Select";

const ALL_TASKS = "0";
const DONE = "1";
const IN_PROGRESS = "2";
const SELECT_OPTIONS = [
    {
        text: "All tasks",
        value: ALL_TASKS,
    },
    {
        text: "Done",
        value: DONE,
    },
    {
        text: "In progress",
        value: IN_PROGRESS,
    }
];

export class ToDoCreateTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            task: "",
            taskToEdit: {},
            tasksTypeToShow: ALL_TASKS,
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
            tasks: [...prev.tasks,
                {
                    task: this.state.task,
                    id: v4(),
                    isUnDone: false,

                },
            ],
        }));
    }
    onEditHandler = (taskId) => {
        this.setState(prev => ({
            taskToEdit: prev.tasks.filter(function (task) {
                return task.id === taskId ;
            })
        }))
        console.log(this.state.taskToEdit[0].task);
        this.setState({
            task: this.state.taskToEdit[0].task

        })
    }
    onRemoveChild = (taskId) => {
        this.setState(prev =>({
            tasks: prev.tasks.filter(function (task) {
                return taskId !== task.id;
            }),
        }));
    }
    onStatusChangeHandler = (taskId) => {
        this.setState((prev) => ({
            ...prev,
            tasks: prev.tasks.map((task) => {
                if (task.id !== taskId) {
                    return task;
                } else {
                    return {
                        ...task,
                        isUnDone: !task.isUnDone,
                    };
                }
            }),
        }));
        console.log(this.state.tasks);
    }
    onSelectChangeHandler = (e) => {
        this.setState((prev) =>({
            ...prev,
            taskTypeToShow: e.target.value,
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
                <Select label = "Show user:"
                        options = { SELECT_OPTIONS }
                        onChange ={ this.onSelectChangeHandler }
                />
                <ul className="taskHolderWrapper" id="taskHolderWrapper">
                    {this.state.tasks
                        .filter(({isUnDone}) => {
                            switch (this.state.taskTypeToShow) {
                                case DONE:
                                    return isUnDone;
                                case IN_PROGRESS:
                                    return !isUnDone;
                                case ALL_TASKS:
                                default:
                                    return true;
                            }
                        })
                        .map(({task, id, isUnDone}, index) =>(
                            <ToDoList
                                key = { id }
                                id = { id }
                                task = { task }
                                index = { index }
                                isUnDone = { isUnDone }
                                onStatusChange = {this.onStatusChangeHandler}
                                remove = { this.onRemoveChild }
                                edit = { this.onEditHandler }
                            />
                        ))
                    }
                </ul>
            </>
        );
    }
}