import React from "react";
import { TableUi } from "components";
import { Card, Button } from "components";
import Label from "egov-ui-kit/utils/translationNode";

const columnData = [
  { id: "index", numeric: true, disablePadding: false, label: "S.No" },
  { id: "name", numeric: false, disablePadding: true, label: "Owner Name" },
  { id: "propertyId", numeric: false, disablePadding: false, label: "Property Tax Unique ID" },
  { id: "oldPropertyId", numeric: false, disablePadding: false, label: "Existing Property ID" },
  { id: "address", numeric: false, disablePadding: false, label: "Address" },
  { id: "action", numeric: false, disablePadding: false, label: "Action" },
];

const PropertyTable = ({ tableData, onActionClick }) => {
  return (
    <div className="form-without-button-cont-generic">
      <Card
        textChildren={
          <div>
            <Label
              label="PT_SEARCH_PROPERTY_TABLE_HEADERS"
              className="property-search-table-heading"
              labelStyle={{
                fontFamily: "Roboto",
                fontSize: "16px",
                fontWeight: 500,
                letterSpacing: "0px",
                textAlign: "center",
                color: "#484848",
              }}
            />
            <TableUi
              rowCheckBox={false}
              orderby={"index"}
              columnData={columnData}
              rowData={tableData}
              ActionOnRow={<Button className={"search-table-assess-pay-btn"} label="PT_PAYMENT_ASSESS_AND_PAY" onClick={onActionClick} />}
            />
          </div>
        }
      />
    </div>
  );
};

export default PropertyTable;
