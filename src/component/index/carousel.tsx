import React, {useEffect, useState} from 'react';
import {Carousel} from 'antd';
import '../../style/index.scss'
import apiClient from "../../serve/request";

interface headNavList {
    headNav:[];
    image: string;
    url: string;
}
const App: React.FC = () => {
    const [headNav, setHeadNav] = useState<headNavList[]>([]); // 用于保存请求的用户数据
    useEffect(() => {
        // 发起 GET 请求
        apiClient.get<headNavList>('')
            .then(response => {
                setHeadNav(response.headNav)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return (
        <Carousel autoplay >
            {headNav.map((item,index)=>(
                <div key={index}>
                    <a href={item.url}><img src={item.image} alt=""/></a>
                </div>
            ))}
        </Carousel>
    )
};


export default App;