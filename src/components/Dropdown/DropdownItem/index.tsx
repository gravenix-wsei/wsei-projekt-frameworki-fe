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
          {this.props.name}
      </div>;
    }
}

export default DropdownItem;