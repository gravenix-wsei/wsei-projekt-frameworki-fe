import React, { ChangeEvent, MouseEvent, Component } from 'react';
import Icon from '../Icon';
import './style.scss';

type PropsType = {
    onChange?: (e :ChangeEvent<HTMLInputElement>) => void,
    onClick?: (e :MouseEvent) => void,
    term?: string,
}

type StateType = {
    term: string,
}

class SearchBar extends Component<PropsType, StateType>
{
    static defaultProps = {
        onChange: () => {},
        term: '',
    }

    constructor(props :PropsType) {
        super(props);
        this.state = {
            term: this.props.term || '',
        }
    }

    innerOnChange(that :Component<PropsType, StateType>) {
        return (e :ChangeEvent<HTMLInputElement>) => {
            that.setState({term: e.target.value});
            that.props.onChange && that.props.onChange(e);
        }
    } 

    render() {
        return (<div className="searchbar-container" onClick={this.props.onClick}>
            <input 
                className="searchbar-input"
                type="text"
                value={this.state.term}
                placeholder="Wyszukiwanie..." 
                onChange={this.innerOnChange(this)}
            />
            <Icon name="Search" className="search-icon" />
        </div>);
    }
}

export default SearchBar;