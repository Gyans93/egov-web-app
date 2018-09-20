import React from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import get from "lodash/get"
import set from "lodash/set"
import "./index.css"



class Table extends React.Component {
  state = {
    data: [],
    columns: []
  };

  formatData = (data, columns) => {
    return [...data].reduce((acc, curr) => {
      let dataRow = [];
      Object.keys(columns).forEach(column => {
        let currentColumn = columns[column];
        let columnValue = get(curr, `${column}`, "");
        if (get(columns, `${column}.format`, "")) {
          columnValue = columns[column].format(columnValue);
        }
        dataRow.push(columnValue);
      });
      let updatedAcc = [...acc];
      updatedAcc.push(dataRow);
      return updatedAcc;
    }, []);
  };

  componentDidMount() {
    const { data, columns } = this.props;
    const updatedData = this.formatData(data, columns);
    this.setState({
      data: updatedData,
      columns: Object.keys(columns)
    });
  }

  render() {
    const { data, columns } = this.state;

    const options = {
      filterType: "dropdown",
      responsive: "scroll",
      selectableRows: false
    };

    return (
      <MUIDataTable
        title={this.props.title}
        data={data}
        columns={columns}
        options={options}
      />
    );
  }
}

export default Table
