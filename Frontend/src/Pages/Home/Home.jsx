import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import GroupBox from "../../Components/GroupBox/Groupbox";

function Home() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/groups");

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            `HTTP error ${result.error}! Status: ${response.status}`,
          );
        }
        setGroups(result.groups);
      } catch (err) {
        console.error("Fetch failed", err);
      }
    };
    fetchGroups();
  }, []);
  return (
    <>
      <section className={styles.home}>
        <h1>Check out some group!</h1>

        <section className={styles.groups}>
          {groups.map((group) => (
            <GroupBox group={group} key={group.id}></GroupBox>
          ))}
        </section>
      </section>
    </>
  );
}

export default Home;
