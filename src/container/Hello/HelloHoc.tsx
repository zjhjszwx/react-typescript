import React from 'react';
import HelloClass from './HelloClass';
interface Loading {
  loading: boolean;
}

// ts泛型约束高阶组件
// ReactComponentType react预定义类型, 可以是class/function
// P: 被包装组件的属性类型
function HelloHoc<P>(WrapperComponent: React.ComponentType<P>) {
  return class extends React.Component<P & Loading> {
    render() {
      const { loading, ...props } = this.props;
      return loading ? <>loading</> : <WrapperComponent {...(props as P)} />; // 约束组件的属性类型
    }
  };
}

export default HelloHoc(HelloClass);
