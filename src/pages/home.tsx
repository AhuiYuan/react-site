import React from "react";
import { Button } from 'antd';
import {AndroidOutlined} from '@ant-design/icons'
const App:React.FC=()=>{
    return (
        <div>
            我是首页<Button type="primary">Button</Button>
           <p>安卓： <AndroidOutlined style={{color:"green",fontSize:"24px"}} /></p>
        </div>
    )
}

export default App