import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import styles from "./Header.module.sass";
import CONSTANTS from "../../constants";
import jsonData from './data'
import {
  getUserAction,
  clearUserStore,
  headerRequest,
} from "../../actions/actionCreator";
import HeadrList from "./HeaderList";



class Header extends React.Component {
  componentDidMount() {
    if (!this.props.data) {
      this.props.getUser();
    }
  }

  logOut = () => {
    localStorage.clear();
    this.props.clearUserStore();
    this.props.history.replace("/login");
  };

  startContests = () => {
    this.props.history.push("/startContest");
  };

  heandelClickLogo = (e) => {
    this.props.history.replace("/");
  };

  renderLoginButtons = () => {
    if (this.props.data) {
      return (
        <>
          <div className={styles.userInfo}>
            <img
              src={
                this.props.data.avatar === "anon.png"
                  ? CONSTANTS.ANONYM_IMAGE_PATH
                  : `${CONSTANTS.publicURL}${this.props.data.avatar}`
              }
              alt="user"
            />
            <span>{`Hi, ${this.props.data.displayName}`}</span>
            <img
              src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
              alt="menu"
            />
            <ul>
              <li>
                <Link to="/dashboard" style={{ textDecoration: "none" }}>
                  <span>View Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/account" style={{ textDecoration: "none" }}>
                  <span>My Account</span>
                </Link>
              </li>
              <li>
                <Link
                  to="http:/www.google.com"
                  style={{ textDecoration: "none" }}
                >
                  <span>Messages</span>
                </Link>
              </li>
              <li>
                <Link
                  to="http:/www.google.com"
                  style={{ textDecoration: "none" }}
                >
                  <span>Affiliate Dashboard</span>
                </Link>
              </li>
              <li>
                <span onClick={this.logOut}>Logout</span>
              </li>
            </ul>
          </div>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}email.png`}
            className={styles.emailIcon}
            alt="email"
          />
        </>
      );
    }
    return (
      <>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <span className={styles.btn}>LOGIN</span>
        </Link>
        <Link to="/registration" style={{ textDecoration: "none" }}>
          <span className={styles.btn}>SIGN UP</span>
        </Link>
      </>
    );
  };

  render() {
    if (this.props.isFetching) {
      return null;
    }
    return (
      <div className={styles.headerContainer}>
        <div className={styles.fixedHeader}>
          <span className={styles.info}>
            Squadhelp recognized as one of the Most Innovative Companies by Inc
            Magazine.
          </span>
          <a href="http://www.google.com">Read Announcement</a>
        </div>
        <div className={styles.loginSignnUpHeaders}>
          <div className={styles.numberContainer}>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}phone.png`} alt="phone" />
            <a href="tel:+8773553585">(877)&nbsp;355-3585</a>
          </div>
          <div className={styles.userButtonsContainer}>
            {this.renderLoginButtons()}
          </div>
        </div>
        <div className={styles.navContainer}>
          <img
            src={`${CONSTANTS.STATIC_IMAGES_PATH}blue-logo.png`}
            className={styles.logo}
            alt="blue_logo"
            onClick={this.heandelClickLogo}
          />
          <div className={styles.leftNav}>
            <div className={styles.nav}>
              <ul>
                <li>
                  <span>Name ideas</span>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                    alt="menu"
                  />

                  <HeadrList  obj={jsonData.navigationLists[0]} />
                </li>
                <li>
                  <span>Contest</span>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                    alt="menu"
                  />
                  
                  <HeadrList  obj={jsonData.navigationLists[1]} />
                 
                </li>
                <li>
                  <span>Our work</span>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                    alt="menu"
                  />
                  <HeadrList  obj={jsonData.navigationLists[2]} />
                </li>
                <li>
                  <span>Names for sale</span>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                    alt="menu"
                  />
                     <HeadrList  obj={jsonData.navigationLists[3]} />
                 
                </li>
                <li>
                  <span>Blog</span>
                  <img
                    src={`${CONSTANTS.STATIC_IMAGES_PATH}menu-down.png`}
                    alt="menu"
                  /><HeadrList  obj={jsonData.navigationLists[4]} />
                </li>
              </ul>
            </div>
            {this.props.data && this.props.data.role !== CONSTANTS.CREATOR && (
              <div
                className={styles.startContestBtn}
                onClick={this.startContests}
              >
                START CONTEST
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state.userStore;
const mapDispatchToProps = (dispatch) => ({
  getUser: () => dispatch(headerRequest()),
  clearUserStore: () => dispatch(clearUserStore()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
