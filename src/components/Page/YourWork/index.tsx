import React, { Component } from 'react';
import SearchBar from '../../SearchBar';
import YourWorkFilters from './Filters';
import Worklist from './Worklist';
import './style.scss';

class YourWork extends Component
{
    render () {
      return (<div>
          <div>
                <div className="col-2">
                    <h2>Resume your work</h2>
                </div>
                <div className="col-2">
                    <div className="col-2">
                        <SearchBar />
                    </div>
                    <div className="col-2">
                        <YourWorkFilters />
                    </div>
                </div>
          </div>
          <Worklist />
      </div>);
    }
}

export default YourWork;