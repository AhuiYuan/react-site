import React, {useEffect, useState} from 'react';
import {Affix, Card, Col} from 'antd';
import '../style/index.scss'
import Search from "antd/es/input/Search";
import apiClient from "../serve/request";

interface state {
    category:[],
    categoryList: [],
}
const App: React.FC = () => {
    const [top] = React.useState<number>(120);
    const [categoryData, setCategoryData] = useState<state["categoryList"]>([]); // 用于保存请求的用户数据
    useEffect(() => {
        // 发起 GET 请求
        apiClient.get<state>('/product/category')
            .then(response => {
                setCategoryData(response.category)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <Col span={7}  className="commonLeftBlock">
            <Affix offsetTop={top}>
                <Card title={<div className="card-title">
                    <h3>Search For A Manufacturer</h3>
                    <Search size={"large"} placeholder="input search text" enterButton />
                    <p>MFG By Product Type</p>
                </div>}>
                    <ul>
                        {categoryData.map((subArray:any,rowIndex)=>(
                            <li key={rowIndex}><a href={'#type-'+ rowIndex} className="no-wrap" title={subArray.title}>{subArray.title}</a></li>
                        ))}
                    </ul>
                </Card>
            </Affix>
        </Col>
    )
};
export default App;