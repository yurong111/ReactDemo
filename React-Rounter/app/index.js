
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
import TopicsSub from '../component/TopicsSub/index'
import TopicsSub1 from '../component/TopicsSub/Sub1'
import TopicsSub2 from '../component/TopicsSub/Sub2'
import TopicsSub3 from '../component/TopicsSub/Sub3'

class Index extends React.Component {

    render() {
        return (

            <Router>
                <div>
                    <Slide />
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About}/>
                    <Route path="/topics" component={Topics}/>

                    <Route path="/topics/:id" component={TopicsSub}/>
                    {/*<Route path="/topics/sub2" component={TopicsSub2}/>
                    <Route path="/topics/sub3" component={TopicsSub3}/>*/}
                </div>
            </Router>

        )
    }
}

export default Index;
