import React from "react";
import { Row ,Col,Input,Divider} from 'antd';
import {UserOutlined,ShoppingCartOutlined,TranslationOutlined} from "@ant-design/icons"
import '../style/index.scss'

/*组件*/
import HeaderMenu from "./headerMenu";

const { Search } = Input;
const onSearch = (value: string) => console.log(value);
const App: React.FC = () => {

    return <div>
        <Row gutter={16} style={{alignItems:"center"}}>
            <Col className="gutter-row" span={4}>
                <div className='logo'><img src="/img/band.png" alt=""/></div>
            </Col>
            <Col className="gutter-row" span={8}>
                <HeaderMenu/>
            </Col>
            <Col className="gutter-row" span={6}>
                <Search size="large" placeholder="input search text" onSearch={onSearch} enterButton allowClear style={{width:"80%"}}  />
            </Col>
            <Col className="gutter-row" span={6} style={{display:"flex",alignItems:"center",justifyContent:"end"}}>
                <div className="login">
                    <UserOutlined style={{fontSize:"20px"}} /> <b>Login & Register</b>
                </div>
                <Divider type="vertical" style={{background:'white',margin:'0 14px'}}/>
                <div className="shippingCar">
                    <ShoppingCartOutlined style={{fontSize:"24px"}}/> <b>(0) items</b>
                </div>
                <Divider type="vertical" style={{background:'white',margin:'0 14px'}}/>
                <div className="language">
                    <TranslationOutlined style={{fontSize:"20px"}}/>
                </div>
            </Col>
        </Row>
    </div>;
};

export default App;