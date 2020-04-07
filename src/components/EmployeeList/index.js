import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function formatDOB(dob) {
  let year = dob.slice(0,4);
  let month = dob.slice(5,7);
  let day = dob.slice(8,10);
  
  let newDate = month + "/" + day + "/" + year;
  return newDate;
}

function EmployeeList(props) {
  return (
    <table className="table table-bordered table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(employee => (
          <tr>
            <td key={employee}>
              <img alt="IMG" src={employee.picture.thumbnail} className="img" />
            </td>
            <td key={employee}>
              {employee.name.first} {employee.name.last}
            </td>
            <td key={employee}>
              {employee.phone}
            </td>
            <td key={employee} type="email">
              <Link>
                {employee.email}
              </Link>
            </td>
            <td key={employee}>
              {formatDOB(employee.dob.date)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeList;