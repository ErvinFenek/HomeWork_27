import React from "react";

export class ToDoList extends React.Component {

    render() {
        return (
                <li className="task" id={this.props.index}>
                    <p className="taskText">{this.props.task}</p>
                    <div>
                        <button className="btnDel" onClick={() => this.props.remove(this.props.id) }>Delete</button>
                        <button className="btnEdit" onClick={() => this.props.edit(this.props.id) }>Edit</button>
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