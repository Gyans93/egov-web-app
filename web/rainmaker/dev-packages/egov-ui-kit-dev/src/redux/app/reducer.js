import * as actionTypes from "./actionTypes";
import { initLocalizationLabels } from "./utils";
import { stat } from "fs";

const locale = window.localStorage.getItem("locale") || "en_IN";
const localizationLabels = initLocalizationLabels(locale);

const initialState = {
  name: "Mseva",
  showMenu: false,
  showActionMenu: true,
  showDailog: false,
  route: "",
  locale,
  urls: [],
  menu: "",
  bottomNavigationIndex: 0,
  previousRoute: "",
  toast: {
    message: "",
    open: false,
    error: true,
  },
  localizationLabels,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_LOCALIZATION:
      return {
        ...state,
        locale: action.locale,
        localizationLabels: action.localizationLabels,
      };
    case actionTypes.CHANGE_BOTTOM_NAVIGATION_INDEX:
      return {
        ...state,
        bottomNavigationIndex: action.bottomNavigationIndex,
      };
    case actionTypes.SET_ROUTE:
      return { ...state, previousRoute: action.route ? window.location.pathname : state.previousRoute, route: action.route };
    case actionTypes.SHOW_TOAST:
      return {
        ...state,
        toast: {
          message: action.message,
          open: action.open,
          error: action.error,
        },
      };
    case actionTypes.SET_USER_CURRENT_LOCATION:
      return { ...state, currentLocation: action.currentLocation };
    case actionTypes.FETCH_ACTIONMENU:
      return { ...state, menu: action.payload };

    case actionTypes.ADD_BREADCRUMB_ITEM:
      if (process.env.NODE_ENV !== "development" && action.url && action.url.title !== "" && action.url.path !== "") {
        action.url.path = action.url.path && action.url.path.split("/citizen").pop();
      }

      localStorage.setItem("path", action.url.path);
      const index = state.urls.findIndex((url) => {
        return url.title === action.url.title;
      });
      const url =
        window.location.pathname && window.location.pathname.split("/").pop() === "property-tax"
          ? []
          : index > -1
          ? state.urls.splice(index, 1)
          : [...state.urls, action.url];
      localStorage.setItem("breadCrumbObject", JSON.stringify(url));
      return { ...state, urls: url };
    case actionTypes.FETCH_EXTERNAL_URLS: {
      return { ...state, routesData: action.payload };
    }
    default:
      return state;
  }
};
export default appReducer;
