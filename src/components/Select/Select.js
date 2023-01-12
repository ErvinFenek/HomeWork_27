import React, {Component} from "react";

export class Select extends Component {
    render() {
        return (<label>
            {this.props.label}
            <select onChange={this.props.onChange}>
                {this.props.options.map(({value, text}) =>(<option key={value} value={value}>{text}</option>))}
            </select>
        </label>);
    }
}