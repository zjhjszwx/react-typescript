import React from 'react'
import { Form } from 'antd'
function Test() {
    const handleClick = () => {
        console.log(111);
    }
    return (
        <div>
            Test
            {/* <button onClick={handleClick}>button</button> */}
            <Child2 handleClick={handleClick} />
        </div>
    )
}

interface IChild {
    handleClick?: () => void
}
const Child = (props: IChild) => {
    console.log(props);
    return <div>

        <button onClick={props.handleClick}>button</button>
    </div>
}
const Child2: any = Form.create()(Child)
export default Test
