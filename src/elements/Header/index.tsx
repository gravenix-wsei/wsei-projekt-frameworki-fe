import React from 'react';
import { Component } from 'react';
import Logo from '../../components/Logo';
import Icon from '../../components/Icon';
import SearchBar from '../../components/SearchBar';
import Dropdown from '../../components/Dropdown';
import './style.scss';

class Main extends Component {

    private getOptions = () => [
        {
            id: 1,
            name: "Home"
        },
        {
            id: 2,
            name: "My Account"
        }
    ]

    render() {
        return (
            <header className="navbar">
                <div className="logo">
                    <Logo />
                </div>
                <div className="navbar-dropdown">
                    <Dropdown withIcon={true} icon="Home" options={this.getOptions()} />
                </div>
                <div className="searchbar">
                    <SearchBar />
                </div>
                <div className="right-header">
                    <Icon name="Home" />
                    <Icon name="Messages" />
                    <Icon name="Notifications" />
                </div>
            </header>
        );
    }
}

export default Main;