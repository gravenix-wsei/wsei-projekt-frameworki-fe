import React, { Component } from 'react';
import Icon from '../Icon';
import './style.scss';

class SearchBar extends Component
{
    render() {
        return (<div className="searchbar-container">
            <input className="searchbar-input" type="text" placeholder="Wyszukiwanie..." />
            <Icon name="Search" className="search-icon" />
        </div>);
    }
}

export default SearchBar;