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

    changeUserName = (fullname :string) => this.updateUserFields({fullName: fullname})

    changeDescription = (desc :string) => this.updateUserFields({shortDescription: desc});

    changeBirthDate = (bday :string) => this.updateUserFields({birthDate: new Date(bday)});

    changeExpertise = (expertise :string) => this.updateUserFields({expertise: expertise});

    changeSpecialties = (specialties :string) => this.updateUserFields({specialties: specialties});

    changeAdminssions = (adminssions :string) => this.updateUserFields({adminssions: adminssions});

    changeCounties = (counties :string) => this.updateUserFields({counties: counties});

    private updateUserFields = (fields :any) =>
        this.setState({user: {
            ...this.state.user,
            ...fields,
        }});
    

    private generateUserData(newFields: any) {
        let {user} = this.state || {};
        newFields.forEach((field :any, key :any) => user[key] = field);
    } 

    render () {
        let { user } = this.state;
        if (!user) return null;
        let { 
            profileImage, 
            fullName, 
            shortDescription ,
            birthDate,
            expertise,
            specialties,
            admissions,
            counties,
        } = user;
        return <div className="user-edit">
            <Card className="card-user-basic-information">
                <ProfileAvatar path={profileImage} />
                <div className="profile-data">
                    <EditableField className="text-edit" value={fullName} onChange={this.changeUserName} />
                    <EditableField className="text-edit" type="textarea" value={shortDescription} onChange={this.changeDescription} />
                    <EditableField className="text-edit" type="date" value={birthDate} onChange={this.changeBirthDate} />
                </div>
            </Card>
            <Card className="user-edit">
                <div className="editButton" />
                <h2 className="gray-header">Expertise</h2>
                <EditableField className="text-edit" type="multiselect-input" value={expertise} onChange={this.changeExpertise}/>
                <h2 className="gray-header">Specialties</h2>
                <EditableField className="text-edit" type="multiselect-input" value={specialties} onChange={this.changeSpecialties}/>
                <h2 className="gray-header">Admission to practice law</h2>
                <EditableField className="text-edit" type="multiselect-input" value={admissions} onChange={this.changeAdminssions}/>
                <h2 className="gray-header">Counties</h2>
                <EditableField className="text-edit" type="multiselect-input" value={counties} onChange={this.changeCounties}/>
            </Card>
        </div>;
    }
}

export default EditableUserProfile;