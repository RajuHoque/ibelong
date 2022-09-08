import classes from './users.module.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'antd/dist/antd.css';
import {Input,Table} from 'antd';
import {useEffect} from 'react';

const columns = [
  {
    title: 'Associate',
    dataIndex: 'associate',
    key: 'name',
    render:(text)=>{
      return(
        
        <NavLink to='/userProfile' className={classes.userProfile}>{text}</NavLink>

      )
    }
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'age',
  },
  {
    title: 'Events Participated',
    dataIndex: 'eventno',
    key: 'address',
    sorter:(record1,record2)=>{
      return record1.eventno>record2.eventno;
    },
  },
  {
    title: 'Designation',
    key: 'tags',
    dataIndex: 'designation',
  },
  {
    title: 'Contact Details',
    dataIndex:'contacts',
    key: 'action',
  },
];



const Users = () => {
  const [data,setData]=useState([]);
  const [searchText,setSearchText]=useState('');
  useEffect(()=>{
    const arr=[];
    for( let key=0; key<=50; key++)
    {
      arr.push({
        key:key,
    associate:'Employee Name',
    department:'Department Name',
    eventno:'2',
    designation:'Designation Assigned',
    contacts:['@brigosha.com','7908141139'],


      })
    }
    setData(arr);

  },[])
  const handleChange=(event)=>{
    setSearchText(event.tatrget.value);

  }
  return (
<div className={classes.dashboard}>
            <main className={classes.main}>
              {/* <Space style={{marginBottom:16}}> */}
              <div className={classes.tableHeader}>
              <h1>All Users</h1>
              
              <Input
                placeholder='Search'
                onChange={handleChange}
                type="text"
                allowClear
                value={searchText}
                className={classes.input}
                >
                </Input>  
                

              </div>
                            
              {/* </Space> */}
                <Table columns={columns} dataSource={data} />

            </main>
            
        </div>
  )
}
;

export default Users;
