import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import { BrowserRouter as Router } from 'react-router-dom';
// import App from "./container/todo/Todo";
// import App from './container/Drag'
// import App from './container/todo_hooks/app/App';
// import Hello from './container/Hello/Hello';
// import Hello from './container/Hello/HelloClass';
// import Hello from './container/Hello/HelloHoc';
import Support from './container/Support';

ReactDOM.render(
  <Router>
    <Support />
  </Router>,
  document.getElementById('root') as HTMLElement
);
