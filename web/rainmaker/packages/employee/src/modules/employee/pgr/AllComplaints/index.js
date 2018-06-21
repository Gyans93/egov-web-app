import React, { Component } from "react";
import { Tabs, Card, TextField, Icon, Button } from "components";
import FloatingActionButton from "material-ui/FloatingActionButton";
import { Screen } from "modules/common";
import { Complaints } from "modules/common";
import { fetchComplaints } from "egov-ui-kit/redux/complaints/actions";
import Label from "egov-ui-kit/utils/translationNode";
import { transformComplaintForComponent } from "egov-ui-kit/utils/commons";
import { connect } from "react-redux";
import orderby from "lodash/orderBy";
import "./index.css";

class AllComplaints extends Component {
  state = {
    complaintNo: "",
    mobileNo: "",
    complaints: [],
  };
  componentDidMount() {
    let { fetchComplaints } = this.props;
    fetchComplaints([{ key: "status", value: "assigned,open,reassignrequested" }]);
    // fetchComplaints();
  }

  onComplaintClick = (complaintNo) => {
    this.props.history.push(`/employee/complaint-details/${complaintNo}`);
  };

  onComplaintChange = (e) => {
    const inputValue = e.target.value;
    this.setState({ complaintNo: inputValue });
  };

  onMobileChange = (e) => {
    const inputValue = e.target.value;
    this.setState({ mobileNo: inputValue });
  };

  onSearch = () => {
    const { complaintNo, mobileNo } = this.state;
    const { fetchComplaints } = this.props;
    const queryObj = [1, 2].reduce((result, current) => {
      if (complaintNo) {
        result.push({ key: "serviceRequestId", value: complaintNo });
      }
      if (mobileNo) {
        result.push({ key: "phone", value: mobileNo });
      }
      return result;
    }, []);
    if (complaintNo || mobileNo) {
      fetchComplaints(queryObj, true, true);
    }
  };

  clearSearch = () => {
    const { fetchComplaints } = this.props;
    fetchComplaints([{ key: "status", value: "assigned,open,reassignrequested" }]);
    this.setState({ mobileNo: "", complaintNo: "" });
  };

