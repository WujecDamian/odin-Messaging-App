import styles from "./Message.module.css";

const Message = ({ userId, message }) => {
  return (
    <div className={styles.message}>
      {message.senderId === userId ? (
        <span className={styles.message__content__recipient}>
          {message.content}
        </span>
      ) : (
        <span className={styles.message__content__sender}>
          {message.content}
        </span>
      )}
    </div>
  );
};

export default Message;
