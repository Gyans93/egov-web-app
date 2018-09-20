const themeObject = {
  palette: {
    primary: {
      main: "#FE7A51",
      dark: "#FE7A51",
      contrastText: "#fff"
    },
    secondary: {
      main: "#fff",
      contrastText: "#000"
    },
    background: {
      default: "#F4F7FB"
    }
  },
  overrides: {
    MuiDivider: {
      root: {
        marginBottom: "24px",
        marginTop: "24px"
      }
    },
    MuiStepper: {
      root: {
        paddingBottom: "0px"
      }
    },
    MuiGrid: {
      item: {
        // Name of the rule
        padding: "12px 24px 12px 0" // Some CSS
      }
    },
    MuiCard: {
      root: {
        marginTop: "24px"
      }
    },
    MuiTypography: {
      title: {
        color: "rgba(0, 0, 0, 0.87)",
        fontFamily: "Roboto",
        fontSize: "20px",
        fontWeight: 400,
        letterSpacing: "0.83px",
        lineHeight: "24px"
      },
      body1: {
        color: "rgba(0, 0, 0, 0.60)",
        fontFamily: "Roboto",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "20px",
        marginBottom: "12px"
      },
      body2: {
        color: "rgba(0, 0, 0, 0.87)",
        fontFamily: "Roboto",
        fontSize: "16px",
        fontWeight: 400,
        letterSpacing: "0.67px",
        lineHeight: "19px"
      },
      subheading: {
        color: "rgba(0, 0, 0, 0.87)",
        fontFamily: "Roboto",
        fontSize: "18px",
        letterSpacing: "0.75px",
        fontWeight: 400,
        lineHeight: "20px"
      }
    }
  }
};

export default themeObject;