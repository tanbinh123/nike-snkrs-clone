import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.directory}>
            <ul>
              <li className={styles.main}>Find a store</li>
              <li className={styles.main}>Sign up for email</li>
              <li className={styles.main}>Become a member</li>
              <li className={styles.main}>Feedback</li>
            </ul>
            <ul>
              <li className={styles.main}>Get Help</li>
              <li>Order Status</li>
              <li>Shipping and Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Contact Us</li>
            </ul>
            <ul>
              <li className={styles.main}>About Nike</li>
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Sustainability</li>
            </ul>
          </div>
          <div className={styles.socials}>
            <img src="/images/tw-icon.svg" alt="twitter" />
            <img src="/images/fb-icon.svg" alt="facebook" />
            <img src="/images/yt-icon.svg" alt="youtube" />
            <img src="/images/ig-icon.svg" alt="instagram" />
          </div>
        </div>
        <div className={styles.legal}>
          <div className={styles.credits}>
            <span>
              Clone by <a href="https://www.github.com/kareemelgendy">Kareem</a>
            </span>
          </div>
          <div className={styles.otherLinks}>
            <span>Guides</span>
            <span>Terms of Use</span>
            <span>Terms of Sale</span>
            <span>Company Details</span>
            <span>Privacy &amp; Cookie Policy</span>
            <span>Cookie Settings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
