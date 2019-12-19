import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
const App: React.FC = () => {

    return (
        <div>
            <ul>
                <li>
                    <Link to="home">home</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/home" />
                <Route path="/about" />
            </Switch>
        </div>
    )
}

export default App;
