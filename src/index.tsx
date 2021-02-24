import React from 'react';
import ReactDOM from 'react-dom';

import GameView from './Game-View/index.tsx';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import "@hai2007/style/normalize.css";

const Root = document.getElementById('root');

ReactDOM.render(
    <GameView />,
    Root
);
