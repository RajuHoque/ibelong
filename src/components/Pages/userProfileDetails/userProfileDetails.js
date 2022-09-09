import classes from './userProfileDetails.module.css';
import userProfileLogo from '../../../images/userImage.png';

const UserProfileDetails=()=>{
    return(
        <div className={classes['profile-details']}>
            <div className={classes['profile-div']}>
                <div className={classes.empInfo}>
                    <img src={userProfileLogo} alt="userProfile"></img>

                </div>
                <div className={classes.empInfo}>
                    <h2>Employee Name</h2>
                    <p>Employee Id</p>
                    <h3>Associate Engineer</h3>
                </div>
                <div className={classes.empInfo}>
                    <p>Department: </p>
                    <p>Office Location:</p>
                    <p>Email Id:</p>
                    <p>Mobile No:</p>
                </div>
                <div className={classes.empInfo}>
                    <h3>Research {'&'} Development</h3>
                    <h3>Bangalore</h3>
                    <h3>raju@brigosha.com</h3>
                    <h3>7054605432</h3>
                </div>

            </div>
            <div className={classes.houseCard}>

                <div className={classes.div2}></div>
                <h2>View House Card</h2>
            
           

            </div>
            

        
            
            

            </div>

       
    )
}
export default UserProfileDetails;