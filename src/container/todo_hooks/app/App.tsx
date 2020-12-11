import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import axios, { Urls } from '../api/axios'
import TodoForm from './TodoForm'
import '../index.css'

interface Todo {
  id: number
  name: string
  done: boolean
}

type Todos = Todo[]

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todos>([])
  const a = 1
  // var b = 1
  useEffect(() => {
    refreshTodos()
  }, [])

  const refreshTodos = () => {
    axios(Urls.TODOS).then(setTodos)
  }

  const onToggleTodo = async (todo: Todo) => {
    await axios(Urls.TOGGLE, todo.id)
    refreshTodos()
  }
  return (
    <div>
      <TodoForm refreshTodos={refreshTodos} />
      {todos.map((todo, index) => {
        return (
          <li
            onClick={() => onToggleTodo(todo)}
            key={index}
            className={classNames({
              done: todo.done
            })}
          >
            {/* <a href="javascript:void(0)">123</a> */}
            {todo.name}
          </li>
        )
      })}
    </div>
  )
}

export default App
