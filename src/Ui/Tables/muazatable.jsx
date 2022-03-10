import React from "react";
import { render } from "react-dom";
import "./table.css";

// Import React Table
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import data from "./data";

class MuzTable extends React.Component {
  constructor() {
    super();
    this.state = {
      // data to the table

      data: data
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={
            [
          
                {
                  Header: "First Name",
                  accessor: "first_name"
                },
                {
                  Header: "Last Name",
                  id: "last_name",
                  accessor: "last_name"
                },
                
                {
                  Header: "Age",
                  accessor: "age"
                },
                
                {
                  Header: "Email",
                  accessor: "email"
                }
            
          ]}
          defaultPageSize={20}
          style={{
            height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
          }}
          className="-striped -highlight"
        />
        <br />
       
      </div>
    );
  }
}
export default MuzTable;