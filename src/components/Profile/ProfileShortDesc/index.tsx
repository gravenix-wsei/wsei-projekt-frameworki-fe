import React, { Component } from 'react';
import './style.scss';

class ProfileShortDesc extends Component
{
    render () {
      return <span className="profile-short-desc">{this.props.children}</span>;
    }
}

export default ProfileShortDesc;