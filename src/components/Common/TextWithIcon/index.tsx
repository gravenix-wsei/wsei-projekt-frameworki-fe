import React, { Component } from 'react';
import Icon from '../../Icon';

type Props = {
    icon: string
}

class TextWithIcon extends Component<Props>
{
    render() {
        return (<div className="text-with-icon">
            <Icon name={this.props.icon} />
            <span>{this.props.children}</span>
        </div>)
    }
}

export default TextWithIcon;