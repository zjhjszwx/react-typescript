import React, { useState, useContext } from 'react'
import { Input, message, Button } from 'antd'
import { context } from './Todo'
function unfinish() {
  const [value, setValue] = useState('')
  const { todoList, setTodoList } = useContext(context)
  const addHandle = () => {
    if (value) {
      setTodoList([...todoList, { id: Math.random(), body: value, completed: false }])

      setValue('')
    } else {
      message.error('请输入数据')
    }
  }
  const handleFinish = (id: number) => {
    let arr = todoList.map(i => {
      if (i.id === id) {
        return {
          id,
          body: i.body,
          completed: true
        }
      } else {
        return i
      }
    })
    setTodoList(arr)
  }
  return (
    <div className="unfinish">
      <Input onChange={e => setValue(e.target.value)} value={value} />
      {todoList.map(
        i =>
          !i.completed && (
            <div className="unfinish-item" key={i.id} onClick={() => handleFinish(i.id)}>
              <span>{i.body}</span> <span>完成</span>
            </div>
          )
      )}
      <Button type="primary" onClick={addHandle} style={{ marginTop: 10 }}>
        add
      </Button>
    </div>
  )
}

export default unfinish
