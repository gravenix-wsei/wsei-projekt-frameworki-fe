import React, { Component } from 'react';
import './style.scss';

class ProfileFullname extends Component
{
    render () {
      return <span className="profile-fullname">{this.props.children}</span>;
    }
}

export default ProfileFullname;