import React, { useState } from "react";
import { Tabs, Button, Input } from "antd";
const { TabPane } = Tabs;
import './Todo.css'
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

    const handleFinish = (id: number) => {
        console.log(id);
        let arr = todoList.map(i => {
            if (i.id == id) {
                return {
                    id,
                    body: i.body,
                    completed: true,
                }
            } else {
                return i
            }
        })
        setTodoList(arr)
    }
    console.log(todoList);
    return (
        <Tabs defaultActiveKey="1">
            <TabPane key="1" tab="未完成">
                <div className="unfinish">
                    <Input onChange={e => setValue(e.target.value)} value={value} />
                    {todoList.map(i => (
                        <div className="unfinish-item" key={i.id} onClick={() => handleFinish(i.id)}><span>{i.body}</span> <span>完成</span></div>
                    ))}
                    <Button type="primary" onClick={addHandle}>
                        add
                    </Button>
                </div>
            </TabPane>
            <TabPane key="2" tab="已完成">
                22
      </TabPane>
        </Tabs>
    );
};

export default App;
