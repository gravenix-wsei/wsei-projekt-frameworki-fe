import React, { Component } from 'react';
import Icon from '../Icon';
import './style.scss';

type Props = {
    className: string,
    onChange: (newMode :string) => void,
    currentMode: string,
}

class ModeSelect extends Component<Props>
{
    private isSelected = (what :string) => this.props.currentMode === what;

    private getClassName = (what :string) => this.isSelected(what) ? "selected" : '';

    render () {
        return <div className={"mode-select " + (this.props.className || '')}>
            <div className={this.getClassName('grid')} onClick={() => this.props.onChange('grid')}>
                <Icon name="Grid" />
            </div>
            <div className={this.getClassName('list')} onClick={() => this.props.onChange('list')}>
                <Icon name="List" />
            </div>
        </div>;
    }
}

export default ModeSelect;