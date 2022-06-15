import React from "react";
import {Input,Space,Button,Card,Typography,Form} from "antd";
import { Carousel } from 'antd';
import Gorilla from "../assets/images/gorilla.jpg";
import Giraffe from "../assets/images/giraffe.jpg";
import Zebra from "../assets/images/zebra.jpg";
import Canopy from "../assets/images/canopy.jpg";
const {Text,Title} =Typography;
const SingleTour = ({data}) => {
    return(
        <>
        
        <Title style={{fontSize:"28px"}}>
            {data.title}</Title>
            <Carousel autoplay>
                <img src={Gorilla} alt="g"/>
                <img src={Giraffe} alt="gi"/>
                <img src={ Zebra} alt="ze"/>
                <img src={ Canopy} alt="cano"/>
            </Carousel>
        {/* <img src={data.photo}></img> */}
        
        <Text strong style={{fontSize:"18px"}}>
            {data.prepareBy}</Text>
        <p>{data.description}</p>
        <Space>
        <Text strong style={{padding:"50px"}}>{data.dueDate}</Text></Space>
        <Card title="Applicant Information">
            <Space direction="vertical">
                <Form style={{backgroundColor:'#999',padding:'20px'}}>
                    <Form.Item label="Your Email">
                <Input placeholder="Email"></Input></Form.Item>
                <Form.Item label="Your Phone">
                <Input placeholder="Phone"></Input></Form.Item>
                <Form.Item>
                <Button onClick={() =>{}} type="primary">Send Application Now!</Button></Form.Item>
                </Form>
            </Space>
    
        </Card>
        </>
    )
}
export default SingleTour;