import React from "react";
import type { MenuProps } from 'antd';
import { Menu ,Row ,Col,Input,Divider} from 'antd';
import {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {UserOutlined,ShoppingCartOutlined,TranslationOutlined} from "@ant-design/icons"
import '../style/index.scss'
const items: MenuProps['items'] = [
    {
        label: <Link to={'/'}>Home</Link>,
        key: '/',
    },
    {
        label: <Link to={'/product'}>Product</Link>,
        key: '/product',

    },
    {
        label: <Link to={'/about'}>About</Link>,
        key: '/about',
    }
];
const { Search } = Input;
const onSearch = (value: string) => console.log(value);
const App: React.FC = () => {
    const location=useLocation()
    const [, setCurrent] = useState(location.pathname);
    const onClick: MenuProps['onClick'] = (e) => {
        //console.log('click ', e);
        setCurrent(e.key);
    };
    return <div>
        <Row gutter={16} style={{alignItems:"center"}}>
            <Col className="gutter-row" span={3}>
                <div className='logo'><img src="/img/band.png" alt=""/></div>
            </Col>
            <Col className="gutter-row" span={5}>
                <Search size="large" placeholder="input search text" onSearch={onSearch} enterButton allowClear  />
            </Col>
            <Col className="gutter-row" span={8}>
                <Menu onClick={onClick} selectedKeys={[location.pathname]} mode="horizontal" items={items} style={{borderBottom:"none",background:"none"}}/>
            </Col>
            <Col className="gutter-row" span={8} style={{display:"flex",alignItems:"center"}}>
                <div className="login">
                    <UserOutlined style={{fontSize:"20px"}} /> <b>Login & Register</b>
                </div>
                <Divider type="vertical"/>
                <div className="shippingCar">
                    <ShoppingCartOutlined style={{fontSize:"24px"}}/> <b>(0) items</b>
                </div>
                <Divider type="vertical"/>
                <div className="language">
                    <TranslationOutlined style={{fontSize:"20px"}}/>
                </div>
            </Col>
        </Row>

    </div>;
};

export default App;