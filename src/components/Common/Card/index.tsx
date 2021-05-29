import React, { Component } from 'react';
import './style.scss';

type Props = {
    children: React.ReactNode[] | React.ReactNode
    className?: string
}

class Card extends Component<Props>
{
    private getClassName = () => "card" + (this.props.className ? ` ${this.props.className}` : '');

    render() {
        return (<div className={this.getClassName()}>
            {this.props.children}
        </div>)
    }
}

export default Card;