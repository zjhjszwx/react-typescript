import React, { useState, useEffect } from 'react';

interface Greating {
  name: string;
  firstName?: string;
}

function Hello(props: Greating) {
  const [count, setCount] = useState(0);
  const [text, setText] = useState<string | null>(null);

  return <div>{props.name}</div>;
}

export default Hello;
