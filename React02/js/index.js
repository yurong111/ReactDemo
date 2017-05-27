
import React from 'react';
import ReactDOM from 'react-dom';
import '../css/common.css';

import Heard from '../component/Heard/index'    //如果配置文件没有配置resolve，则此处的引入需要些后缀

ReactDOM.render(
    <div>
        <h1 className="c-red">Titile</h1>
        <Heard></Heard>
    </div>,
    document.getElementById('root')
);