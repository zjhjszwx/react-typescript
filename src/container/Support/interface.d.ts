// import React from 'react';
interface Logo {
  id: number;
  logo: string;
  test: number;
}

interface Item {
  index: number;
  id: number;
  name: string;
  logo: Logo;
  address: string;
  qrcode: string;
  parent: number;
  isParent: number;
  company?: object;
}

type List = Item[] | undefined;

interface Result<T> {
  success: boolean;
  result: T;
  errorInfo: string;
  extraInfo: string;
  status: number;
  token: any;
}

export { List, Result, Item, Logo };
