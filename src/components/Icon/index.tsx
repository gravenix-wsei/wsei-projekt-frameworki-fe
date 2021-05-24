import React, { Component } from 'react'

class Icon extends Component<{name: string}>
{
    render() {
        return (<img src={this.props.name} alt={this.props.name} />);
    }
}

export default Icon;