import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useCookies } from "react-cookie";

function Navbar() {
  const [cookies] = useCookies(["user", "token"]);

  const token = cookies.token;
  const user = cookies.user;
  if (user) {
    console.log("User is logged in! ", user);
  }
  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/">Home</Link>
        {user ? (
          <Link to="/logout">Log out</Link>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </>
  );
}

export default Navbar;
