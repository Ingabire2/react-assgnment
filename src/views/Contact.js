import React from "react";
import {Input,Form,Space,DatePicker,Card,Typography} from "antd";
import { UserOutlined} from '@ant-design/icons';
import {
    AutoComplete,
    Button,
    Cascader,
    Select,
  } from 'antd';
  import "./Contact.css";
  const { TextArea } = Input;
  const { Text, Title } = Typography;
  const { RangePicker } = DatePicker;

  
const Contact = () =>{
    return (
        <>
         <Card >
         <Title style={{float:'left',fontSize:'28px',paddingLeft:'85px',paddingTop:'30px'}}>Book Your Stay</Title>
         <div className="container">
         
         <div className="btn">        

    <text style={{float:'left',fontSize:"18px",fontWeight:'bold'}}>Check-In</text>
    <RangePicker showTime />
   <br/> <br/>
    <text  style={{float:'left',fontSize:"18px",fontWeight:'bold'}}>Check-Out</text>
    <RangePicker showTime />
     <br />
     <br /> 
     <Form >
        <Form-item>
    <text style={{fontSize:'18px'}}>Adults</text>
 <br/>
    <Select style={{ width: '80%',}}/>
    
   <br/> 
   </Form-item> <br/>
   <Form-item>
   <text style={{fontSize:'18px'}}> Kids</text>
   <br/>
    <Select style={{ width: '80%',}}/></Form-item></Form>
    <br/>
    <br />
   <Button  
        style={{paddingLeft:'70px',border:'none',background:'black',color:'white',paddingRight:'70px',fontSize:'18px',height:"40px",borderRadius:'.6rem'}}>Search
    </Button>
    </div>
    </div>
    </Card>
    
        </>
    )
}
export default Contact;