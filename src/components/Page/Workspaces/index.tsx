import React, { Component, MouseEvent } from 'react';
import Workspace from '../../../commonTypes/Workspace';
import Card from '../../Common/Card';
import { getDaysAgo } from '../../../utils/OtherHelpers';
import './style.scss';
import Arrow from './Arrow';
import Icon from '../../Icon';

type PropsType = {
     workspaces: Workspace[],
}

const scrollStep = 500;
const animationTime = 300;

class Workspaces extends Component<PropsType>
{
     scroll(where :string) {
          let distance = where === 'left' ? scrollStep * -1 : scrollStep;
          return (e: MouseEvent<HTMLSpanElement>) => {
               let ref = document.getElementsByClassName('workspace-container-inner')[0];
               let finalDistance = ref.scrollLeft + distance;
               let id = setInterval(() => ref.scrollLeft += distance/animationTime*34, 34);
               setTimeout(() => {
                    clearInterval(id);
                    ref.scrollLeft = finalDistance;
               }, animationTime);
          };
     }

    render () {
      let {workspaces} = this.props;
      return (<div className="workspaces">
           <Arrow direction="left" onClick={this.scroll('left')} className="arrow arrow-left" />
           <Arrow direction="right" onClick={this.scroll('right')} className="arrow arrow-right" />
           <div className="workspace-container">
               <div className="workspace-container-inner">
                    {workspaces && workspaces.length > 0 && workspaces.map((workspace :Workspace, index :number) => (
                         <Card className="workspace-item" key={index}>
                              <img className="background" src="img/work2.png" alt="workspace-item-background" />
                              <img className="edit" src="img/edit.png" alt="workspace-item" />
                              <div>
                                   <h3>{workspace.title}</h3>
                                   <span><Icon name="Network"/> {workspace.type}</span>
                                   <span><Icon name="Entities"/> {workspace.users} users</span>
                                   <span className="last-update">Last update {getDaysAgo(workspace.lastUpdated)} days ago</span>
                              </div>
                         </Card>
                    ))}
               </div>
           </div>
      </div>);
    }
}

export default Workspaces;