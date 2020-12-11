import React, { useContext } from 'react';
import { context } from './Todo';
function finish() {
  const { todoList } = useContext(context);

  console.log(123);
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
  );
}

export default finish;
