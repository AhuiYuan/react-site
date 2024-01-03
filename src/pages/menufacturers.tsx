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
    title: any;
    az:any[],
    num:any[]
}

const App: React.FC = () => {
    const [brandData, setBrandData] = useState<state>({ title: null, az: [], num: [] }); // 用于保存请求的用户数据
    const [numData, setNumData] = useState<state[]>([]); // 用于保存请求的用户数据
    useEffect(() => {
        // 发起 GET 请求
        apiClient.get<state>('/product/brand-all')
            .then(({az, num}) => {
                console.log(az)
                // @ts-ignore
                setBrandData({ title: null, az, num });
                setNumData(num);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <div className="menufacturerPage commonPage">
            <div className="wrap-content">
                <Bread/>
                <CardBlock info={{
                    Electronic:"Electronic Components Manufacturers",
                    intro:"Dasenic has close partnerships with over 3,000 electronic component manufacturers and distributors worldwide. With this advantage, we are confident in our ability to help you find even the most difficult-to-source components in the market."
                }}/>

                <Row style={{margin:"40px 0"}}>
                    <SearchLeft/>
                    <Col span={17}  className="rightBlock">

                        <div className='numList'>
                            <ul>
                                {brandData?.az && Object.keys(brandData?.az).map((key: any) => (
                                <li><strong>{key}</strong></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            {brandData?.az && Object.keys(brandData?.az).map((key: any) => (
                                <div  key={key}>
                                    <ul>
                                        {brandData?.az[key].map((item: any) => (
                                            <li key={item.title}>{item.title}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
};
export default App;