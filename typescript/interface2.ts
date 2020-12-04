interface Foo {
  foo: string
}

function foo(sample: Foo): Foo {
  return sample
}

foo({ foo: "123" })