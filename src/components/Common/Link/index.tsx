import React, { Component } from 'react';

type Props = {
    to: string
}

class Link extends Component<Props>
{
    render() {
        return (<a href={this.props.to}>{this.props.children}</a>)
    }
}

export default Link;