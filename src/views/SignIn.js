import React from 'react';
//import './Signin.css';
import {Input,Form, Card} from "antd";
import { UserOutlined} from '@ant-design/icons';
import {
    AutoComplete,
    Cascader,
    Select,
  } from 'antd';
  const { TextArea } = Input;
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


function RegistrationForm() {
    return(
        <>
        <div className="container"  >

      <text style={{marginLeft:'50px',fontSize:'32px'}}>Sign-Up</text>
      <Form style={{marginLeft:'40px'}}>  
<Input size="medium" placeholder="Names" prefix={<UserOutlined />}style={{ width: '30%' }} />
    <br />
    <br />
    <Input placeholder="Email" prefix={<UserOutlined />} style={{ width: '30%' }}/>
    <br />
    <br />
        
        <Input.Group compact >
      <Select
        defaultValue="Sign Up"
         >
        <Option value="Sign Up">Sign Up</Option>
        <Option value="Sign In">Sign In</Option>
      </Select>
      <AutoComplete
        style={{ width: '23%', }}
        placeholder="Email"
        options={[ { value: 'text 1',},{value: 'text 2',},
        ]}
      />
    </Input.Group>
    <br /> 
   
    <TextArea rows={4} placeholder='Your message' style={{width: '30%',}}></TextArea> <br/>&nbsp;
    <br/>

    <button type="primary"style={{width: '15%',marginLeft:'60px',padding:'8px'}} >Register </button>
          
    </Form>
  
    
      </div>
   
      </>     
    )       
}
export default RegistrationForm;