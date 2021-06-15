import React, { Component } from 'react';
import getImageFromName from '../../utils/IconHelper';

type Props = {
    name: string,
    className?: string,
}

class Icon extends Component<Props>
{
    render() {
        return (<img className={this.props.className} src={getImageFromName(this.props.name)} alt={this.props.name} />);
    }
}

export default Icon;