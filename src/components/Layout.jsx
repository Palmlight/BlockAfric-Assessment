import React from "react"
import "../styles/layout.scss"
import BusinessIcon from "@material-ui/icons/Business"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import NotificationsIcon from "@material-ui/icons/Notifications"
import HomeIcon from "@material-ui/icons/Home"
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet"
import LocalActivityIcon from "@material-ui/icons/LocalActivity"
import NaturePeopleIcon from "@material-ui/icons/NaturePeople"
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn"
import { Link } from "react-router-dom"

const Layout = ({ children }) => {
  return (
    <main className="layout">
      <div className="inner-container">
        <nav className="nav">
          <div className="flex-row">
            <BusinessIcon classes={{ root: "icons" }} />
            <h1 className="company-name">ribbon</h1>
          </div>

          <div className="flex-row">
            <AccountCircleIcon classes={{ root: "icons" }} />
            <NotificationsIcon classes={{ root: "icon" }} />
          </div>
        </nav>

        <div>{children}</div>

        <footer className="footer">
          <Link className="footer-link" to="/">
            <HomeIcon />
            <p>Home</p>
          </Link>

          <Link className="footer-link" to="/activity">
            <LocalActivityIcon />
            <p>Activity</p>
          </Link>

          <Link className="footer-link" to="/wallet">
            <AccountBalanceWalletIcon />
            <p>Wallet</p>
          </Link>

          <Link className="footer-link" to="/market">
            <NaturePeopleIcon />
            <p>Market</p>
          </Link>

          <Link className="footer-link" to="/earn">
            <MonetizationOnIcon />
            <p>Earn</p>
          </Link>
        </footer>
      </div>
    </main>
  )
}

export default Layout
