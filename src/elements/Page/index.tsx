import React, { Component }  from 'react';
import LatestPublications from '../../components/Page/LatestPublications';
import Workspaces from '../../components/Page/Workspaces';
import YourWork from '../../components/Page/YourWork';
import { getWorkspaces, getYourWork } from '../../utils/ApiHelper';
import Workspace from '../../commonTypes/Workspace';
import './style.scss';
import WorkItem from '../../commonTypes/WorkItem';

type StateProps = {
    workspaces: Workspace[],
    workItems: WorkItem[],
}

class Page extends Component<{}, StateProps> {
    constructor(props :{}) {
        super(props);
        this.state = {
            workspaces: [],
            workItems: [],
        }
    }

    componentDidMount() {
        getWorkspaces().then((workspaces: Workspace[]) => this.setState({workspaces: workspaces}));
        getYourWork().then((workItems: WorkItem[]) => this.setState({workItems: workItems}));
    }

    render() {
        return (<main>
            <LatestPublications />
            <h2>Workspaces</h2>
            <Workspaces workspaces={this.state.workspaces}/>
            <YourWork workItems={this.state.workItems} />
        </main>);
    }
}

export default Page;