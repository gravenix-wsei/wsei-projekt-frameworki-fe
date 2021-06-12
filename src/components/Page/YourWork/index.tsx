import React, { Component } from 'react';
import SearchBar from '../../SearchBar';
import YourWorkFilters from './Filters';

class YourWork extends Component
{
    render () {
      return (<div>
          <div>
                <div>
                    <h2>Resume your work</h2>
                </div>
                <div>
                    <div>
                        <SearchBar />
                    </div>
                    <div>
                        <YourWorkFilters />
                    </div>
                </div>
          </div>
      </div>);
    }
}

export default YourWork;