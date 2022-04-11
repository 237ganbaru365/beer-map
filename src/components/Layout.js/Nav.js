import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import CustomizedMenus from "./SpNavItem";
import classes from "./Nav.module.css";

const Nav = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
    //optional: redirect the user
  };

  return (
    <header className={classes.header}>
      <NavLink to="/">
        <div className={`${classes.logo} ${classes["only-pc"]}`}>
          <span>🍺</span> Beer Map
        </div>
        <div className={classes["only-sp"]}>
          {isLoggedIn && <CustomizedMenus />}
        </div>
      </NavLink>
      <nav>
        <ul>
          {!isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/auth">
                Login
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li className={classes["only-pc"]}>
              <NavLink activeClassName={classes.active} to="/home">
                Home
              </NavLink>
            </li>
          )}
          {isLoggedIn && (
            <li className={classes["only-pc"]}>
              <NavLink activeClassName={classes.active} to="/favorite">
                Favorite
              </NavLink>
            </li>
          )}
          {/* {isLoggedIn && (
            <li>
              <NavLink activeClassName={classes.active} to="/create">
                Create
              </NavLink>
            </li>
          )} */}
          {isLoggedIn && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
