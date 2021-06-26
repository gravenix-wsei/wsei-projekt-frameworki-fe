import React, { Component, MouseEvent } from 'react';
import Icon from '../Icon';
import SearchBar from '../SearchBar';
import DropdownItem from './DropdownItem';
import './style.scss';

type DropdownProps = {
    withIcon?: boolean,
    icon?: string,
    options: {
        id: number, 
        name: string, 
        icon?: string,
        to?: string,
        hidden?: boolean
    }[],
    selectedOption?: number,
    appendBottom?: JSX.Element|null,
    onChange?: (id: number) => void,
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

    componentDidUpdate(prevProps :DropdownProps) {
        if (prevProps.selectedOption !== this.props.selectedOption) {
            this.setState({selectedOption: this.props.selectedOption || 0})
        }
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

    updateSelected = (id :number) => () => {
        this.setState({selectedOption: id});
        this.props.onChange && this.props.onChange(id);
    }

    renderList = () => this.filterOptions().map(
        (option :any) => (!option.hidden && <DropdownItem 
            name={option.name} 
            id={option.id} 
            icon={option.icon} 
            key={option.id} 
            to={option.to}
            onClick={this.updateSelected(option.id)}
            />)
    )

    private getSelectedOption = () => this.state.selectedOption !== null ? 
        this.props.options.find((item => item.id === this.state.selectedOption))
        : null

    render() {
        let {props, state} = this;
        let selectedOption = this.getSelectedOption();
        return (<div className="dropdown" onClick={this.onDropdownClick} onMouseLeave={this.onMouseLeave}>
            <div className="dropdown-current">
                {selectedOption && <DropdownItem 
                    name={selectedOption.name}
                    id={selectedOption.id}
                    icon={selectedOption.icon ?? ''}
                />}
                <Icon 
                    name="ArrowDown" 
                    className={"icon-dropdown" + (state.dropdownVisible ? ' revert' : '')} 
                />
            </div>
            {state.dropdownVisible &&
                <div className="dropdown-list">
                    <SearchBar onChange={this.searchUpdate} term={this.state.search} onClick={this.stopEvent} />
                    <div className="dropdown-list-inner">
                        {this.renderList()}
                    </div>
                    {props.appendBottom && props.appendBottom}
                </div>
            }
        </div>);
    }
}

export default Dropdown;