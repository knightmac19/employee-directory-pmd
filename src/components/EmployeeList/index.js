import React from "react";
import "./style.css";

function EmployeeList(props) {
  return (
    <table className="table table-bordered table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark Otto</td>
          <td>(555)-123-4567</td>
          <td>markOtto@mark.otto</td>
          <td>3-16-1947</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Mark Otto</td>
          <td>(555)-123-4567</td>
          <td>markOtto@mark.otto</td>
          <td>3-16-1947</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Mark Otto</td>
          <td>(555)-123-4567</td>
          <td>markOtto@mark.otto</td>
          <td>3-16-1947</td>
        </tr>
      </tbody>
    </table>


  );
}

export default EmployeeList;