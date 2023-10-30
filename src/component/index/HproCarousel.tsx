import React, {useEffect, useState} from 'react';
import {Carousel, Row, Col} from 'antd';
import apiClient from "../../serve/request";


interface state {
    productHot:[];
}
const App: React.FC = () => {
    const [data, setData] = useState<state["productHot"]>([]); // 用于保存请求的用户数据
    useEffect(() => {
        // 发起 GET 请求
        apiClient.get<state>('')
            .then(response => {
                console.log(response.productHot)
                setData(response.productHot)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <Carousel autoplay dots={false}>
            {data.map((subArray:any,rowIndex)=>(
                <div key={rowIndex} className='carousel-item'>

                        <Row gutter={10}>
                            {subArray.map((item:any, subIndex:number)=>(
                            <Col key={subIndex} span={8}>
                                <div className='item-list'>
                                    <div className='list01'>
                                        <div className='pro-img'><img src="/img/type01.png" alt=""/></div>
                                        <div className='pro-info'>
                                            <h3>{item[0].mpn}</h3>
                                            <span>{item[0].intro}</span>
                                            <p>USD$ {item[0].unit_price}</p>
                                            <span>{item[0].title}</span>
                                        </div>
                                    </div>
                                    <Row gutter={10} style={{marginTop: '10px'}}>
                                        <Col span={12}>
                                            <div className='list02'>
                                                <div className='pro-img'><img src="/img/type01.png" alt=""/></div>
                                                <div className='pro-info'>
                                                    <span>{item[1].title}</span>
                                                    <p>USD$ {item[1].unit_price}</p>
                                                    <span>{item[1].mpn}</span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col span={12}>
                                            <div className='list02'>
                                                <div className='pro-img'><img src="/img/type01.png" alt=""/></div>
                                                <div className='pro-info'>
                                                    <span>{item[2].title}</span>
                                                    <p>USD$ {item[2].unit_price}</p>
                                                    <span>{item[2].mpn}</span>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            ))}
                        </Row>
                </div>
            ))}
        </Carousel>
    )
};

export default App;