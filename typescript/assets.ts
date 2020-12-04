interface Foo {
  bar: number;
  bas: string;
}

const foo1 = {} as Foo;
foo1.bar = 123;
foo1.bas = 'hello'


let foo2: any;
let bar2 = '123';