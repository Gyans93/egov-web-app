import React from "react";
import { Link } from "react-router-dom";
import get from "lodash/get";
import { getLocalization } from "egov-ui-kit/utils/localStorageUtils";

const getLocalTextFromCode = localCode => {
  return JSON.parse(getLocalization("localization_en_IN")).find(
    item => item.code == localCode
  );
};

export const textToLocalMapping = {
  "Employee ID": get(
    getLocalTextFromCode("HR_COMMON_TABLE_COL_EMP_ID"),
    "message",
    "Employee ID"
  ),
  Name: get(
    getLocalTextFromCode("HR_COMMON_TABLE_COL_NAME"),
    "message",
    "Name"
  ),
  Role: get(
    getLocalTextFromCode("HR_COMMON_TABLE_COL_ROLE"),
    "message",
    "Role"
  ),
  Designation: get(
    getLocalTextFromCode("HR_COMMON_TABLE_COL_DESG"),
    "message",
    "Designation"
  ),
  Department: get(
    getLocalTextFromCode("HR_COMMON_TABLE_COL_DEPT"),
    "message",
    "Department"
  ),
  "Search Results for Employee": get(
    getLocalTextFromCode("HR_HOME_SEARCH_RESULTS_TABLE_HEADING"),
    "message",
    "Search Results for Employee"
  ),
  "Tenant ID": get(
    getLocalTextFromCode("HR_COMMON_TABLE_COL_TENANT_ID"),
    "message",
    "Tenant ID"
  )
};

const selectToolbarStyle = {
  display: "flex",
  alignItems: "center",
  padding: "0 10px"
};

export const searchResults = {
  uiFramework: "custom-molecules-local",
  moduleName: "egov-hrms",
  componentPath: "Table",
  visible: false,
  props: {
    data: [],
    columns: {
      [get(textToLocalMapping, "Employee ID")]: {
        format: rowData => {
          return (
            <Link to={onRowClick(rowData)}>
              <span
                style={{
                  color: "#FE7A51"
                }}
              >
                {rowData[get(textToLocalMapping, "Employee ID")]}
              </span>
            </Link>
          );
        }
      },
      [get(textToLocalMapping, "Name")]: {},
      [get(textToLocalMapping, "Role")]: {},
      [get(textToLocalMapping, "Designation")]: {},
      [get(textToLocalMapping, "Department")]: {},
      [get(textToLocalMapping, "Tenant ID")]: {}
    },
    title: get(textToLocalMapping, "Search Results for Employee")
    // customSortColumn: {
    //   column: "Application Date",
    //   sortingFn: (data, i, sortDateOrder) => {
    //     const epochDates = data.reduce((acc, curr) => {
    //       acc.push([...curr, getEpochForDate(curr[4], "dayend")]);
    //       return acc;
    //     }, []);
    //     const order = sortDateOrder === "asc" ? true : false;
    //     const finalData = sortByEpoch(epochDates, !order).map(item => {
    //       item.pop();
    //       return item;
    //     });
    //     return { data: finalData, currentOrder: !order ? "asc" : "desc" };
    //   }
    // }
  }
};

const onRowClick = rowData => {
  let viewEmployeeUrl =
    process.env.REACT_APP_SELF_RUNNING === "true"
      ? "/egov-ui-framework/hrms/view"
      : "/hrms/view";
  return `${viewEmployeeUrl}?employeeID=${
    rowData[get(textToLocalMapping, "Employee ID")]
  }&tenantId=${rowData[get(textToLocalMapping, "Tenant ID")]}`;
};
