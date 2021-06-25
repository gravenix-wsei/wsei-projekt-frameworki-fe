import React, { Component } from 'react';
import Link from '../../components/Common/Link';
import TextWithIcon from '../../components/Common/TextWithIcon';
import Card from '../../components/Common/Card';
import Separator from '../../components/Common/Separator';
import ProfileAvatar from '../../components/Profile/ProfileAvatar';
import ProfileFullname from '../../components/Profile/ProfileFullname';
import ProfileShortDesc from '../../components/Profile/ProfileShortDesc';
import User from '../../commonTypes/User';
import { getUser } from '../../utils/ApiHelper';

type State = {
    user: User|null
}

class LeftPanel extends Component<{}, State> {
    constructor(props :{}) {
        super(props);
        this.state = {
            user: null,
        }
    }

    componentDidMount() {
        getUser().then(user => this.setState({user: user}));
    }

    render() {
        if (this.state.user === null) {
            return <div></div>
        }
        let { 
            profileImage,
            fullName,
            shortDescription
        } = this.state.user;
        return (<section>
            <Card>
                <ProfileAvatar path={profileImage} />
                <ProfileFullname>{fullName}</ProfileFullname>
                <ProfileShortDesc>{shortDescription}</ProfileShortDesc>
                <Separator />
                <Link to="where">
                    <TextWithIcon icon="YourNetwork">Your Network</TextWithIcon>
                </Link>
                <Link to="where">
                    <TextWithIcon icon="YourPublications">Your Publications</TextWithIcon>
                </Link>
            </Card>
            <Link to="where">
                <TextWithIcon icon="Publications">Publications</TextWithIcon>
            </Link>
            <Link to="where">
                <TextWithIcon icon="Ecosystem">Ecosystem</TextWithIcon>
            </Link>
            <Link to="where">
                <TextWithIcon icon="Entities">Entities</TextWithIcon>
            </Link>
        </section>);
    }
}

export default LeftPanel;