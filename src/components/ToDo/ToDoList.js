import React from "react";

export class ToDoList extends React.Component {

    render() {
        return (
                <li className="task" id={this.props.index}>
                    <p className="taskText">{this.props.task}</p>
                    <div>
                        <button className="btnDel">Delete</button>
                        <button className="btnDone">Done</button>
                    </div>
                </li>
        );
    }
}