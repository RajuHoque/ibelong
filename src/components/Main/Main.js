
import classes from './Main.module.css';
import Sidebar from '../SideBar/SideBar';
import { Routes,Route } from 'react-router-dom';
import Users from '../Pages/users';
import Overview from '../Pages/Overview';
import Events from '../Pages/Events';
import UserProfile from '../Pages/userProfile';

const Main=()=>{
    return(
        <div className={classes.main}>
            <Sidebar/>
            <Routes>
          <Route  path='/users' element={<Users/>}/>
          <Route  path='/overview' element={<Overview/>}/>
          <Route  path='/events' element={<Events/>}/>
          <Route  path='/userProfile' element={<UserProfile/>}/>
          
          
        </Routes>
            
        </div>
    )
}
export default Main;