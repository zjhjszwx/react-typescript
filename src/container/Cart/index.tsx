import React from 'react'
import { List } from 'antd'

const cartDate = Array()
  .fill(undefined)
  .map((i, index) => ({
    id: index,
    name: '商品' + index,
    price: Math.round(Math.random() * 100)
  }))

function Cart() {
  return <div>1</div>
}

export default Cart
