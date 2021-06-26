import React, { Component } from 'react';
import EditableUserProfile from '../../components/Profile/EditableUserProfile';
import './style.scss';

class UserInfo extends Component
{
    render () {
      return <main className="user-info">
          <h1>My Profile</h1>
          <EditableUserProfile />
      </main>;
    }
}

export default UserInfo;