import React, { useContext } from 'react'
import { context } from './Todo'
function finish() {
  const { todoList } = useContext(context)
  return (
    <div className="unfinish">
      {todoList.map(
        i =>
          i.completed && (
            <div className="unfinish-item" key={i.id}>
              <span>{i.body}</span>
            </div>
          )
      )}
    </div>
  )
}

export default finish
