import React, { Component }  from 'react';
import LatestPublications from '../../components/Page/LatestPublications';
import './style.scss';

class Page extends Component {
    render() {
        return (<main>
            <LatestPublications />
        </main>);
    }
}

export default Page;