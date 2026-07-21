import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useParams, Link } from "react-router";
import styles from "./Chat.module.css";

function Chat() {
  const [cookies] = useCookies(["user", "token"]);
  const token = cookies.token;
  const user = cookies.user;

  const [chat, setChat] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  let params = useParams();

  useEffect(() => {
    const fetchChat = async () => {
      console.log(params.recipientId);
      try {
        const response = await fetch(
          `http://localhost:3000/api/chats/chat/${params.recipientId}`,
          {
            method: "GET",
            headers: {
              authorization: `bearer ${token}`,
            },
          },
        );

        const result = await response.json();

        if (!response.ok) {
          throw new Error(
            `HTTP error ${result.error}! Status: ${response.status}`,
          );
        }
        setChat(result.messages);
      } catch (err) {
        console.error("Fetch failed", err);
      }
    };
    fetchChat();
  }, []);
  console.log(chat);

  return (
    <>
      <section className={styles.home}>
        <h1>Chat</h1>
        <section className={styles.chat__wrapper}></section>
        {loading && <span>loading....</span>}
        {error && <span>{error?.message ? error.message : String(error)}</span>}
      </section>
    </>
  );
}

export default Chat;
