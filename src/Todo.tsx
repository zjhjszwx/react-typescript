import React, { useState } from "react";
import { Tabs, Button, Input } from "antd";
const { TabPane } = Tabs;

export interface ITodo {
  id: number;
  body: string;
  completed: boolean;
}
type ITodoList = ITodo[];

const App: React.FC = () => {
  const todoList: ITodoList = [];
  const [value, setValue] = useState();
  console.log(todoList, value);
  return (
    <Tabs defaultActiveKey="1">
      <TabPane key="1" tab="未完成">
        <Input onChange={e => setValue(e.target.value)} />
        <Button type="primary">add</Button>
      </TabPane>
      <TabPane key="2" tab="已完成">
        22
      </TabPane>
    </Tabs>
  );
};

export default App;
