import React from 'react';
import { Component } from 'react';
import Logo from '../../components/Logo';
import Icon from '../../components/Icon';
import SearchBar from '../../components/SearchBar';
import Dropdown from '../../components/Dropdown';
import './style.scss';
import DropdownItem from '../../components/Dropdown/DropdownItem';
import Link from '../../components/Common/Link';

type State = {
    currentPage: number,
}

class Main extends Component<{}, State> {
    constructor(props :{}) {
        super(props);
        this.state = {
            currentPage: 1,
        }
    }

    private getOptions = () => [
        {
            id: 1,
            name: "Home",
            icon: "Home",
            to: "/",
        },
        {
            id: 2,
            name: "Publications",
            icon: "Publications",
        },
        {
            id: 3,
            name: "People",
            icon: "User",
        },
        {
            id: 4,
            name: "Entities",
            icon: "Entities",
        }, 
        {
            id: 5,
            name: "Administration",
            icon: "Administration",
        },
        {
            id: 6,
            name: "My Account",
            icon: "Network",
            to: "/user",
            hidden: true,
        }
    ]

    generateBottom = () => (<div>
        <hr/>
        <DropdownItem 
            id={6}
            name="My Account"
            icon="Network"
            to="/user"
            onClick={this.onPageChange}
        />
        <hr/>
        <div className="logout">Logout</div>
    </div>)

    onPageChange = (id :number) => {
        this.setState({currentPage: id})
        console.log('changed to '+ id)
    }

    render() {
        return (
            <header className="navbar">
                <div className="logo">
                    <Link to="/">
                        <Logo />
                    </Link>
                </div>
                <div className="navbar-dropdown">
                    <Dropdown 
                        withIcon={true} 
                        icon="Home" 
                        options={this.getOptions()} 
                        selectedOption={this.state.currentPage} 
                        appendBottom={this.generateBottom()}
                        onChange={this.onPageChange}
                    />
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