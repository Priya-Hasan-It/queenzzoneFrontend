import ClassIcon from "@mui/icons-material/Class";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EditRoadIcon from "@mui/icons-material/EditRoad";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./DashboardOptionselection.css";

export default function DashboardOptionSelection() {
  // useParam for option name
  let { optionName } = useParams();

  const navigate = useNavigate();

  return (
    <div className="mt-4">
      <div>
        <div className="d-flex optionIconAndText">
          <div>
            <ShoppingBasketIcon
              className={optionName === "Order List" && "selectionColor"}
            ></ShoppingBasketIcon>
          </div>
          <div
            className={
              optionName === "Order List"
                ? "px-5 trans selectionColor"
                : "px-2 trans"
            }
          >
            <span onClick={() => navigate("/dashboard/Order List")}>Order</span>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          {" "}
          <hr className="m-2 optionHr" />
        </div>
      </div>

      <div>
        <div className="d-flex optionIconAndText">
          <div>
            <ShoppingCartCheckoutIcon
              className={optionName === "Add Product" ? "selectionColor" : ""}
            ></ShoppingCartCheckoutIcon>
          </div>
          <div
            className={
              optionName === "Add Product"
                ? "px-4 mx-3 trans selectionColor"
                : "px-2 trans"
            }
          >
            <span onClick={() => navigate("/dashboard/Add Product")}>
              Add Product
            </span>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          {" "}
          <hr className="m-2 optionHr" />
        </div>
      </div>
      <div>
        <div className="d-flex optionIconAndText">
          <div>
            <EditRoadIcon
              className={optionName === "Edit Product" ? "selectionColor" : ""}
            ></EditRoadIcon>
          </div>
          <div
            className={
              optionName === "Edit Product"
                ? "px-4 mx-3 trans selectionColor"
                : "px-2 trans"
            }
          >
            <span onClick={() => navigate("/dashboard/Edit Product")}>
              Edit Product
            </span>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          {" "}
          <hr className="m-2 optionHr" />
        </div>
      </div>
      <div>
        <div className="d-flex optionIconAndText">
          <div>
            <ClassIcon
              className={optionName === "Add Category" ? "selectionColor" : ""}
            >
              {" "}
            </ClassIcon>
          </div>
          <div
            className={
              optionName === "Add Category"
                ? "px-4 mx-2 trans selectionColor"
                : "px-2 trans"
            }
          >
            <span onClick={() => navigate("/dashboard/Add Category")}>
              Add Category
            </span>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          {" "}
          <hr className="m-2 optionHr" />
        </div>
      </div>
      <div>
        <div className="d-flex optionIconAndText">
          <div>
            <DashboardIcon
              className={
                optionName === "Components Layout" ? "selectionColor" : ""
              }
            ></DashboardIcon>
          </div>
          <div
            className={
              optionName === "Components Layout"
                ? "px-5 trans selectionColor"
                : "px-2 trans"
            }
          >
            <span onClick={() => navigate("/dashboard/Components Layout")}>
              Layout
            </span>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          {" "}
          <hr className="m-2 optionHr" />
        </div>
      </div>
      <div>
        <div className="d-flex optionIconAndText">
          <div>
            <ShowChartIcon
              className={optionName === "Product Stock" ? "selectionColor" : ""}
            >
              {" "}
            </ShowChartIcon>
          </div>
          <div
            className={
              optionName === "Product Stock"
                ? "px-4 mx-2 trans selectionColor"
                : "px-2 trans"
            }
          >
            <span onClick={() => navigate("/dashboard/Product Stock")}>
              Product Stock
            </span>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          {" "}
          <hr className="m-2 optionHr" />
        </div>
      </div>
      <div>
        <div className="d-flex optionIconAndText">
          <div>
            <SupervisorAccountIcon
              className={optionName === "Role Control" ? "selectionColor" : ""}
            ></SupervisorAccountIcon>
          </div>
          <div
            className={
              optionName === "Role Control"
                ? "px-4 mx-2 trans selectionColor"
                : "px-2 trans"
            }
          >
            <span onClick={() => navigate("/dashboard/Role Control")}>
              Role Control
            </span>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          {" "}
          <hr className="m-2 optionHr" />
        </div>
      </div>
      <div>
        <div className="d-flex optionIconAndText">
          <div>
            <SettingsIcon
              className={optionName === "Settings" ? "selectionColor" : ""}
            ></SettingsIcon>
          </div>
          <div
            className={
              optionName === "Settings"
                ? "px-4 mx-2 trans selectionColor"
                : "px-2 trans"
            }
          >
            <span onClick={() => navigate("/dashboard/Settings")}>
              Settings
            </span>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          {" "}
          <hr className="m-2 optionHr" />
        </div>
      </div>
    </div>
  );
}
