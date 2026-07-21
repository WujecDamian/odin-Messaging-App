import { Link } from "react-router-dom";
import styles from "./Groupbox.module.css";

const GroupBox = ({ group }) => {
  return (
    <Link to={`group/${group.id}`}>
      <div className={styles.group}>
        <h3>{group.name}</h3>
      </div>
    </Link>
  );
};

export default GroupBox;
