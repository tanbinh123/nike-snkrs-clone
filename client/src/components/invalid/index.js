import styles from "./invalid.module.scss";

const Invalid = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>404 Error</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/launch">
          <button>Return to Home</button>
        </a>
      </div>
    </div>
  );
};

export default Invalid;
