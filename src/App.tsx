import React from "react";
import "./App.css";
import { Button } from "antd";
import { RouteComponentProps, useHistory, useParams, useLocation } from 'react-router-dom';
import { Switch, Route, Link } from 'react-router-dom';
interface IAppProps {
    message: string;
}
const Test: React.FC<IAppProps> = ({ message }) => {
    console.log(message);
    return <div>22{message}</div>;
};

const App: React.FC = () => {
    const history = useHistory();
    const handleAbout = () => {
        history.push({ pathname: '/about/111', state: { name: 'jeck' } })
    }
    return (
        <div className="App">
            <nav>
                <ul>
                    <li><Link to="/home" >Home</Link></li>
                    <li onClick={handleAbout}>about</li>
                </ul >

            </nav >
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about/:id" component={About} />
            </Switch>
        </div >
    );
};
interface IRouteParams {
    id: string
}
function Home(props: RouteComponentProps<IRouteParams>) {
    console.log(props);
    return <h2>home</h2>
}
function About() {
    const location = useLocation();
    const params = useParams()
    console.log(params, location.state);
    return <h2>about</h2>
}
export default App;
