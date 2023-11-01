import React, {useEffect, useState} from "react";
import {Row,Col,Card,Button} from 'antd'

/*组件*/
import Carousel from "../component/index/carousel";
import HProCarousel from "../component/index/HproCarousel";
import apiClient from "../serve/request";


/*分类列表*/
interface categoryListDate {
    head:[];
    cate:[];
    title: string;
    web_url: string;
    categoryList:[];
    category_id: number;
}
interface brandState{
    image: string;
    brand:[]
}
const CategoryItem=()=>{
    const [activeIndex, setActiveIndex] = useState(-1);
    const [CategoryDate, setCategoryDate] = useState<categoryListDate[]>([]); // 用于保存请求的用户数据
    useEffect(() => {
        // 发起 GET 请求
        apiClient.get<categoryListDate>('/config')
            .then(response => {
                //console.log(response)
                setCategoryDate(response.cate)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return <div className='ant-card'>
        <div className="pro-category-list" onMouseLeave={() => setActiveIndex(-1)}>
            <a className="allBtn" href='/'>PRODUCTS <span>View All</span></a>
            {CategoryDate.map((row, rowIndex) => (
                <div key={rowIndex}>
                    <dl className={activeIndex===rowIndex?"active":''}>
                        <dt onMouseEnter={() => setActiveIndex(rowIndex)} >
                            <a href={row.web_url}>{row.title}</a>
                        </dt>
                    </dl>
                    {activeIndex === rowIndex && (
                        <dd onMouseLeave={() => setActiveIndex(-1)}>
                            <ul>
                                {row.categoryList.map((items:any,index)=>(
                                    <li key={index}><a href={items.web_url}>{items.title}</a></li>
                                ))}
                            </ul>
                        </dd>
                    )}
                </div>
            ))}
        </div>
    </div>
}
/*卡片列表*/
const cardItems=[
    {
        id:0,
        img:'/img/index01.jpg',
        title:'Souring',
        description:'Dasenic\'s strong supply chain services help solve global customers\' demand for electronic components and ensure timely components supply.'
    },
    {
        id:1,
        img:'/img/index02.png',
        title:'Technical Support',
        description:'Alternative parts will be suggested by our experienced engineers, and help solve some technical issues.'
    },
    {
        id:2,
        img:'/img/index03.jpg',
        title:'Quality Inspection',
        description:'We conduct strict quality inspections in our test room to ensure that only new and original parts are offered and meet the product quality standards.'
    }
]
const ListItems=()=>{
    const listItems = cardItems.map((cardItems,index) =>
        <Col span={8}  key={index}>
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
/*品牌列表*/
const  BrandList=()=>{
    const [brandData,setBrandData]=useState<brandState[]>([])
    useEffect(() => {
        // 发起 GET 请求
        apiClient.get<brandState>('')
            .then(response => {
                console.log(response)
                setBrandData(response.brand)
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return <>
        <h2>Featured Manufacturers</h2>
        <Row gutter={20} justify="center">
            {brandData.map((item,index)=>(
                <Col key={index} span={3}><img src={item.image} alt=""/></Col>
            ))}

        </Row>
    </>
}
/*底部分类列表*/
const BotListData=[
    {
        img:"/img/type01.png",
        title:"Potentiometers",
        url:""
    },
    {
        img:"/img/type02.png",
        title:"Relays",
        url:""
    },
    {
        img:"/img/type03.png",
        title:"Sensors",
        url:""
    },
    {
        img:"/img/type04.png",
        title:"RF&FRID",
        url:""
    },
    {
        img:"/img/type05.png",
        title:"Transformers",
        url:""
    },
    {
        img:"/img/type06.png",
        title:"Resistors",
        url:""
    },
    {
        img:"/img/type07.png",
        title:"Oscillatorsa",
        url:""
    }
]
const BotList=()=>{
    const listItems = BotListData.map((item,index) =>
        <Col span={3} style={{textAlign:'center'}}>
            <img src={item.img} alt=""/>
            <p>{item.title}</p>
        </Col>
    );
    return  <Row gutter={40} justify="center">{listItems}</Row>
}


const App:React.FC=()=>{
    return (
        <div className='homePage'>
            <div className="wrap-content">
                <Row>
                    <Col span={5} className='pro-categorize-list'>
                        <CategoryItem/>
                    </Col>
                    <Col span={19}>
                        <Carousel/>
                    </Col>
                </Row>
                <div className="cardList">
                    <ListItems/>
                </div>
                <div className="HProCarousel">
                    <HProCarousel/>
                </div>
                <div className='brandList'>
                    <BrandList/>
                </div>
                <div className='cardItem'>
                    <Row gutter={40}>
                        <Col span={12} key={0}>
                            <Card>
                                <b>Component Shortage?</b>
                                <p>With a large in-stock inventory and extensive market contacts, in most cases when your suppliers are unable to provide the components you need for your project, we can.</p>
                                <Button size={"large"} >Get Quote </Button>
                            </Card>
                        </Col>
                        <Col span={12} key={1}>
                            <Card>
                                <b>Component Shortage?</b>
                                <p>With a large in-stock inventory and extensive market contacts, in most cases when your suppliers are unable to provide the components you need for your project, we can.</p>
                                <Button size={"large"} >Register Now</Button>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className='pro-systematics'>
                <div className='wrap-content'>
                    <BotList/>
                </div>
            </div>
        </div>

    )
}

export default App