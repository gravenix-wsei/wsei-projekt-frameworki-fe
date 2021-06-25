import React, { Component } from 'react';
import Card from '../../Common/Card';
import Article from '../../../commonTypes/Article';
import PublicationMiniature from '../PublicationMiniature';
import ImageWithPreview from '../ImageWithPreview';
import './style.scss';
import { getPublications } from '../../../utils/ApiHelper';

type State = {
    currentPublication: number,
    publications: Article[]|null
}

type Props = {
    children?: any
}

class LatestPublications extends Component<Props, State>
{
    constructor(props: any) {
        super(props);
        this.state = {
            currentPublication: 1,
            publications: null,
        };
    }

    componentDidMount() {
        getPublications().then((publications) => this.setState({publications: publications}));
    }

    private getPublications = () => this.state.publications ?? [];

    private renderMiniatures = () => <React.Fragment>
        {this.getPublications().map((publication: Article) => <PublicationMiniature data={publication} />)}
    </React.Fragment>

    render () {
      let currentPublication = this.getPublications()[this.state.currentPublication] ?? {};
      return <Card className="latest-publications-card">
          {currentPublication && <ImageWithPreview imageUrl={currentPublication.image}/>}
          <h1>Latest Publications</h1>
          <div className="publications-container">
            {this.renderMiniatures()}
          </div>
          <span>See more publications...</span>
      </Card>
    }
}

export default LatestPublications;