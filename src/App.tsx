import React from "react";
import "./App.css";
import { Button } from "antd";
interface IAppProps {
  message: string;
}
const App2: React.FC<IAppProps> = ({ message }) => {
  console.log(message);
  return <div>22{message}</div>;
};

const App: React.FC = () => {
  return (
    <div className="App">
      <App2 message="22" />
      <Button>111</Button>
    </div>
  );
};

export default App;
