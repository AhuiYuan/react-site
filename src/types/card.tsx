import {Card} from "antd";
import React from "react";

interface itemProps{
    info:any
}
export const CardBlock=({info}:itemProps)=>{
    return <Card title={<div className="card-title">
        <h2>{info.Electronic}</h2>
        <p>{info.Results}</p>
    </div>}>
        <p>{info.intro}</p>
    </Card>
}