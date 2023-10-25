import React from "react";
import type { MenuProps } from 'antd';
import { Menu} from 'antd';
import {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {MenuOutlined} from "@ant-design/icons"
import '../style/index.scss'
const items: MenuProps['items'] = [
    {
        label: 'All Products',
        key: '0',
        icon: <MenuOutlined />,
        children: [
            {
                label: 'Option 1',
                key: 'setting:1',
            },
            {
                label: 'Option 2',
                key: 'setting:2',
            },
        ],
    },
    {
        label: <Link to={'/'}>Home</Link>,
        key: '/',
    },
    {
        label: <Link to={'/product'}>Product</Link>,
        key: '/product',

    },
    {
        label: <Link to={'/manufacturers'}>Manufacturers</Link>,
        key: '/manufacturers',
    },

];

const App: React.FC = () => {
    const location=useLocation()
    const [, setCurrent] = useState(location.pathname);
    const onClick: MenuProps['onClick'] = (e) => {
        //console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <Menu theme="dark" onClick={onClick} selectedKeys={[location.pathname]} mode="horizontal" items={items} style={{borderBottom:"none",background:"none"}}/>
    )
};

export default App;