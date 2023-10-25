import React, {useEffect, useState} from "react";
import {Row,Col} from 'antd';
import apiClient from "../serve/request";
interface navListData {
    data:[]
    LastColumn:[]
    head:[]
}
const FooterNav=()=>{
    const [navList,setNavList]=useState<navListData[]>([])
    useEffect(() => {
        // 发起 GET 请求
        apiClient.get<navListData>('/config')
            .then(response => {
                setNavList(response.LastColumn)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <>
            <Row gutter={20}>
                <Col span={10}>
                    <p>Shenzhen,Futian District, No.3018 Shennan Avenue,Bank of Communications Building,20F.</p>
                    <p>+852-30533019</p>
                    <p>dasenic@dasenic.com</p>
                    <div style={{marginTop:'20px'}}>
                        <img src="/img/linkedin.png" alt=""/>
                        <img src="/img/youtube.png" alt=""/>
                        <img src="/img/instagram.png" alt=""/>
                        <img src="/img/facebook.png" alt=""/>
                    </div>
                </Col>
                <Col span={2}></Col>
                {navList.map((subArray:any,rowIndex)=>(
                    <Col span={4} key={rowIndex}>
                        {subArray.map((item:any, subIndex:number) => (
                            <ul key={subIndex}>
                                <li key={item.id}>
                                    <a href={item.url}>{item.title}</a>
                                </li>

                            </ul>
                        ))}
                    </Col>
                ))}
            </Row>
            <div className='copyRight'>
                <p>Copyright© 2023 Shenzhen Dasenic Electronics Limited. 粤ICP备2022048691号</p>
                <div className='img-items'>
                    <img src="/img/mastercard.png" alt=""/>
                    <img src="/img/paypal.png" alt=""/>
                    <img src="/img/stripe.png" alt=""/>
                    <img src="/img/call-transfer.png" alt=""/>
                    <img src="/img/american.png" alt=""/>
                    <img src="/img/visa.png" alt=""/>
                </div>
            </div>
        </>
    )
}

const App: React.FC = ()=>{
    return <div className='wrap-content'>
        <FooterNav/>
    </div>
}
export default App