  render() {
    const { loading, history } = this.props;
    const { mobileNo, complaintNo } = this.state;
    const tabStyle = {
      letterSpacing: "0.6px",
    };

    const { onComplaintClick } = this;
    const { assignedComplaints, unassignedComplaints, employeeComplaints, role, transformedComplaints } = this.props;
    return role === "ao" ? (
      <Tabs
        className="employee-complaints-tab"
        tabs={[
          {
            label: (
              <div className="inline-Localization-text">
                <Label
                  labelClassName="unassigned-label-text"
                  color={"#ffffff"}
                  bold={true}
                  label={`ES_ALL_COMPLAINTS_UNASSIGNED_TAB_LABEL`}
                  labelStyle={tabStyle}
                />
                <Label color={"#ffffff"} bold={true} label={`(${unassignedComplaints.length})`} labelStyle={tabStyle} />
              </div>
            ),
            children: (
              <Screen loading={loading}>
                <div className="tab1-content">
                  <Complaints
                    noComplaintMessage={"ES_MYCOMPLAINTS_NO_COMPLAINTS_TO_ASSIGN"}
                    onComplaintClick={onComplaintClick}
                    complaints={unassignedComplaints}
                    complaintLocation={true}
                    role={role}
                  />
                </div>
              </Screen>
            ),
          },
          {
            label: (
              <div className="inline-Localization-text">
                <Label
                  labelClassName="assigned-label-text"
                  color={"#ffffff"}
                  bold={true}
                  label={`ES_ALL_COMPLAINTS_ASSIGNED_TAB_LABEL`}
                  labelStyle={tabStyle}
                />
                <Label color={"#ffffff"} bold={true} label={`(${assignedComplaints.length})`} labelStyle={tabStyle} />
              </div>
            ),
            children: (
              <Screen loading={loading}>
                <div className="tab2-content">
                  <Complaints
                    noComplaintMessage={"ES_MYCOMPLAINTS_NO_ASSIGNED_COMPLAINTS"}
                    onComplaintClick={onComplaintClick}
                    complaints={assignedComplaints}
                    complaintLocation={true}
                    role={role}
                  />
                </div>
              </Screen>
            ),
          },
        ]}
      />
    ) : role === "csr" ? (
      <Screen loading={loading}>
        <Card
          id="complaint-search-card"
          className="complaint-search-main-card"
          textChildren={
            <div className="complaint-search-cont clearfix">
              <div className="col-xs-12" style={{ paddingLeft: 8 }}>
                <Label label="Search Complaint" fontSize={16} dark={true} bold={true} />
              </div>
              <div className="col-sm-3 col-xs-12" style={{ paddingLeft: 8 }}>
                <TextField
                  id="complaint-no"
                  name="complaint-no"
                  value={complaintNo}
                  hintText={<Label label="ES_MYCOMPLAINTS_COMPLAINT_NO" color="#b3b3b3" />}
                  floatingLabelText={<Label label="CS_COMPLAINT_SUBMITTED_COMPLAINT_NO" color="#03b0c6" fontSize="12px" />}
                  onChange={(e, value) => this.onComplaintChange(e)}
                  underlineStyle={{ bottom: 7 }}
                  underlineFocusStyle={{ bottom: 7 }}
                />
              </div>
              <div className="col-sm-3 col-xs-12" style={{ paddingLeft: 8 }}>
                <TextField
                  id="mobile-no"
                  name="mobile-no"
                  value={mobileNo}
                  hintText={<Label label="CORE_COMMON_PHONE_NUMBER_PLACEHOLDER" color="#b3b3b3" />}
                  floatingLabelText={<Label label="CORE_COMMON_MOBILE_NUMBER" color="#03b0c6" fontSize="12px" />}
                  onChange={(e, value) => this.onMobileChange(e)}
                  underlineStyle={{ bottom: 7 }}
                  underlineFocusStyle={{ bottom: 7 }}
                />
              </div>
              <div className="col-sm-6 col-xs-12 csr-action-buttons" style={{ marginTop: 10, paddingRight: 8 }}>
                <Button
                  label={<Label buttonLabel={true} label="ES_MYCOMPLAINTS_SEARCH_BUTTON" />}
                  style={{ marginRight: 45, width: "36%" }}
                  backgroundColor="#fe7a51"
                  labelStyle={{ letterSpacing: 0.7, padding: 0, color: "#fff" }}
                  buttonStyle={{ border: 0 }}
                  onClick={() => this.onSearch()}
                />
                <Button
                  label={<Label buttonLabel={true} color="#fe7a51" label="ES_MYCOMPLAINTS_CLEAR_SEARCH_BUTTON" />}
                  labelStyle={{ letterSpacing: 0.7, padding: 0, color: "#fe7a51" }}
                  buttonStyle={{ border: "1px solid #fe7a51" }}
                  style={{ width: "36%" }}
                  onClick={() => this.clearSearch()}
                />
              </div>
            </div>
          }
        />
        <Complaints
          noComplaintMessage={"ES_MYCOMPLAINTS_NO_COMPLAINTS_ASSIGNED"}
          onComplaintClick={onComplaintClick}
          complaints={transformedComplaints}
          role={role}
          complaintLocation={true}
        />
        <div className="floating-button-cont csr-add-button">
          <FloatingActionButton
            id="mycomplaints-add"
            onClick={(e) => {
              history.push("/employee/create-complaint");
            }}
            className="floating-button"
            backgroundColor="#fe7a51"
          >
            <Icon action="content" name="add" />
          </FloatingActionButton>
        </div>
      </Screen>
    ) : (
      <Screen loading={loading}>
        <Complaints
          noComplaintMessage={"ES_MYCOMPLAINTS_NO_COMPLAINTS_ASSIGNED"}
          onComplaintClick={onComplaintClick}
          complaints={employeeComplaints}
          role={role}
          complaintLocation={true}
        />
      </Screen>
    );
  }
}

const roleFromUserInfo = (roles = [], role) => {
  const roleCodes = roles.map((role) => {
    return role.code;
  });
  return roleCodes && roleCodes.length && roleCodes.indexOf(role) > -1 ? true : false;
};

const displayStatus = (status = "") => {
  let statusObj = {};
  if (status.includes("Overdue")) {
    statusObj.status = status; //Replace by localisation label
    statusObj.statusMessage = "";
  }
  if (status.includes("left")) {
    statusObj.status = status; //Replace by localisation label
    statusObj.statusMessage = "";
  }
  return statusObj;
};

const mapStateToProps = (state) => {
  const { complaints, common } = state || {};
  const { categoriesById } = complaints;
  const { loading } = complaints || false;
  const { citizenById, employeeById } = common || {};
  const { userInfo } = state.auth;
  const role = roleFromUserInfo(userInfo.roles, "GRO") ? "ao" : roleFromUserInfo(userInfo.roles, "CSR") ? "csr" : "employee";
  const transformedComplaints = transformComplaintForComponent(complaints, role, employeeById, citizenById, categoriesById, displayStatus);
  let assignedComplaints = [],
    unassignedComplaints = [],
    employeeComplaints = [];
  if (role === "ao") {
    assignedComplaints = orderby(
      transformedComplaints.filter((complaint) => complaint.complaintStatus === "ASSIGNED"),
      ["latestCreationTime"],
      ["desc"]
    );
    unassignedComplaints = orderby(
      transformedComplaints.filter((complaint) => complaint.complaintStatus === "UNASSIGNED"),
      ["latestCreationTime"],
      ["desc"]
    );
  } else {
    employeeComplaints = orderby(
      transformedComplaints.filter((complaint) => complaint.complaintStatus === "ASSIGNED"),
      ["latestCreationTime"],
      ["desc"]
    );
  }

  return { assignedComplaints, unassignedComplaints, employeeComplaints, role, loading, transformedComplaints };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComplaints: (criteria, hasUsers, overWrite) => dispatch(fetchComplaints(criteria, hasUsers, overWrite)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllComplaints);
