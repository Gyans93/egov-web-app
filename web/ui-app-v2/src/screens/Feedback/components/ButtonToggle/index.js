import React from "react";
import "./index.css";
import { ButtonGroup } from "../../../../components";

const selectedLabelStyle = {
  color: "#ffffff",
  fontSize: "14.5px",
  letterSpacing: "0.7px",
  padding: "0 14px",
};

const selectedStyle = {
  backgroundColor: "#f5a623",
};

const defaultStyle = {
  border: "1px solid #f5a623",
  borderRadius: "3px",
  marginRight: "4.44%",
  height: "auto",
  lineHeight: "30px",
  backgroundColor: "transparent",
};

const defaultLabelStyle = {
  textTransform: "none",
  fontWeight: "500",
  color: "#484848",
  fontSize: "14.5px",
  letterSpacing: "0.7px",
  padding: "0 14px",
};

const ButtonToggleComponent = ({ items, onClick, selected }) => {
  return (
    <ButtonGroup
      items={items}
      onClick={onClick}
      selected={selected}
      defaultStyle={defaultStyle}
      defaultLabelStyle={defaultLabelStyle}
      selectedStyle={selectedStyle}
      selectedLabelStyle={selectedLabelStyle}
      multiple={true}
    />
  );
};

export default ButtonToggleComponent;
