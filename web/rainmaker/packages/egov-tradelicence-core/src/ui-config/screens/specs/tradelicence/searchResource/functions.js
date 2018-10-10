import get from "lodash/get";
import { handleScreenConfigurationFieldChange as handleField } from "mihy-ui-framework/ui-redux/screen-configuration/actions";
import { getSearchResults } from "mihy-ui-framework/ui-utils/commons";
import { convertEpochToDate, convertDateToEpoch } from "../../utils/index";
import { toggleSnackbarAndSetText } from "mihy-ui-framework/ui-redux/app/actions";

export const searchApiCall = async (state, dispatch) => {
  let queryObject = [
    { key: "tenantId", value: "pb.amritsar" },
    { key: "limit", value: "200" },
    { key: "offset", value: "0" }
  ];
  let searchScreenObject = get(
    state.screenConfiguration.preparedFinalObject,
    "searchScreen",
    {}
  );

  if (
    Object.keys(searchScreenObject).length == 0 ||
    Object.values(searchScreenObject).every(x => x === "")
  ) {
    dispatch(
      toggleSnackbarAndSetText(
        true,
        "Please fill at least one field to start search",
        "warning"
      )
    );
  } else if (
    (searchScreenObject["fromDate"] === undefined ||
      searchScreenObject["fromDate"].length === 0) &&
    searchScreenObject["toDate"] !== undefined &&
    searchScreenObject["toDate"].length !== 0
  ) {
    dispatch(
      toggleSnackbarAndSetText(true, "Please fill From Date", "warning")
    );
  } else {
    showHideTable(false, dispatch);
    showHideProgress(true, dispatch);
    for (var key in searchScreenObject) {
      if (
        searchScreenObject.hasOwnProperty(key) &&
        searchScreenObject[key] !== ""
      ) {
        if (key === "fromDate") {
          queryObject.push({
            key: key,
            value: convertDateToEpoch(searchScreenObject[key], "daystart")
          });
        } else if (key === "toDate") {
          queryObject.push({
            key: key,
            value: convertDateToEpoch(searchScreenObject[key], "dayend")
          });
        } else {
          queryObject.push({ key: key, value: searchScreenObject[key] });
        }
      }
    }

    const response = await getSearchResults(queryObject);
    try {
      let data = response.Licenses.map(item => ({
        "Application No": item.applicationNumber || "-",
        "License No": item.licenseNumber || "-",
        "Trade Name": item.tradeName || "-",
        "Owner Name": item.tradeLicenseDetail.owners[0].name || "-",
        "Application Date": convertEpochToDate(item.applicationDate) || "-",
        tenantId: item.tenantId,
        Status: item.status || "-"
      }));

      dispatch(
        handleField(
          "search",
          "components.div.children.searchResults",
          "props.data",
          data
        )
      );
      dispatch(
        handleField(
          "search",
          "components.div.children.searchResults",
          "props.title",
          `Search Results for Trade License Applications (${
            response.Licenses.length
          })`
        )
      );
      showHideProgress(false, dispatch);
      showHideTable(true, dispatch);
    } catch (error) {
      showHideProgress(false, dispatch);
      dispatch(toggleSnackbarAndSetText(true, error.message, "error"));
      console.log(error);
    }
  }
};
const showHideProgress = (booleanHideOrShow, dispatch) => {
  dispatch(
    handleField(
      "search",
      "components.div.children.progressStatus",
      "visible",
      booleanHideOrShow
    )
  );
};

const showHideTable = (booleanHideOrShow, dispatch) => {
  dispatch(
    handleField(
      "search",
      "components.div.children.searchResults",
      "visible",
      booleanHideOrShow
    )
  );
};
