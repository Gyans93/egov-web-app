import React, { Component } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { prepareFinalObject } from "egov-ui-framework/ui-redux/screen-configuration/actions";
import { handleScreenConfigurationFieldChange as handleField } from "egov-ui-framework/ui-redux/screen-configuration/actions";
import Switch from "../../ui-atoms-local/Switch";
import get from "lodash/get";
import { connect } from "react-redux";
import "./index.css";

class SwitchWithLabel extends Component {
  onSwitchChange = (event, checked) => {
    const {
      screenConfig,
      compJPath,
      multiItems,
      screenKey,
      handleField
    } = this.props;

    if (compJPath) {
      if (multiItems.length > 0) {
        for (var i = 0; i < multiItems.length; i++) {
          if (
            get(
              screenConfig[screenKey],
              `${compJPath}[${i}].item${i}.children.cardContent.children.asmtDetailsCardContainer.children.currentAssignment.props.value`
            ) === true
          ) {
            handleField(
              screenKey,
              `${compJPath}[${i}].item${i}.children.cardContent.children.asmtDetailsCardContainer.children.currentAssignment`,
              "props.value",
              false
            );
          }
        }
      }
    }
    this.props.onChange({ target: { value: event.target.checked } });
    // prepareFinalObject(jsonPath, event.target.checked);
  };

  render() {
    const { items, FormControlProps, SwitchProps, value } = this.props;
    return (
      <FormGroup>
        {items.map((item, index) => {
          return (
            <FormControlLabel
              className={"form-control-switch"}
              key={`form-${index}`}
              control={
                <Switch
                  checked={value || false}
                  value={value || false}
                  onChange={event => this.onSwitchChange(event)}
                  {...SwitchProps}
                />
              }
              label={item.label}
              {...FormControlProps}
            />
          );
        })}
      </FormGroup>
    );
  }
}

const mapStateToProps = (state, ownprops) => {
  const { screenConfiguration } = state;
  const { screenConfig } = screenConfiguration;
  const { value, screenKey, compJPath } = ownprops;
  const multiItems = get(screenConfig[screenKey], compJPath, []);
  return { checked: value, multiItems, screenConfig };
};

const mapDispatchToProps = dispatch => {
  return {
    prepareFinalObject: (path, value) =>
      dispatch(prepareFinalObject(path, value)),
    handleField: (screenKey, componentJSONPath, property, value) =>
      dispatch(handleField(screenKey, componentJSONPath, property, value))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwitchWithLabel);
