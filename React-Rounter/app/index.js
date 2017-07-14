
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Slide from '../component/index'
import Home from '../component/Home'
import About from '../component/About'
import Topics from '../component/Topics'

class Index extends React.Component {

    render() {
        return (

            <Router>
                <div>
                    <Slide />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About}/>
                    <Route path="/topics" component={Topics}/>
                </div>
            </Router>

        )
    }
}

export default Index;
