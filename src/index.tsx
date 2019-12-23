import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./container/hooks";
import "./index.css";
import "antd/dist/antd.css";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(<Router><App /></Router>, document.getElementById("root") as HTMLElement);
