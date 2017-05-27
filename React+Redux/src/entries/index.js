
import React from 'react';
import ReactDOM from 'react-dom';


import Heard from '../components/Heard/index.jsx'    //如果配置文件没有配置resolve，则此处的引入需要些后缀

ReactDOM.render(
    <div>
        <h1>Test Redux</h1>
        <Heard></Heard>
    </div>,
    document.getElementById('root'),
);