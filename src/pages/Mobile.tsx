import { FunctionComponent, useCallback } from "react";
import styles from "./Mobile.module.css";
const Mobile: FunctionComponent = () => {
  const onButtonClick = useCallback(() => {
    window.open("https://buy.stripe.com/00g14igsO7j4dry144");
  }, []);

  return (
    <div className={styles.mobile}>
      <div className={styles.title}>
        <div className={styles.sentence1}>
          <div className={styles.pocketpal}>PocketPal</div>
        </div>
      </div>
      <video className={styles.pocketpaldemov11} controls autoPlay muted loop>
        <source src="/pocketpaldemov12.mp4" />
      </video>
      <button className={styles.button} autoFocus onClick={onButtonClick}>
        <div className={styles.startNow}>Start Now</div>
      </button>
      <div className={styles.haveThePowerContainer}>
        <p
          className={styles.haveThePower}
        >{`Have the power of ChatGPT at your fingertips—no more waiting in the queue. `}</p>
        <p className={styles.haveThePower}>&nbsp;</p>
        <p className={styles.haveThePower}>
          Simply, send a text and get a response in less than a minute.
        </p>
      </div>
    </div>
  );
};

export default Mobile;
