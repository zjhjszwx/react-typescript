import React, { useState } from "react";
import { Tabs, Button, Input } from "antd";
const { TabPane } = Tabs;
import Test from './test';
export interface ITodo {
    id: number;
    body: string;
    completed: boolean;
}
type ITodoList = ITodo[];

const App: React.FC = () => {
    const [value, setValue] = useState();
    const [todoList, setTodoList] = useState<ITodoList>([]);

    const addHandle = () => {
        setTodoList([
            ...todoList,
            { id: Math.random(), body: value, completed: false }
        ]);
        setValue(null);
    };
    return (
        <Tabs defaultActiveKey="1">
            <TabPane key="1" tab="未完成">
                <Input onChange={e => setValue(e.target.value)} value={value} />
                {todoList.map(i => (
                    <div key={i.id}>{i.body}</div>
                ))}
                <Button type="primary" onClick={addHandle}>
                    add
                </Button>
                <Test />
            </TabPane>
            <TabPane key="2" tab="已完成">
                22
      </TabPane>
        </Tabs>
    );
};

export default App;
