import React, { Component } from 'react';
import Card from '../../Common/Card';
import './style.scss';

class Workspaces extends Component
{
    render () {
      return (<div className="workspaces">
           {/* TODO multiple items and slider */}
           {/* Here is only single slider */}
           <Card className="workspace-item">
                <img src="image.jpg" alt="workspace-item-background" />
                <img src="image.jpg" alt="workspace-item" />
                <h3>Client Contract</h3>
                {/* TODO use TextWithIcon component with proper class names */}
                <span>Contract</span>
                <span>150 users</span>
                <span>Last update 2 days ago</span>
           </Card>
      </div>);
    }
}

export default Workspaces;