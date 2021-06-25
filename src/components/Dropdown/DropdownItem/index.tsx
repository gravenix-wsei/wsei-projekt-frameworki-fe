import React, { Component } from 'react';
import Icon from '../../Icon';

type PropsType = {
    id: number,
    name: string,
    icon: string,
}

class DropdownItem extends Component<PropsType>
{
    render () {
      return <div className="dropdown-item">
          <Icon name={this.props.icon} />
          <span>{this.props.name}</span>
      </div>;
    }
}

export default DropdownItem;