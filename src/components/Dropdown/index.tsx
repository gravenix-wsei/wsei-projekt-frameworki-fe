import React, { Component, MouseEvent } from 'react';
import SearchBar from '../SearchBar';
import DropdownItem from './DropdownItem';
import './style.scss';

type DropdownProps = {
    withIcon?: boolean,
    icon?: string,
    options: {id: number, name: string}[],
    selectedOption?: number,
}

type StateProps = {
    icon: string,
    dropdownVisible: boolean,
    selectedOption: number|null,
    search: string,
}

class Dropdown extends Component<DropdownProps, StateProps>
{
    static defaultProps = {
        withIcon: false,
        icon: ''
    }

    constructor(props :DropdownProps) {
        super(props);
        this.state = {
            icon: props.icon || '',
            dropdownVisible: false,
            selectedOption: props.selectedOption ?? null,
            search: '',
        };
    }

    private filterOptions() {
        let {search} = this.state;
        return this.props.options.filter(
            (option :any) => search.length > 0 ? option.name.match(new RegExp(search, 'i')) : true
        );
    }

    onDropdownClick = (event :MouseEvent) => this.setState({dropdownVisible: !this.state.dropdownVisible})

    onMouseLeave = (event :MouseEvent) => this.setState({dropdownVisible: false});

    stopEvent = (event :MouseEvent) => event.stopPropagation();

    searchUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            search: e.target.value 
        });
    }

    renderList = () => this.filterOptions().map(
        (option :any) => (<DropdownItem name={option.name} id={option.id} icon={option.icon} key={option.id} />)
    )

    render() {
        let {props, state} = this;
        let selectedOption = state.selectedOption !== null ? props.options[state.selectedOption] : null;
        return (<div className="dropdown" onClick={this.onDropdownClick} onMouseLeave={this.onMouseLeave}>
            <div className="dropdown-current">
                {selectedOption && <DropdownItem 
                    name={selectedOption.name}
                    id={selectedOption.id}
                    icon={props.icon ?? ''}
                />}
            </div>
            {state.dropdownVisible &&
                <div className="dropdown-list">
                    <SearchBar onChange={this.searchUpdate} term={this.state.search} onClick={this.stopEvent} />
                    {this.renderList()}
                </div>
            }
        </div>);
    }
}

export default Dropdown;