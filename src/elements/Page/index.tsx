import React, { Component }  from 'react';
import LatestPublications from '../../components/Page/LatestPublications';
import Workspaces from '../../components/Page/Workspaces';
import YourWork from '../../components/Page/YourWork';
import './style.scss';

class Page extends Component {
    render() {
        return (<main>
            <LatestPublications />
            <h2>Workspaces</h2>
            <Workspaces />
            <YourWork />
        </main>);
    }
}

export default Page;