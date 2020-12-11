let todos = [
  {
    id: 1,
    name: '待办1',
    done: false
  },
  {
    id: 2,
    name: '待办2',
    done: false
  },
  {
    id: 3,
    name: '待办3',
    done: false
  }
]
// 使用联合类型来约束url
type Url = '/api/todos' | '/api/toggle' | '/api/add'

export enum Urls {
  TODOS = '/api/todos',
  TOGGLE = '/api/toggle',
  ADD = '/api/add'
}

const axios = <T>(url: Url, payload?: any): Promise<T> | never => {
  let data
  switch (url) {
    case Urls.TODOS:
      data = todos.slice()
      break
    case Urls.TOGGLE: {
      const todo = todos.find(({ id }) => id === payload)
      if (todo) {
        todo.done = !todo.done
      }
      break
    }
    case Urls.ADD:
      todos.push(payload)
      break
    default:
      throw new Error('Unkown api')
  }

  return Promise.resolve(data as any)
}

export default axios
