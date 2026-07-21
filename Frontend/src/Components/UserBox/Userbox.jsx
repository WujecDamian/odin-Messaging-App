import { Link } from "react-router-dom";
import styles from "./UserBox.module.css";

const UserBox = ({ user }) => {
  return (
    <Link to={`/profile/${user.id}`}>
      <div className={styles.user}>
        <h3>{user.displayName}</h3>
      </div>
    </Link>
  );
};

export default UserBox;
