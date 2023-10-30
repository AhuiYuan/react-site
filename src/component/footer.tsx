import React, {useEffect, useState} from "react";
import {Row,Col} from 'antd';
import apiClient from "../serve/request";
interface state{
    LastColumn:[]
    head: {
        address: string;
        copyright: string;
        icp: string;
        service_email: string;
        service_phone: string;
    }
}
const FooterNav=()=>{
    const [navList,setNavList]=useState<state["LastColumn"]>([])
    const [footerList, setFooterList] = useState<state["head"]>({
        address: "",
        copyright: "",
        icp: "",
        service_email: "",
        service_phone: "",

    });
    useEffect(() => {
        // 发起 GET 请求
        apiClient.get<state>('/config')
            .then(response => {
                setFooterList(response.head);
                setNavList(response.LastColumn);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <>
            <Row gutter={20}>
                <Col span={10}>
                    <p>{footerList.address}</p>
                    <p>{footerList.service_phone}</p>
                    <p>{footerList.service_email}</p>
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
                <p>{footerList.copyright}{footerList.icp}</p>
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