import React from "react";
import allTours from "../../assets/data/tours.json";
import 'antd/dist/antd.css';

import { Table, Space } from 'antd';
const columns = [
  {
    title: 'Title',
    dataIndex: 'title',
  },

  {
    title: 'Due-Date',
    dataIndex: 'dueDate',
  },
  {
    title: 'Description',
    dataIndex: 'description',
  }, {
    title: 'Action',
    key: 'operation',
    render: () => <a href=""><Space style={{color:''}}>Delete</Space>Publish</a>,
  },
];

const Alltour =()=>{
    return(
    <Table
    columns={columns}
    
    dataSource={allTours}
    
  />
    )
}
export default Alltour;