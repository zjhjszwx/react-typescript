// class Component<P, S> {
//   //<P, S>就是传入的泛型约束变量
//   // p是对props的约束, s是对state的约束
//   static contextType?: Context<any>;

//   context: any;

//   constructor(props: Readonly<P>);

//   constructor(props: P, context?: any);


//   setState<K extends keyof S>(
//     state: ((prevState: Readonly<S>, props: Readonly<P>) => (Pick<S, K> | S | null)) | (Pick<S, K> | S | null),
//     callback?: () => void
//   ): void;

//   forceUpdate(callBack?: () => void): void;
//   render(): ReactNode;


//   readonly props: Readonly<{ children?: ReactNode }> & Readonly<P>;
//   state: Readonly<S>;

//   refs: {
//     [key: string]: ReactInstance
//   };
// }