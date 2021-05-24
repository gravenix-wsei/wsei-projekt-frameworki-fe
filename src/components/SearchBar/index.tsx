import React, { Component } from 'react';
import './style.scss';

class SearchBar extends Component
{
    render = () => (<input className="searchbar-input" type="text" placeholder="Wyszukiwanie..." />)
}

export default SearchBar;