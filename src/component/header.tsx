import React from "react";
import {Row, Col, Input, Divider, theme, Dropdown, MenuProps} from 'antd';
import {UserOutlined, ShoppingCartOutlined, TranslationOutlined} from "@ant-design/icons"
import '../style/index.scss'

/*组件*/
import HeaderMenu from "./headerMenu";

/*定义*/
const {useToken} = theme;
const {Search} = Input;
const onSearch = (value: string) => console.log(value);

/*语言*/
const items: MenuProps['items'] = [
    {
        label: (
            <a href="#" rel="noopener noreferrer" style={{color: '#fff'}}>
                English / 中文
            </a>
        ),
        key: 'ok',
    },
];
const App: React.FC = () => {
    const {token} = useToken();
    const contentStyle: React.CSSProperties = {
        backgroundColor: token.colorBgElevated,
        borderRadius: token.borderRadiusLG,
        boxShadow: token.boxShadowSecondary,

    };
    const menuStyle: React.CSSProperties = {
        boxShadow: 'none',
        background: 'black',
        color: 'white',
    };
    return <>
        <Row gutter={16} style={{alignItems: "center"}}>
            <Col className="gutter-row" span={4}>
                <div className='logo'><img src="/img/band.png" alt=""/></div>
            </Col>
            <Col className="gutter-row" span={8}>
                <HeaderMenu/>
            </Col>
            <Col className="gutter-row" span={6}>
                <Search size="large" placeholder="input search text" onSearch={onSearch} enterButton allowClear
                        style={{width: "80%"}}/>
            </Col>
            <Col className="gutter-row" span={6} style={{display: "flex", alignItems: "center", justifyContent: "end"}}>
                <div className="login">
                    <UserOutlined style={{fontSize: "20px"}}/> <b>Login & Register</b>
                </div>
                <Divider type="vertical" style={{background: 'white', margin: '0 14px'}}/>
                <div className="shippingCar">
                    <ShoppingCartOutlined style={{fontSize: "24px"}}/> <b>(0) items</b>
                </div>
                <Divider type="vertical" style={{background: 'white', margin: '0 14px'}}/>
                <div className="language">
                    <Dropdown
                        menu={{items}}
                        arrow
                        placement="bottom"
                        dropdownRender={(menu) => (
                            <div style={contentStyle}>
                                {React.cloneElement(menu as React.ReactElement, {style: menuStyle})}
                            </div>
                        )}
                    >
                        <TranslationOutlined
                            style={{color: '#4096ff', fontSize: '20px', verticalAlign: 'middle', marginRight: '20px'}}/>
                    </Dropdown>
                </div>
            </Col>
        </Row>
    </>;
};

export default App;