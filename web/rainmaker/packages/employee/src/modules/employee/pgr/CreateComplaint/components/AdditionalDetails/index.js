import React from "react";
import { Card, TextField } from "components";

const AdditionalDetailsCard = ({ additionalDetails = {}, handleFieldChange }) => {
  return (
    <div className="additional-details-main-cont">
      <TextField
        id="addComplaint-additional-details"
        {...additionalDetails}
        onChange={(e, value) => handleFieldChange("additionalDetails", value)}
        name="additional-details"
        multiLine={true}
      />
    </div>
  );
};

export default AdditionalDetailsCard;
