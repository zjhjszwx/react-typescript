interface Action<T> {
  payload?: T;
  type: string;
}

class EffectModule {
  count = 1;
  message = 'hello!';

  delay(input: Promise<number>) {
    return input.then(i => ({
      payload: `hello ${i}!`,
      type: 'delay'
    }));
  }

  setMessage(action: Action<Date>) {
    return {
      payload: action.payload!.getMilliseconds(),
      type: 'set-message'
    };
  }
}
// 获取值为函数的 key，形如： 'funcKeyA' | 'funcKeyB'
type PickFuncKeys<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

type ExtractContainer<P> = {
  [K in PickFuncKeys<P>]: P[K] extends (arg: Promise<infer T>) => Promise<infer U>
    ? (arg: T) => U
    : P[K] extends (arg: Action<infer T>) => Action<infer U>
    ? (arg: T) => Action<U>
    : never;
};

// 修改 Connect 的类型，让 connected 的类型变成预期的类型
// type Connect = (module: EffectModule) => ExtractContainer<EffectModule>;
// https://lucifer.ren/blog/2020/07/05/leetcode-interview-ts/
type Connect = (module: EffectModule) => any;

const connect: Connect = m => ({
  delay: (input: number) => ({
    type: 'delay',
    payload: `hello 2`
  }),
  setMessage: (input: Date) => ({
    type: 'set-message',
    payload: input.getMilliseconds()
  })
});

interface Connected {
  delay: (input: number) => Action<string>;
  setMessage: (action: Date) => Action<number>;
}

export const connected: Connected = connect(new EffectModule());
