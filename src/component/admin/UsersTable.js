import React from "react";
import { Table,Tag,Space } from "antd";
import users from "../../assets/data/users.json";

const columns =[
    { 
        title:'Name',
        dataIndex:"name",
        key:'name',
        render: (text) => <a>{text.split(" ")[0]}</a>,

    },
    { 
        title:'Gender',
        dataIndex:'gender',
        key:'gender',
       

    },
    { 
        title:'Email',
        dataIndex:'email',
        key:'email',
        

    },

    {
        title:'Active',
        dataIndex:'isActive',
        key:"isActive",
        render: (text) => <Tag color={text?"green":"red"}>{text.toString()}</Tag>,

    },
            {
                title:'Action',
                dataIndex:'Action',
                key:'action',
                render: (_, record) => (
                    <Space size="middle">
                      <a>Activate</a>
                      <a>Delete</a>
                      <a>Views</a>
                    </Space>
                  ),
        
            },
]

const UsersTable = () => <Table columns={columns} dataSource={users} />;

export default UsersTable;