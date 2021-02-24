import React from 'react';
import ReactDOM from 'react-dom';

// 游戏主界面
import GameView from './Game-View/index.tsx';

// 为了支持浏览器API兼容性而引入
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// 重置基础样式
import "@hai2007/style/normalize.css";

ReactDOM.render(
    <GameView />,
    document.getElementById('root')
);
