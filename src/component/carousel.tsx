import React from 'react';
import { Carousel } from 'antd';
import '../style/index.scss'

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const App: React.FC = () => (
    <Carousel autoplay>
        <div>
            <img src="/img/banner01.png" alt=""/>
        </div>
        <div>
            <img src="/img/banner01.png" alt=""/>
        </div>
    </Carousel>
);

export default App;