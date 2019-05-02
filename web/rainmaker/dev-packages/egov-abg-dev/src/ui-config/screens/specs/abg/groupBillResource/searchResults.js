import React from "react";
import { Link } from "react-router-dom";
import get from "lodash/get";
import { sortByEpoch, getEpochForDate } from "../../utils";
import { getLocalization } from "egov-ui-kit/utils/localStorageUtils";
import {Button, Icon} from "egov-ui-framework/ui-atoms";
import{DownloadIcon} from "ui-atoms-local";
import {httpRequest} from "egov-ui-framework/ui-utils/api.js";
import { localStorageGet } from "egov-ui-kit/utils/localStorageUtils";

const getLocalTextFromCode = localCode => {
  return JSON.parse(getLocalization("localization_en_IN")).find(
    item => item.code === localCode
  );
};

const getConsumerDetail= (propertyResponse)=>{

  return {
    propertyId:get(propertyResponse, "Properties[0].propertyId", "NA"),
    name:get(propertyResponse,"Properties[0].propertyDetails[0].owners[0].name","NA"),
    mobileno:get(propertyResponse,"Properties[0].propertyDetails[0].owners[0].mobileNumber","NA"),
    address:get(propertyResponse,"Properties[0].address.city","NA"),
    locality:get(propertyResponse,"Properties[0].address.locality.name","NA"),
  }
  
}

// const getBillDetails=()=>
// {
//   return{



//   }

// }

const onDownloadClick = async (rowData) => {
  console.log(rowData);
  const queryObject1 = [
    {
      key: "ids",
      value:rowData["Property ID"]
    },

    {
     key:"tenantId",
     value:localStorageGet("tenant-id")
    }
  ];
  const queryObject2 = [
    {
      key: "consumerCode",
      value:rowData["Assessment number"]
    },

    {
     key:"tenantId",
     value:localStorageGet("tenant-id")
    }
  ];

  const propertyendpoint="/pt-services-v2/property/_search";
  const propertyResponse= await httpRequest(
   "post",
    propertyendpoint,
    "",
    queryObject1
    )
  console.log(propertyResponse); 

    const billendpoint="/collection-services-v1/receipts/_search";
    const billResponse= await httpRequest(
   "post",
   billendpoint,
   "",
   queryObject2

 )
  console.log(billResponse);

 const consumerDetails = getConsumerDetail(
    propertyResponse
  )
  console.log(consumerDetails);
 }
//   const billDetails=getBillDetails(
//     billResponse

// )
// console.log(billDetails);


export const textToLocalMapping = {
  "Property ID": get(
    getLocalTextFromCode("NOC_COMMON_TABLE_COL_APP_NO"),
    "message",
    "Property ID"
  ),
  "Assessment No": get(
    getLocalTextFromCode("NOC_COMMON_TABLE_COL_NOC_NO"),
    "message",
    "Assessment No"
  ),
  "Owner Name": get(
    getLocalTextFromCode("NOC_COMMON_TABLE_COL_OWN_NAME"),
    "message",
    "Owner Name"
  ),
  "Date Created": get(
    getLocalTextFromCode("NOC_COMMON_TABLE_COL_APP_DATE"),
    "message",
    "Date Created"
  ),
  "Download Button": get(
    getLocalTextFromCode("NOC_COMMON_TABLE_COL_DN_BUTTON"),
    "message",
    "Download"
  ),
 //Download button
};

export const searchResults = {
  uiFramework: "custom-molecules",
  // moduleName: "egov-tradelicence",
  componentPath: "Table",
  visible: false,
  props: {
    // data: [],
    columns: {
      [get(textToLocalMapping, "Property ID")]: {
        format: rowData => {
          return (
            <Link to={onRowClick(rowData)}>
              <span
                style={{
                  color: "#FE7A51"
                }}
              >
                {rowData[get(textToLocalMapping, "Property ID")]}
              </span>
            </Link>
          );
        }
      },
      [get(textToLocalMapping, "Assessment No")]: {},
      [get(textToLocalMapping, "Owner Name")]: {},
      [get(textToLocalMapping, "Date Created")]: {},
      [get(textToLocalMapping, "")]: {
        format: rowData => {
          return (
            <Button color= "primary"
            primary={true} onClick = {() => onDownloadClick(rowData)}>
            <DownloadIcon fill="#FE7A51" />
              {get(textToLocalMapping, "Download Button")} 
              
            </Button>
          );
        }
      },

    },
    options: {
      filter: false,
      download: false,
      responsive: "stacked",
      selectableRows: false,
      hover: true,
      rowsPerPageOptions: [10, 15, 20]
    },
    customSortColumn: {
      column: "Date Created",
      sortingFn: (data, i, sortDateOrder) => {
        const epochDates = data.reduce((acc, curr) => {
          acc.push([...curr, getEpochForDate(curr[4], "dayend")]);
          return acc;
        }, []);
        const order = sortDateOrder === "asc" ? true : false;
        const finalData = sortByEpoch(epochDates, !order).map(item => {
          item.pop();
          return item;
        });
        return { data: finalData, currentOrder: !order ? "asc" : "desc" };
      }
    }
  }
};

const onRowClick = rowData => {
  switch (rowData[get(textToLocalMapping, "")]) {
    default:
      return `/abg/groupBills`;
  }
};
