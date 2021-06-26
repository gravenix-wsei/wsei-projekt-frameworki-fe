import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../Icon';

type PropsType = {
    id: number,
    name: string,
    icon: string,
    to?: string,
    onClick?: (id: number) => void,
}

class DropdownItem extends Component<PropsType>
{
    private onClick = () => this.props.onClick && this.props.onClick(this.props.id);

    private generateItem(): JSX.Element {
        return <div className="dropdown-item" onClick={this.onClick}>
            <Icon className="icon-xl" name={this.props.icon} />
            <span>{this.props.name}</span>
        </div>
    }

    render () {
      let {to} = this.props;
      return to ? (<Link to={to}>{this.generateItem()}</Link>)
        : this.generateItem();
    }
}

export default DropdownItem;