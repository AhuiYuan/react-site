import React from "react";
import {Row,Col,Card} from 'antd'

/*组件*/
import Carousel from "../component/carousel";

const cardItems=[
    {
        img:'/img/index01.jpg',
        title:'Souring',
        description:'Dasenic\'s strong supply chain services help solve global customers\' demand for electronic components and ensure timely components supply.'
    },
    {
        img:'/img/index02.png',
        title:'Technical Support',
        description:'Alternative parts will be suggested by our experienced engineers, and help solve some technical issues.'
    },
    {
        img:'/img/index03.jpg',
        title:'Quality Inspection',
        description:'We conduct strict quality inspections in our test room to ensure that only new and original parts are offered and meet the product quality standards.'
    }
]
const ListItems=()=>{
    const listItems = cardItems.map(cardItems =>
        <Col span={8}>
            <Card>
                <div>
                    <img src={cardItems.img} alt=""/>
                </div>
                <div className="card-text">
                    <p>{cardItems.title}</p>
                    <span>{cardItems.description}</span>
                </div>
            </Card>

        </Col>
    );
    return <Row gutter={20}>{listItems}</Row>
}



const App:React.FC=()=>{
    return (
        <div className="wrap-content">
            <Row>
                <Col span={5}>
                    <div className="pro-category-list" >
                        <a className="allBtn">PRODUCTS <span>View All</span></a>
                        <dl>
                            <dt >
                                <a>1231321</a>
                            </dt>
                        </dl>
                        <dl>
                            <dt >
                                <a>1231321</a>
                            </dt>
                        </dl>
                        <dl>
                            <dt >
                                <a>1231321</a>
                            </dt>
                        </dl>
                        <dl>
                            <dt >
                                <a>1231321</a>
                            </dt>
                        </dl>
                        <dd style={{display:'none' }}>
                            <ul>
                                <li><a>qeqeqwew</a></li>
                            </ul>
                        </dd>
                    </div>
                </Col>
                <Col span={19}>
                    <Carousel/>
                </Col>
            </Row>
            <div className="cardList">
                <ListItems/>
            </div>

        </div>
    )
}

export default App