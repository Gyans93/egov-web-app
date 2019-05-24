import React from "react";
import SvgIcon from "material-ui/SvgIcon";

const CityOutline = (props) => {
  return (
    <SvgIcon className="custom-icon" viewBox="0 -8 24 24" {...props}>
      <path d="M0,21V10L7.5,5L15,10V21H10V14H5V21H0M24,2V21H17V8.93L16,8.27V6H14V6.93L10,4.27V2H24M21,14H19V16H21V14M21,10H19V12H21V10M21,6H19V8H21V6Z" />
    </SvgIcon>
  );
};

export default CityOutline;
