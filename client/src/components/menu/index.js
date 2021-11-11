import styles from "./menu.module.scss";
import { NavLink } from "react-router-dom";

const Menu = () => (
  <div className={styles.container}>
    <div className={styles.header}>
      <div className={styles.user}>
        <img
          className={styles.profilePic}
          src="/images/profile-pic.jpeg"
          alt="profile-pic"
        />
        <span>Michael Jordan</span>
      </div>
      <div className={styles.info}>
        <div>Help</div>
        <img src="/images/cart-icon.svg" alt="cart" />
      </div>
      <div className={styles.location}>
        <img src="/images/location-icon.svg" alt="location" />
        <span>Canada</span>
      </div>
    </div>
    <div className={styles.navbar}>
      <a className={styles.logo} href="/launch">
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <ul className={styles.nav}>
        <li>
          <NavLink to="/launch" activeClassName="active">
            Feed
          </NavLink>
        </li>
        <li>
          <NavLink to="/in-stock" activeClassName="active">
            In Stock
          </NavLink>
        </li>
        <li>
          <NavLink to="/upcoming" activeClassName="active">
            Upcoming
          </NavLink>
        </li>
      </ul>
      <img className={styles.gridIcon} src="/images/grid-sm.svg" alt="logo" />
    </div>
  </div>
);

export default Menu;
