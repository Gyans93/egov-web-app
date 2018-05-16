import commonConfig from "config/common.js";

const formConfig = {
  name: "employeeForgotPasswd",
  fields: {
    username: {
      id: "person-phone",
      jsonPath: "otp.mobileNumber",
      required: true,
      floatingLabelText: "CORE_COMMON_MOBILE_NUMBER",
      errorMessage: "CORE_COMMON_PHONENO_INVALIDMSG",
      hintText: "CORE_COMMON_PHONE_NUMBER_PLACEHOLDER",
      pattern: "^([0-9]){10}$",
    },
    type: {
      id: "otp-type",
      jsonPath: "otp.type",
      value: "passwordreset",
    },
    tenantId: {
      id: "employee-forgot-password-tenantId",
      jsonPath: "otp.tenantId",
      value: commonConfig.tenantId,
    },
  },
  submit: {
    label: "CORE_COMMON_CONTINUE",
    id: "employee-forgot-password-submit-action",
  },
  saveUrl: "/user-otp/v1/_send",
  redirectionRoute: "/employee/user/otp",
  action: "token",
};
export default formConfig;