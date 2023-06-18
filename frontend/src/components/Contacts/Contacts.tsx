import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Мои контакты: (тык)</h1>

      <div className={styles.wrapperContacts}>
        <p>
          <a href="https://t.me/tm_sheva" className={styles.link}>
            telegram: @tm_sheva
          </a>
        </p>
        <p>
          <a href="https://vk.com/tmsheva" className={styles.link}>
            vkontakte: tmsheva
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contacts;
