import React from "react";
import DashboardBranding from "../../components/DashboardBranding/DashboardBranding";
import DashboardOptionSelection from "../../components/DashboardOptionSelection/DashboardOptionSelection";

export default function OptionBar({ clickOption }) {
  return (
    <div className="p-3">
      <DashboardBranding></DashboardBranding>
      <DashboardOptionSelection></DashboardOptionSelection>
    </div>
  );
}
