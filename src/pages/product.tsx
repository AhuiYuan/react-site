import React, { useEffect, useState } from "react";
import apiClient from "../serve/request";
import {Col, Row} from "antd";

interface State {
    LastColumn:[]
    head: {
        address: string;
        copyright: string;
        icp: string;
        service_email: string;
        service_phone: string;

    };
}

const FooterNav: React.FC = () => {
    const [navList, setNavList] = useState<State["head"]>({
        address: "",
        copyright: "",
        icp: "",
        service_email: "",
        service_phone: "",

    });
    const [headList,setHeadList]=useState<State["LastColumn"]>([])

    useEffect(() => {
        // 发起 GET 请求
        apiClient.get<State>("/config")
            .then(response => {
                console.log(response);
                setNavList(response.head);
                setHeadList(response.LastColumn);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <Row gutter={20}>
                {headList.map((subArray:any,rowIndex)=>(
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
            <ul>
                {Object.entries(navList).map(([key, value]) => (
                    <li key={key}>
                        {key}: {value}
                    </li>
                ))}
            </ul>
        </div>

    );
};

const App: React.FC = () => {
    return (
        <div className="wrap-content">
            <FooterNav />
        </div>
    );
};

export default App;