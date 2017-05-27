import { createStore } from 'redux'
import {counter} from './Heard/reducer.jsx'


const store = createStore(
    counter,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()    //用于redux调试 https://github.com/zalmoxisus/redux-devtools-extension
)

//回调函数,一旦 State 发生变化，就自动执行这个函数
store.subscribe(() =>
    console.log(store.getState())
)

export default store;