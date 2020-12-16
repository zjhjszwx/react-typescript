import React from 'react';

interface Greating {
  name: string;
  firstName?: string;
}

function Hello(props: Greating) {
  return <div>{props.name}</div>;
}

export default Hello;
