import React from "react";
import "./App.css";

interface IAppProps {
  message: string;
}
const App2: React.FC<IAppProps> = ({ message }) => {
  console.log(message);
  return <div>22{message}</div>;
};

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <App2 message="22" />
      </div>
    );
  }
}

export default App;
