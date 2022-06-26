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
  const { pArea } = Input;
  const { p, Title } = Typography;
  const { RangePicker } = DatePicker;

  
const Contact = () =>{
    return (
        <>
         <Card >
         <Title style={{float:'left',fontSize:'28px',marginLeft:'105px',marginTop:'80px'}}>Book Your Stay</Title>
         <div className="container">
         
         <div className="btn">        

    <p style={{float:'left',fontSize:"18px",fontWeight:'bold'}}>Check-In</p>
    <RangePicker showTime />
   <br/> <br/>
    <p  style={{float:'left',fontSize:"18px",fontWeight:'bold'}}>Check-Out</p>
    <RangePicker showTime />
     <br />
     <br /> 
     <div style={{display:"flex"}}>    
    <span style={{fontSize:'18px'}}>Adults

    <Select style={{ width: '80%'}}/></span>
   
   <span style={{fontSize:'18px'}}> Kids

   <Select style={{ width: '80%',}}/></span>

    </div>
    <br/>
    <br />
   <Button  
        style={{paddingLeft:'70px',border:'none',background:'black',color:'white',paddingRight:'70px',fontSize:'18px',height:"40px",borderRadius:'.6rem'}}>Search
    </Button>
    </div>
    </div>
    <Card style={{width: 300,margin:"40px",float:"right",marginTop:"-60rem",marginRight:"200px",
    fontWeight:"bold",textAlign:"start",backgroundColor:'#999',border:'none'}}
    title ="CONTACT-US">
    
    
      
      <p bold>Email:ingabire@gmail.com</p> <br/>
      <p>Teleph:+25678644302</p><br/>
      <p>Twitter:ingabire@tweeter</p><br/>
      <p>Linkedlin:ingabire@Linkedlin</p><br/>
      </Card>
    </Card>
    
        </>
    )
}
export default Contact;