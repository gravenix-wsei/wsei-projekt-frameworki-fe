import React from 'react';
import Link from '../../components/Common/Link';
import TextWithIcon from '../../components/Common/TextWithIcon';
import Card from '../../components/Common/Card';
import Separator from '../../components/Common/Separator';
import ProfileAvatar from '../../components/Profile/ProfileAvatar';
import ProfileFullname from '../../components/Profile/ProfileFullname';
import ProfileShortDesc from '../../components/Profile/ProfileShortDesc';

class LeftPanel extends React.Component {
    render() {
        return (<section>
            <Card>
                <ProfileAvatar />
                <ProfileFullname>Michał Głuś</ProfileFullname>
                <ProfileShortDesc>Aspirujący Kapitan Gwiezdnej Floty</ProfileShortDesc>
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