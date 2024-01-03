import React, {useEffect, useState} from 'react';
import {Breadcrumb, Col, Row} from 'antd';
import '../style/index.scss'
import apiClient from "../serve/request";
import {CardBlock} from "../types/card";
import SearchLeft from "../component/searchLeft";

const Bread=()=>{
    return <Breadcrumb style={{fontWeight:"bold",padding:"15px 0"}}
       items={[
           {
               title:<a href="/"> Home</a>,
           },
           {
               title: "Electronic Components",
           },
       ]}
    />
}
interface state {
    productNum:string
    category:[],
    categoryList: [],
}
const App: React.FC = () => {
    const [num,setNum]=useState<state["productNum"]>("0")
    const [categoryData, setCategoryData] = useState<state["categoryList"]>([]); // 用于保存请求的用户数据
    useEffect(() => {
        // 发起 GET 请求
        apiClient.get<state>('/product/category')
            .then(response => {
                setNum(response.productNum)
                setCategoryData(response.category)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <div className="productPage commonPage">
            <div className="wrap-content">
                <Bread/>
                <CardBlock info={{
                    Electronic:"Electronic Components",
                    Results:"Total Results："+num,
                    intro:"Whether you need resistors, capacitors, transistors, connectors, integrated circuits, or any other electronic component, we've got you covered. With our stock of 7 million components, we fulfill orders promptly. Our strict quality control ensures industry-standard items. We offer competitive pricing,understanding the importance of cost-effectiveness. Explore our selection of 3 million electronic components for your next project."
                }}/>
                <Row style={{margin:"40px 0"}}>
                    <SearchLeft/>
                    <Col span={17}  className="rightBlock">
                        {categoryData.map((subArray:any,rowIndex)=>(
                            <div id={'type-'+ rowIndex} key={rowIndex} style={{marginBottom:"20px"}} >
                                <h3>{subArray.title} <span>({subArray.category})</span></h3>
                                <ul>
                                    {subArray.categoryList.map((item:any,index:number)=>(
                                        <li key={index}><a href="" className="no-wrap">{item.title}<span>（{item.category}）</span></a></li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </Col>
                </Row>
            </div>
        </div>
    )
};
export default App;