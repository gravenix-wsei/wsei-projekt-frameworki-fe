import React, { Component } from 'react';
import { getUser } from '../../../utils/ApiHelper';
import Card from '../../Common/Card';
import EditableField from '../EditableField';
import ProfileAvatar from '../ProfileAvatar';
import './style.scss';

type State = {
    user: any,
}

class EditableUserProfile extends Component<{}, State>
{
    constructor(props :{}) {
        super(props);
        this.state = {
            user: null,
        }
    }

    componentDidMount() {
        getUser().then(user => this.setState({user: user}));
    }

    changeUserName = (fullname :string) => this.setState({user: {
        ...this.state.user,
        fullName: fullname,
    }})

    changeDescription = (desc :string) => this.setState({user: {
        ...this.state.user,
        shortDescription: desc,
    }})

    private generateUserData(newFields: any) {
        let {user} = this.state || {};
        newFields.forEach((field :any, key :any) => user[key] = field);
    } 

    render () {
        let { user } = this.state;
        if (!user) return null;
        let { profileImage, fullName, shortDescription } = user;
        return <div className="user-edit">
            <Card className="card-user-basic-information">
                <ProfileAvatar path={profileImage} />
                <div className="profile-data">
                    <EditableField className="text-edit" value={fullName} onChange={this.changeUserName} />
                    <EditableField className="text-edit" type="textarea" value={shortDescription} onChange={this.changeDescription} />
                </div>
            </Card>
        </div>;
    }
}

export default EditableUserProfile;