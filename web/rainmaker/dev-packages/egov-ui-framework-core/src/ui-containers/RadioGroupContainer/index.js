import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { prepareFinalObject } from "egov-ui-framework/ui-redux/screen-configuration/actions";
import get from "lodash/get";

const styles = theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    marginTop: 0,
    paddingBottom: 0
  },
  group: {
    display: "inline-block",
    margin: 0
  },
  radioRoot: {
    marginBottom: 12
  },
  formLabel: {
    fontSize: 12
  }
});

class RadioButtonsGroup extends React.Component {
  handleChange = event => {
    const {
      screenKey,
      componentJsonpath,
      jsonPath,
      approveCheck,
      onFieldChange
    } = this.props;
    onFieldChange(
      screenKey,
      componentJsonpath,
      "props.value",
      event.target.value
    );
  };

  render() {
    const {
      label,
      classes,
      buttons,
      defaultValue,
      value,
      fieldValue,
      required
    } = this.props;

    return (
      <div className={classes.root}>
        <FormControl
          component="fieldset"
          className={classes.formControl}
          required={required}
        >
          <FormLabel component="legend" className={classes.formLabel}>
            {label}
          </FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={value || fieldValue || defaultValue}
            onChange={this.handleChange}
          >
            {buttons &&
              buttons.map((button, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    value={button}
                    control={
                      <Radio className={classes.radioRoot} color="primary" />
                    }
                    label={button}
                  />
                );
              })}
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

const mapStateToProps = (state, ownprops) => {
  let fieldValue = "";
  const { screenConfiguration } = state;
  const { jsonPath } = ownprops;
  const { preparedFinalObject } = screenConfiguration;
  if (jsonPath) fieldValue = get(preparedFinalObject, jsonPath);
  return { preparedFinalObject, jsonPath, fieldValue };
};

const mapDispatchToProps = dispatch => {
  return {
    approveCheck: (jsonPath, value) => {
      dispatch(prepareFinalObject(jsonPath, value));
    }
  };
};

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(RadioButtonsGroup)
);
