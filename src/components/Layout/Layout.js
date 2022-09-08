
import MainHeader from './MainHeader';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <main className={classes.layout} >
      <MainHeader />
      <main>{props.children}</main>
    </main>
  );
};

export default Layout;
