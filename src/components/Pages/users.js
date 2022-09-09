import classes from './users.module.css';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'antd/dist/antd.css';
import {Input,Table} from 'antd';
import {useEffect} from 'react';
import userImage from '../../images/userImage.png';

const columns = [
  {
    title: 'Associate',
    dataIndex: 'associate',
    key: 'name',
    render:(text)=>{
      return(
        
        <NavLink to='/userProfile' className={classes.userProfile}>
          
          <div className={classes.evenCol}>
            <div className={classes.col}>
              <img src={userImage} alt="userimage"/>
            </div>
            <div className={classes.col}>
              <h2>{text}</h2>
              <p>Employee Id</p>
            </div>
            <div className={classes.col}>
              
            </div>
            
          </div>
          </NavLink>

      )
    }
  },
  {
    title: 'Department',
    dataIndex: 'department',
    key: 'age',
    render:(text)=>{
      return(
        <p className={classes.colItem}>{text}</p>
      )
    }
  },
  {
    title: 'Events Participated',
    dataIndex: 'eventno',
    key: 'address',
    render:(text)=>{
      return(
        <p className={classes.colItem}>{text}</p>
      )
    },
    sorter:(record1,record2)=>{
      return record1.eventno>record2.eventno;
    },
  },
  {
    title: 'Designation',
    key: 'tags',
    dataIndex: 'designation',
    render:(text)=>{
      return(
        <p className={classes.colItem}>{text}</p>
      )
    }
  },
  {
    title: 'Contact Details',
    dataIndex:'contacts',
    key: 'action',
    render:(text)=>{
      return(
        <p className={classes.colItem}>{text}</p>
      )
    }
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
