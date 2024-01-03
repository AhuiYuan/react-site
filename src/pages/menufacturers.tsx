import React, {useEffect, useState} from 'react';
import { Breadcrumb, Col, Row} from 'antd';
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
                               title: "Electronic Components Manufacturers",
                           },
                       ]}
    />
}
interface state {
    az:any[],
    num:any[]
}

const App: React.FC = () => {
    const [brandData, setBrandData] = useState<state>({ az:[], num: [] }); // 用于保存请求的用户数据
    const [numData, setNumData] = useState<state[]>([]); // 用于保存请求的用户数据
    useEffect(() => {
        // 发起 GET 请求
        apiClient.get<state>('/product/brand-all')
            .then(({az, num}) => {
                setBrandData({ az, num });
                setNumData(num);
                console.log(az)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <div className="menufacturersPage commonPage">
            <div className="wrap-content">
                <Bread/>
                <CardBlock info={{
                    Electronic:"Electronic Components Manufacturers",
                    intro:"Dasenic has close partnerships with over 3,000 electronic component manufacturers and distributors worldwide. With this advantage, we are confident in our ability to help you find even the most difficult-to-source components in the market."
                }}/>
                <Row style={{margin:"40px 0"}}>
                    <SearchLeft/>
                    <Col span={17}  className="rightBlock">

                        <div className='numList' id="type-#">
                            <ul>
                                <li><a href="#type-#" className='isActive'><strong>#</strong></a></li>
                                {brandData?.az && Object.keys(brandData?.az).map((key: any,index) => (
                                <li key={key}><a href={`#type-${index}`}><strong>{key}</strong></a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="nameList">
                            <Row gutter={16}>
                                {numData.map((item:any,index)=>(
                                <Col key={index} span={12} ><a href="">{item.title}</a></Col>
                                ))}
                            </Row>
                        </div>
                        {brandData?.az && Object.values(brandData?.az).map((row: any[],key) => (
                            <div key={key}>
                                <div className='numList' id={`type-${key}`}>
                                    <ul>
                                        <li><a href="#type-#"><strong>#</strong></a></li>
                                        {brandData?.az && Object.keys(brandData?.az).map((key: any,index) => (
                                            <li key={key}><a href={`#type-${index}`}><strong>{key}</strong></a></li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="nameList">
                                    <Row gutter={16}>
                                        {row.map((item:any,index:number)=>(
                                            <Col key={index} span={12} ><a href="">{item.title}</a></Col>
                                        ))}
                                    </Row>
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>
            </div>
        </div>
    )
};
export default App;