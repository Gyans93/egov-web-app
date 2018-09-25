const formConfig = {
  name: "chequeInfo ",
  fields: {
    chequeNo: {
      id: "chequeNo",
      type: "textfield",
      floatingLabelText: "Cheque No",
      hintText: "Enter cheque no.",
      jsonPath: "Receipt[0].instrument.transactionNumber",
      pattern: /^([0-9]\d{5,15})(\.\d+)?$/,
      errorMessage: "Check no. should be minimum 6 digits",
      errorStyle: { position: "absolute", bottom: -8, zIndex: 5 },
      required: true,
      value: "",
    },
    chequeDate: {
      id: "chequeDate",
      type: "textfield",
      floatingLabelText: "Cheque Date",
      hintText: "dd/mm/yy",
      required: true,
      jsonPath: "Receipt[0].instrument.transactionDateInput",
      errorStyle: { position: "absolute", bottom: -8, zIndex: 5 },
      errorMessage: "",
      value: "",
    },
    ifscCode: {
      id: "ifscCode",
      type: "textFieldIcon",
      text: "SUBMIT",
      className: "pt-old-pid-text-field",
      floatingLabelText: "IFSC",
      hintText: "Enter bank IFSC",
      required: true,
      numcols: 12,
      errorStyle: { position: "absolute", bottom: -8, zIndex: 5 },
      errorMessage: "Please enter a valid IFSC",
      jsonPath: "Receipt[0].instrument.ifscCode",
      pattern: /^[a-zA-Z0-9]{1,11}$/i,
      value: "",
    },
    BankName: {
      id: "BankName",
      required: true,
      hideField: true,
      type: "textfield",
      disabled: true,
      floatingLabelText: "Bank Name",
      dropDownData: [{ label: "RBI", value: "10101" }],
      jsonPath: "Receipt[0].instrument.bank.name",
      value: "",
    },
    BankBranch: {
      id: "BankBranch",
      required: true,
      disabled: true,
      hideField: true,
      type: "textfield",
      floatingLabelText: "Bank Branch",
      jsonPath: "Receipt[0].instrument.branchName",
      value: "",
    },
  },
  action: "",
  redirectionRoute: "",
  saveUrl: "",
  isFormValid: false,
};

export default formConfig;
