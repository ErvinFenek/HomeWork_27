import React from "react";

export class ToDoList extends React.Component {

    render() {
        return (
                <li className="task" id={this.props.index}>
                    <p className="taskText">{this.props.task}</p>
                    <div>
                        <button className="btnDel">Delete</button>
                        <input
                            type="checkbox"
                            checked={this.props.isDone}
                            onChange={() => this.props.onStatusChange(this.props.id) }
                            className="btnDone">
                        </input>
                    </div>
                </li>
        );
    }
}