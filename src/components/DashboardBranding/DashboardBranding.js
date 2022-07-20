import React from "react";
import eShopLogo from "../../asset/logo/1.png";
import "./DashboardBranding.css";

export default function DashboardBranding() {
  return (
    <div>
      <div className="d-flex dashboard-main-header">
        <div>
          <img
            className="dashboard-left-side-logo"
            src={eShopLogo}
            alt="eShop logo"
          />
        </div>
        <div className="">
          <div className="d-flex flex-column mb-3 Dashboard-header">
            <div>Dashboard</div>
            <div>Admin</div>
          </div>
        </div>
      </div>
      <div>
        <hr className="m-0 header-hr"></hr>
      </div>
    </div>
  );
}
