import React, { Component } from 'react';
import Entity from '../../commonTypes/Entity';
import Card from '../../components/Common/Card';
import Icon from '../../components/Icon';
import ModeSelect from '../../components/ModeSelect';
import { getEntities } from '../../utils/ApiHelper';
import './style.scss';

type State = {
    entities: Entity[]|null,
    displayStyle: string,
}

class Entities extends Component<{}, State>
{
    constructor(props :{}) {
        super(props);
        this.state = {
            entities: null,
            displayStyle: 'grid',
        }
    }

    componentDidMount() {
        getEntities().then((entities: Entity[]) => this.setState({entities: entities}));
    }

    private getCardClassName = () => `entities-item entities-item-${this.state.displayStyle}`;

    changeMode = (newMode :string) => this.setState({displayStyle: newMode});

    renderEntities() {
        const entities = this.state.entities;
        return entities && entities.map((entity :Entity) => 
            <Card className={this.getCardClassName()}>
                <img src={`/img/${entity.image}`} alt="company"/>
                <h3>{entity.name}</h3>
                <span>{entity.info}</span>
            </Card>);
    }

    render () {
        const { displayStyle } = this.state;
        return <main className="entities">
            <div className="entities-header">
                <h2>Entities</h2>
                <Icon name="Settings" className="icon-inline" />
                <ModeSelect className="align-right" onChange={this.changeMode} currentMode={displayStyle} />
            </div>
            <div className={`entities-container entities-container-${displayStyle}`}>
                {this.renderEntities()}
            </div>
        </main>;
    }
}

export default Entities;