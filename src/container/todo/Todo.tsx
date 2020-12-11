import React, { useState, ReactNode } from 'react'
import { Tabs } from 'antd'
const { TabPane } = Tabs
import './Todo.css'
import Unfinish from './unfinish'
import Finish from './finish'
interface ITodo {
  id: number
  body: string
  completed: boolean
}
type ITodoList = ITodo[]

interface IInjected {
  todoList: ITodoList
  setTodoList: (e: Array<any>) => void
}
export const context = React.createContext<IInjected>({} as IInjected)
interface IProps {
  children?: ReactNode
}
function CounterProvider({ children }: IProps) {
  const [todoList, setCounter] = useState([])
  const value = {
    todoList,
    setTodoList: (e: any) => setCounter(e)
  }
  return <context.Provider value={value}>{children}</context.Provider>
}

const App: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane key="1" tab="未完成">
        <Unfinish />
      </TabPane>
      <TabPane key="2" tab="已完成">
        <Finish />
      </TabPane>
    </Tabs>
  )
}
export default () => (
  <CounterProvider>
    <App />
  </CounterProvider>
)
