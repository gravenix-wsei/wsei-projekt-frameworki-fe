import React, { Component } from 'react';
import Icon from '../Icon';
import './style.scss';

type DropdownProps = {
    withIcon?: boolean,
    icon?: string,
    options: {id: number, name: string}[]
}

class Dropdown extends Component<DropdownProps>
{
    static defaultProps = {
        withIcon: false,
        icon: ''
    }

    private buildSelect = () => this.props.options.map(
        (option) => (<option value={option.id}>{option.name}</option>)
    )

    render() {
        return (<div className="dropdown">
            {this.props.withIcon && <Icon name={this.props.icon || ''} />}
            <select>
                {this.buildSelect()}
            </select>
        </div>);
    }
}

export default Dropdown;