import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.less';
import img01 from './images/slide3.jpg'
import store from '../../store/reducer.jsx'

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            num: 0,
        }
    }


    increment = () => {
        store.dispatch({ type: 'INCREMENT' });
        this.setState({
            num: store.getState(),
        })
    }

    decrement = () => {
        store.dispatch({ type: 'DECREMENT'});

        console.log(store.getState())
        this.setState({
            num: store.getState(),
        })
    }

    render() {
        return (
            <div>
                <div className="c-red">Click Result: {this.state.num}</div>
                <a onClick={this.increment}>+</a>
                <a onClick={this.decrement}>-</a>
                <img src={img01}/>
            </div>
        )
    }
}


export default Index;
