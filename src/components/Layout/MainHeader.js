
import classes from './MainHeader.module.css';
import logo from '../../images/IBelongLogo.png';
import Notification from '../../images/notification.png';
import toggleIcon from '../../images/toggle.png';
import userImage from '../../images/userImage.png';

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="ibelong logo"></img>
      </div>
      <div className={classes.user}>
        <img src={Notification} alt="notification"></img>
        <img src={userImage} alt="userImage"></img>
        <span>username</span>
        <img src={toggleIcon} alt="toggle"  className={classes.toggle}></img>

      </div>
    </header>
  );
};

export default MainHeader;
