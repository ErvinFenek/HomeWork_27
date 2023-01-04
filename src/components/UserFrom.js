import React from "react";

import { UserItem } from "./UserItem";

export class UserFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            name: "",
            phone: "",
        }
    }

    onNameChangeHandler = (e) => {
        this.setState((prev) =>({
            ...prev,
            name: e.target.value,
        }));
    }
    onPhoneChangeHandler = (e) => {
        if (/^\d*$/.test(e.target.value) || !e.target.value)
            this.setState((prev) =>({
                ...prev,
                phone: e.target.value,
            }));
    }
    onSubmitHandler = (e) => {
        e.preventDefault();
        if (this.state.name && this.state.phone)
        this.setState(prev => ({
            name: "",
            phone: "",
            users: [...prev.users, {name: this.state.name, phone: this.state.phone }
            ],
        }));
    }
    render() {
        return (
            <>
                <form onSubmit={this.onSubmitHandler}>
                    <input placeholder="Name" onChange={this.onNameChangeHandler} value={this.state.name}/>
                    <input placeholder="Phone" onChange={this.onPhoneChangeHandler} value={this.state.phone}/>
                    <button>Save</button>
                </form>
                <div className="usersList">
                    {this.state.users.map(({name, phone}, index) =>(
                        <UserItem key={name + phone + index } name = {name} phone = {phone} index={index}/>
                    ))}
                </div>
            </>
        );
    }
}