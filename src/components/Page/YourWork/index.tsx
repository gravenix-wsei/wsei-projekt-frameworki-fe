import React, { ChangeEvent, Component } from 'react';
import SearchBar from '../../SearchBar';
import YourWorkFilters from './Filters';
import Worklist from './Worklist';
import WorkItem from '../../../commonTypes/WorkItem';
import './style.scss';
import { escapeRegExpChars } from '../../../utils/OtherHelpers';

type Props = {
    workItems: WorkItem[],
}

type State = {
    searchTerm: string,
}

class YourWork extends Component<Props, State>
{
    constructor(props :Props) {
        super(props);
        this.state = {
            searchTerm: '',
        }
    }

    onSearch = (e :ChangeEvent<HTMLInputElement>) => this.setState({ searchTerm: e.target.value})

    filterItems = () => {
        let {searchTerm} = this.state;
        return searchTerm.length > 0 ? this.props.workItems.filter(
            item => item.title.match(new RegExp(escapeRegExpChars(searchTerm), 'i'))
        ) : this.props.workItems;
    }

    render () {
      let {searchTerm} = this.state;
      return (<div className="your-work">
          <div>
                <div className="col-2">
                    <h2 className="h2-header">Resume your work</h2>
                </div>
                <div className="col-2">
                    <div className="col-2">
                        <SearchBar onChange={this.onSearch} term={searchTerm}/>
                    </div>
                    <div className="col-2">
                        <YourWorkFilters />
                    </div>
                </div>
          </div>
          <Worklist workItems={this.filterItems()}/>
      </div>);
    }
}

export default YourWork;