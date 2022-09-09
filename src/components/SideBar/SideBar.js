import classes from './SideBar.module.css';
import eventLogo from '../../images/events.png';
import userLogo from '../../images/users.png';
import overviewLogo from '../../images/overview.png';
import setting from '../../images/setting.png';
import BrigoshaLogo from '../../images/brigosha.png';
// import Dropdown from './Dropdown';
import houses from '../../images/houses.png';
import { NavLink } from 'react-router-dom';
import toggle from '../../images/toggle.png';



const Sidebar = ()=>{
    return(
    
            <div className={classes.sidebar} >
                <main className={classes.main}>


                <nav className="navbar">
                    <ul className="nav-list">
                        <li className="navitem">
                            <div>
                            <img src={overviewLogo} alt="overview"></img>
                            <NavLink to='/'>overview</NavLink>

                            </div>
                            
                            </li>
                            <li className="navitem">
                            <div className={classes.houses}>
                            <img src={houses} alt="houses"/>
                            <NavLink to='/'>houses</NavLink>
                            <span><img  src={toggle} alt="toggle" className={classes.togg}/></span>

                            </div>
                            
                            </li>
                        <li className="navitem">
                            <div>
                            <img src={userLogo} alt="users"></img>
                            <NavLink to='/users'>users</NavLink>
                            </div>
                            </li>
                        <li className="navitem">
                            <div>
                            <img src={eventLogo} alt="events"></img>
                            <NavLink to='/events'>events</NavLink>

                            </div>

                            <div className={classes.setting}>
                            <img src={setting} alt="settings"></img>
                            <span>settings</span>
               
                        </div>
                    <div className={classes.brigosha}>
                    <img src={BrigoshaLogo} alt="Brigosha"/>
                        <p>powered by</p>
                        <span>Brigosha Technologies</span>
                </div>
                            
                            </li>
                        
                    </ul>
                </nav>
                </main>
            </div>
        
    )
}
export default Sidebar;





// const SideBar=()=>{
//     const rotate=()=>{

//     }
//     return(
//         <div className={classes.sidebar}>
//             <main className={classes.main}>

//             <div>
//                 <img src={overviewLogo} alt="overview"></img>
//                 <span>overview</span>
//             </div>
            
//             <div className={classes.houses}>
//             <img src={houses} alt="houses"/>
//             <span>houses</span>
//             <span><img  src={toggle} alt="toggle" className={classes.togg} onClick={rotate}/></span>
                
//             </div>
//             <div>
//                 <img src={userLogo} alt="users"></img>
//                 <span>users</span>
//             </div>
//             <div>
//                 <img src={eventLogo} alt="events"></img>
//                 <span>events</span>
//             </div>
//             <div className={classes.setting}>
//                 <img src={setting} alt="settings"></img>
//                 <span>settings</span>
               
//             </div>
//             <div className={classes.brigosha}>
//             <img src={BrigoshaLogo} alt="Brigosha"/>
//                 <p>powered by</p>
//                 <span>Brigosha Technologies</span>
//                 </div>

//             </main>
            

//         </div>
        
//     )
// }
// export default SideBar;