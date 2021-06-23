import React, { ChangeEvent, Component } from 'react';
import Icon from '../Icon';
import './style.scss';

type PropsType = {
    onChange?: (e :ChangeEvent<HTMLInputElement>) => void,
}

class SearchBar extends Component<PropsType>
{
    static defaultProps = {
        onChange: (e :ChangeEvent<HTMLInputElement>) => {},
    }

    render() {
        return (<div className="searchbar-container">
            <input 
                className="searchbar-input"
                type="text"
                placeholder="Wyszukiwanie..." 
                onChange={this.props.onChange}
            />
            <Icon name="Search" className="search-icon" />
        </div>);
    }
}

export default SearchBar;