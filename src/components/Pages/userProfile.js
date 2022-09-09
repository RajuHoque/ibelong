

import classes from './users.module.css';
import React, { useState } from 'react';

import 'antd/dist/antd.css';
import {Table} from 'antd';
import {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import backLogo from '../../images/backLogo.png';
import UserProfileDetails from './userProfileDetails/userProfileDetails';

const columns = [
  {
    title: 'Event Name',
    dataIndex: 'eventName',
    key: 'event',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Events Description',
    dataIndex: 'eventDescription',
    key: 'description',
   
  },
  {
    title: 'Event Stage Reached',
    key: 'eventStage',
    dataIndex: 'eventStage',
  },
  {
    title: 'Files',
    dataIndex:'files',
    key: 'files',
  },
];



const UserProfile = () => {
  const [event,setEvent]=useState([]);
  useEffect(()=>{
    const arr=[];
    for( let key=0; key<=50; key++)
    {
      arr.push({
        key:key,
    eventName:'Event Name',
    date:'12-09-2022',
    eventDescription:'one Line Description of the event',
    eventStage:'Won 2nd Prize',
    files:'File name.mov'

      })
    }
    setEvent(arr);

  },[])
  
  return (
<div className={classes.dashboard}>
        
          <div >
            <NavLink to='/users'>
              <div className={classes['profile-header']}>
              <img src={backLogo} alt="back"/>
              <h1>Employee details page</h1>
              </div>
            </NavLink>
          </div>
          <UserProfileDetails/>
          
            <main className={classes.main}>
              
              <div className={classes.tableHeader}>
              <h1>Participated Events</h1>  
              </div>
                <Table columns={columns} dataSource={event} />

            </main>
            
        </div>
  )
}
;

export default UserProfile;



// const userProfile=()=>{
//     return(
//         <div className={classes.dashboard}>

//         </div>
//     )
// }
// export default userProfile;