import React, { Component } from 'react';
import WorkItem from '../../../../commonTypes/WorkItem';
import Card from '../../../Common/Card';

type State = {
    list: WorkItem[],
}

type Props = {

}

class Worklist extends Component<Props, State>
{
    constructor(props :Props) {
        super(props);
        this.state = {
            list: this.getWorkItems(),
        };
    }

    private getWorkItems = () => [
        {
            title: "Test title",
            description: "Test description",
            type: "Corporate",
            lastUpdated: new Date(),
        }
    ]

    render () {
      return (<div className="worklist">
          {this.state.list.map((workitem) => (
                <Card className="worklist-item">
                    <h2>{workitem.title}</h2>
                    <p>{workitem.description}</p>
                    <span>Last modified: {workitem.lastUpdated.toLocaleString()}</span>
                </Card>
          ))}
      </div>);
    }
}

export default Worklist;