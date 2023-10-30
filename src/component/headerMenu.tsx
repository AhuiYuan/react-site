import React, {useEffect} from "react";
import { Menu} from 'antd';
import {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {MenuOutlined} from "@ant-design/icons"
import '../style/index.scss'
import apiClient from "../serve/request";
import SubMenu from "antd/es/menu/SubMenu";



interface headNavList {
    headColumn:[];
    title: string;
    url: string;
}
const App: React.FC = () => {
    const location=useLocation()
    const [headNav, setHeadNav] = useState<headNavList[]>([]); // 用于保存请求的用户数据
    useEffect(() => {
        // 发起 GET 请求
        apiClient.get<headNavList>('/config')
            .then(response => {
                setHeadNav(response.headColumn)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    const NavStyle: React.CSSProperties = {
        background: 'none',
        borderBottom:'none',
    };
    return (
        <Menu theme="dark" selectedKeys={[location.pathname]} mode="horizontal" style={{borderBottom:"none",background:"none"}}>
            <SubMenu key={0} title={ <span><MenuOutlined style={{paddingRight:"5px"}}/>All Departments</span> }>
                <Menu.ItemGroup title="Item 1"></Menu.ItemGroup>
            </SubMenu>
            {headNav.map((ele,idx)=>(
                <Menu.Item key={ele.url}>
                    <Link to={ele.url} key={idx}>{ele.title}</Link>
                </Menu.Item>
            ))}
        </Menu>
    )
};

export default App;