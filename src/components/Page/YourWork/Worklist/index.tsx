import React, { Component } from 'react';
import WorkItem from '../../../../commonTypes/WorkItem';
import Card from '../../../Common/Card';
import './style.scss';

type Props = {
    workItems: WorkItem[],
}

type State = {
    page: number,
}

const ITEMS_PER_PAGE = 5;

class Worklist extends Component<Props, State>
{
    constructor(props :Props) {
        super(props);
        this.state = {
            page: 1,
        }
    }

    componentDidUpdate(prevProps :Props) {
        if (this.props.workItems !== prevProps.workItems) {
            this.setState({page: 1});
        }
    }

    onChangePage = (page :number) => () => this.setState({ page: page});

    private displayPagination = () => this.chunkItems().map(
        (item, index) => (<div className="paginate-item">
            <a 
                href="/#"
                onClick={this.onChangePage(index+1)}
                className={this.state.page === index + 1 ? "disabled" : ""}
            >{index+1}</a>
        </div>)
    )

    private getWorkItems = () => this.paginate(this.chunkItems());

    private paginate = (items :any) => items[this.state.page-1] ?? [];

    private chunkItems() {
        let whole = this.props.workItems ?? [];
        let result = [], page = 0;
        while (whole.length > page * ITEMS_PER_PAGE) {
            result.push(whole.slice(page*ITEMS_PER_PAGE, (page+1)*ITEMS_PER_PAGE));
            page++;
        }
        return result;
    }

    render () {
      return (<div className="worklist">
          {this.getWorkItems().map((workitem :WorkItem) => (
                <Card className="worklist-item">
                    <h2>{workitem.title}</h2>
                    <p>{workitem.description}</p>
                    {/* TODO: type */}
                    <span>Last modified: {workitem.lastUpdated.toLocaleString()}</span>
                </Card>
          ))}
          <div className="worklist-pagination">
              {this.displayPagination()}
          </div>
      </div>);
    }
}

export default Worklist;