import React, { Component } from 'react';

type Props = {
    imageUrl: string,
    alt?: string,
}

class ImageWithPreview extends Component<Props>
{
    private getAlt = () => this.props.alt || this.props.imageUrl;

    render () {
      return <img className="image-preview" src={this.props.imageUrl} alt={this.getAlt()} />;
    }
}

export default ImageWithPreview;