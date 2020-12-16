export interface Request {
  name: string;
  id: number | undefined;
}

interface Data {
  id: number;
  key: number;
  name: number;
  age: number;
}

export type List = Data[] | undefined;
