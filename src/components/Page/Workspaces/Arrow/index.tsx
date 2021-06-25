import React, { Component, MouseEvent } from 'react';

type Props = {
    onClick: (event: MouseEvent<HTMLSpanElement>) => void,
    className: string,
    direction: string,
}

class Arrow extends Component<Props>
{
    static defaultProps = {
        onClick: () => {},
        className: '',
        direction: 'left',
    }

    render () {
      return <span className={this.props.className} 
            onClick={this.props.onClick}
            dangerouslySetInnerHTML={{__html: (this.props.direction === 'left' ? '&#10094;' : '&#10095;')}}>
      </span>;
    }
}

export default Arrow;