import styles from "./Auth.module.css";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";
import { isAuthProps } from "./types";

/**
 * Страница авторизации / регистрации.
 *
 * @param {boolean} isRegistration - Флаг, определяющий, является ли страница регистрацией (true) или авторизацией (false).
 */
const Auth: React.FC<isAuthProps> = ({
  isRegistration = true,
}: isAuthProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      {isRegistration ? <Registration /> : <Login />}
    </div>
  );
};

export default Auth;
