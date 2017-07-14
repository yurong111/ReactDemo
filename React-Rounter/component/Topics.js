import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {match} = this.props;

        return (
            <div>
                <h1>Topics page</h1>
                <ul>
                    <li>
                        <Link to={`${match.url}/sub1`}>
                            sub1
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/sub2`}>
                            sub2
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/sub3`}>
                            sub3
                        </Link>
                    </li>
                </ul>

            </div>
        )
    }
}

export default Index;