
import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'
import Bundle from '../component/Bundle/index'
import Slide from '../component/index'
// import Home from '../component/Home'
// import About from '../component/About'
// import Topics from '../component/Topics'
import Topics from 'bundle-loader?lazy&name=app-[Topics]!../component/Topics'
import About from 'bundle-loader?lazy&name=app-[About]!../component/About'
import Home from 'bundle-loader?lazy&name=app-[Home]!../component/Home'
// import TopicsSub from '../component/TopicsSub/index'
// import TopicsSub1 from '../component/TopicsSub/Sub1'
// import TopicsSub2 from '../component/TopicsSub/Sub2'
// import TopicsSub3 from '../component/TopicsSub/Sub3'
// import TopicsSub1 from 'bundle-loader?lazy!../component/TopicsSub/Sub1'
// import TopicsSub2 from 'bundle-loader?lazy!../component/TopicsSub/Sub2'
// import TopicsSub3 from 'bundle-loader?lazy!../component/TopicsSub/Sub3'

class Index extends React.Component {

    render() {
        return (

            <Router>
                <div>
                    <Slide />
                    {/*<Route exact path="/" component={Home} />*/}
                    <Route exact path="/" render={(props) => {
                        return <Bundle load={Home}>
                            {(Comp) => <Comp  />}
                        </Bundle>
                    }}/>   {/*component和直接render功能类似，前者优先级更高*/}
                    {/*<Route path="/about" component={About}/>*/}
                    <Route path="/about" render={(props) => {
                        return <Bundle load={About}>
                            {(Comp) => <Comp  />}
                        </Bundle>
                    }}/>
                    {/*<Route path="/topics" component={Topics}/>*/}
                    <Route path="/topics" render={(props) => {
                        return <Bundle load={Topics}>
                            {(Comp) => <Comp  />}
                        </Bundle>
                    }}/>
                    {/*<Route path="/topics/:id" component={TopicsSub}/>*/}
                    {/*<Route path="/topics/sub1" component={TopicsSub1}/>
                    <Route path="/topics/sub2" component={TopicsSub2}/>
                    <Route path="/topics/sub3" component={TopicsSub3}/>*/}

                </div>
            </Router>

        )
    }
}

export default Index;
