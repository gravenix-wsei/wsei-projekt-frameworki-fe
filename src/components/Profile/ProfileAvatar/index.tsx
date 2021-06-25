import React, { Component } from 'react';
import './style.scss';

type Props = {
    path: string,
}

class ProfileAvatar extends Component<Props>
{
    render() {
        return (<div className="profile-avatar">
            <img src={this.props.path} alt="profile avatar" />
        </div>)
    }
}

export default ProfileAvatar;