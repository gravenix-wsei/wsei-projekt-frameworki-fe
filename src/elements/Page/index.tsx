import React, { Component }  from 'react';
import LatestPublications from '../../components/Page/LatestPublications';
import Workspaces from '../../components/Page/Workspaces';
import YourWork from '../../components/Page/YourWork';
import { getWorkspaces } from '../../utils/ApiHelper';
import Workspace from '../../commonTypes/Workspace';
import './style.scss';

type StateProps = {
    workspaces: Workspace[]
}

class Page extends Component<{}, StateProps> {
    constructor(props :{}) {
        super(props);
        this.state = {
            workspaces: []
        }
    }

    componentDidMount() {
        getWorkspaces().then((workspaces: any) => this.setState({workspaces: workspaces}));
    }

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