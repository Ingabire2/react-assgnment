import React from "react";
import {Input,Form,Space,DatePicker,Card} from "antd";
import { UserOutlined} from '@ant-design/icons';
import {
    AutoComplete,
    Button,
    Cascader,
    Select,
  } from 'antd';
  import "./Contact.css";
  const { TextArea } = Input;
  const { RangePicker } = DatePicker;

  const options = [
    {
      value: 'kicukiro',
      label: 'Kigali',
      children: [{value: 'Gasabo',
                  label: 'Nyarugenge',
                  children: [
                     {value: 'Gasabo',
                      label: 'West Lake', },],
                 },
               ],
    },
    {value: 'Nyamata',
      label: 'Nyarugenge',
      children: [
        {value: 'nanjing',
          label: 'Nanjing',
          children: [
            {value: 'zhonghuamen',
              label: 'Zhong Hua Men',},],
        },
      ],
    },
  ];
  const { Option } = Select;
const Contact = () =>{
    return (
        <>
         <Card >
         <div className="btn">
         
        <h1 className="title">Get in Touch</h1>;
       
            <Input size="medium" placeholder="Names" prefix={<UserOutlined />} />
    <br />
    <br />
    <Input placeholder="Address" prefix={<UserOutlined />} />
    <br />
    <br />
        
        <Input.Group compact>
      <Select
        defaultValue="Sign Up"
        style={{ width: '30%' }} >
        <Option value="Sign Up">Sign Up</Option>
        <Option value="Sign In">Sign In</Option>
      </Select>
      <AutoComplete
        style={{ width: '70%', }}
        placeholder="Email"
        options={[ { value: 'text 1',},{value: 'text 2',},
        ]}
      />
    </Input.Group>
    <br /> 
    <Input.Group compact>
      <Select style={{ width: '30%',}}
        defaultValue="Home"
      >
        <Option value="Home">Home</Option>
        <Option value="Company">Company</Option>
      </Select>
      <Cascader
        style={{width: '70%',}}
        options={options}
        placeholder="Select Address"
      />
    </Input.Group>
    <br />
    <Space direction="vertical" size={12}>
    <RangePicker showTime />
    </Space> 
     <br />
     <br />
    <Form>
   
        <TextArea rows={4} placeholder='Your message'></TextArea> <br/>&nbsp;
    
    <Form.Item >
        <Button type="primary" 
        style={{paddingLeft:'40px',paddingRight:'40px',fontSize:'18px',height:"40px",borderRadius:'.6rem'}}>Send</Button>
      </Form.Item></Form>
    </div>
    </Card>
        </>
    )
}
export default Contact;