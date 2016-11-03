const React = require('react');
import {render} from 'react-dom';
import Index from './index'
import createStore from './../utils/store'

const store = createStore();

require('./../../assets/script/hidpi-canvas-polyfill')

import colors from './../utils/data/colors'

window.colors = colors;

render(<Index store={store} />, document.getElementById("main"));
