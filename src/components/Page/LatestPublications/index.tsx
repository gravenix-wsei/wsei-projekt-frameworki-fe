import React, { Component } from 'react';
import Card from '../../Common/Card';
import Article from '../../../commonTypes/Article';
import PublicationMiniature from '../PublicationMiniature';
import ImageWithPreview from '../ImageWithPreview';
import './style.scss';

type State = {
    currentPublication: number,
    publications: Article[]
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
            publications: [ // TODO download from endpoint
                {
                    title: 'An article 1',
                    description: 'Lorem ipsum dolor mit samed',
                    date: new Date('2021-05-23'),
                    author: 'John Doe',
                    image: 'img/buildings.png'
                },
                {
                    title: 'An article 2',
                    description: 'Lorem ipsum dolor mit samed',
                    date: new Date('2021-05-02'),
                    author: 'John Doe',
                    image: 'img/buildings2.png'
                },
                {
                    title: 'An article 3',
                    description: 'Lorem ipsum dolor mit samed',
                    date: new Date('2021-05-01'),
                    author: 'John Doe',
                    image: 'img/work.png'
                },
            ]
        };
    }

    private renderMiniatures = () => <React.Fragment>
        {this.state.publications.map((publication: Article) => <PublicationMiniature data={publication} />)}
    </React.Fragment>

    render () {
      return <Card className="latest-publications-card">
          <ImageWithPreview imageUrl={this.state.publications[this.state.currentPublication].image}/>
          <h1>Latest Publications</h1>
          {this.renderMiniatures()}
          <span>See more publications...</span>
      </Card>
    }
}

export default LatestPublications;