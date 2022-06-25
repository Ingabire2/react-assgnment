import React,{ useState } from "react";
import 'antd/dist/antd.css';
import './dashboard.css';
import logo from '../assets/images/logo.jpg';
import {Link} from 'react-router-dom';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined ,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { Header, Sider, Content } = Layout;

const Dashboard =({children,menuSelectorIndex})=>{
  const [collapsed, setCollapsed] = useState(false);
  //const [isOpen, setOpen] = useState(false);
    return(
        <>
       <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo2"> <img src={logo} alt="Logo" style={{width:'190px',height:'50px',paddingLeft:'10px',paddingTop:'4px'}}/></div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[`${menuSelectorIndex}`]}
          items={[
              {
              key: '4',
              //icon: <UserOutlined />,
              label: 'Dashboard', 
            },
            {
              key: '1',
              icon: <VideoCameraOutlined />,
              label: <Link to='/dashboard'> All Tours</Link> ,
            },
            {
              key: '2',
              icon: <UploadOutlined />,
              label: <Link to='/dashboard-admin'> Create Tour</Link>,
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: <Link to='/dashb'>Manager Users</Link>,
            },
         
          ]} > 
           </Menu>
      
       
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0, backgroundColor:"#999",
          }}
        > ,<a href="/chart" style={{color:"black"}}>
          {React.createElement (collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger ',
            
            onClick: () => setCollapsed(!collapsed), 
          })} </a> 
        </Header>
        <Content
          className=" isOpen && site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
       
      </Layout>
    </Layout>
    
        </>
    )
}
export default Dashboard;