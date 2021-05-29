import React, { Component } from 'react';
import Article from '../../../commonTypes/Article';
import './style.scss';

type Props = {
    className?: string,
    data: Article
}

class PublicationMiniature extends Component<Props>
{
    render () {
      return (<div className={this.props.className || 'publication-miniature'}>
          <img src={this.props.data.image} alt={this.props.data.title} />
          <h2>{this.props.data.title}</h2>
          <p>{this.props.data.description}</p>
          <div>
              <span>{this.props.data.date.toLocaleDateString()}</span>
              <span>{this.props.data.author}</span>
          </div>
      </div>);
    }
}

export default PublicationMiniature;