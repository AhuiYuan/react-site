import React, { useState } from "react";

const Item = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const data = [
        { title: "Title 1", content: "Content 1" },
        { title: "Title 2", content: "Content 2" },
        { title: "Title 3", content: "Content 3" },
    ];

    return (
        <div>
            {data.map((item, index) => (
                <React.Fragment key={index}>
                    <dl>
                        <dt
                            /*onMouseEnter={() => setActiveIndex(index)}*/
                            /*onMouseLeave={() => setActiveIndex(-1)}*/
                        >
                            {item.title}
                        </dt>
                    </dl>
                    <dd>{item.content}</dd>
                    {/*{activeIndex === index && (
                        <dd onMouseLeave={() => setActiveIndex(-1)}>{item.content}</dd>
                    )}*/}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Item;