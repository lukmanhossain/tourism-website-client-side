import React, { useState } from "react";
import ManageOrders from "../../ManageOrders/ManageOrders";
import AddOffers from "../AddOffers/AddOffers";
import Services from "../Home/Services/Services";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [control, setControl] = useState("addServices");

  console.log(control);

  return (
    <div className="adminpanel-container">
      <div className="dashboard">
        <div className="row admin-container">
          <div className="col-md-2 ">
            <div className="dashboard-area mt-5 mx-4">
              <h6>Dashboard</h6>
              <div className="menubar mt-5">
                <li
                  onClick={() => setControl("addOffers")}
                  className="admin-menu p-2"
                >
                  Book Offers
                </li>

                <li
                  onClick={() => setControl("services")}
                  className="admin-menu p-2"
                >
                  Our All Offers
                </li>
                <li
                  onClick={() => setControl("manageOrders")}
                  className="admin-menu p-2"
                >
                  Manage Orders
                </li>
              </div>
            </div>
          </div>
          <div className="col-md-10 text-center  text-center">
            {control === "services" && <Services></Services>}
            {control === "manageOrders" && <ManageOrders></ManageOrders>}
            {control === "addOffers" && <AddOffers></AddOffers>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
