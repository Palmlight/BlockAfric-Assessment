import React from "react"
import "../styles/index.scss"
import LocalHospitalIcon from "@material-ui/icons/LocalHospital"

const Index = () => {
  return (
    <>
      <div className="card">
        <div className="card-details">
          <div className="avatar">
            <h1>AFYA</h1>
          </div>
          <h1 className="title">143.00</h1>
          <p className="balance">Balance</p>
        </div>

        <div className="divider"></div>

        <div className="card-details">
          <div className="avatar">
            <h1>ZAR</h1>
          </div>
          <h1 className="title">R21.00</h1>
          <p className="balance">Equivalent</p>
        </div>
      </div>

      <div className="grey-row">
        <p className="currency">Select Currency</p>
      </div>

      <form>
        <select>
          <option>ARY</option>
          <option>ZAR</option>
        </select>

        <input type="text" />
      </form>

      <div className="buttons">
        <button className="btn">Send</button>
        <button className="btn">Receive</button>
      </div>

      <div className="grey-row">
        <p className="recent">Recent Activity</p>
      </div>

      <div className="activity">
        <div className="activity-image">
          <LocalHospitalIcon />
        </div>
        <div className="activity-details">HIV Blood Draw Test</div>
        <div className="activity-price">A30</div>
      </div>

      <div className="activity">
        <div className="activity-image">
          <LocalHospitalIcon />
        </div>
        <div className="activity-details">HIV Blood Draw Test</div>
        <div className="activity-price">A100</div>
      </div>

      <div className="activity">
        <div className="activity-image">
          <LocalHospitalIcon />
        </div>
        <div className="activity-details">Blood Pressure Check</div>
        <div className="activity-price">A10</div>
      </div>

      <div className="grey-row"></div>
    </>
  )
}

export default Index
