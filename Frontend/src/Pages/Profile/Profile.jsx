import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router";
import styles from "./Profile.module.css";

function Profile() {
  const [cookies] = useCookies(["user", "token"]);
  const token = cookies.token;
  const user = cookies.user;

  const [profile, setProfile] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let params = useParams();

  useEffect(() => {
    const fetchProfile = async () => {
      console.log(params.userId);
      try {
        const response = await fetch(
          `http://localhost:3000/api/profile/${params.userId}`,
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            `HTTP error ${result.error}! Status: ${response.status}`,
          );
        }
        setProfile(result.profile);
      } catch (err) {
        console.error("Fetch failed", err);
      }
    };
    fetchProfile();
  }, []);
  console.log(profile);

  const handleMessageClick = async () => {
    const bodyData = {
      userId: user.id,
    };
    try {
      const response = await fetch(
        `http://localhost:3000/api/groups/group/${params.groupId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `bearer ${token}`,
          },
          body: JSON.stringify({ bodyData }),
        },
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      setError(error.message || error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className={styles.home}>
        <h1>Profile</h1>
        <section className={styles.profile__wrapper}>
          <img
            src={profile?.profile?.[0]?.bannerPhotoUrl}
            alt="Banner"
            className={styles.banner__picture}
          />
          <img
            src={profile?.profile?.[0]?.profilePhotoUrl}
            alt="Profile"
            className={styles.profile__picture}
          />

          <h2 className={styles.profile__name}>{profile.displayName} </h2>
          <button
            className={styles.profile__messageBtn}
            onClick={handleMessageClick}
          >
            Message
          </button>
        </section>
        {loading && <span>loading....</span>}
        {error && <span>{error?.message ? error.message : String(error)}</span>}
      </section>
    </>
  );
}

export default Profile;
