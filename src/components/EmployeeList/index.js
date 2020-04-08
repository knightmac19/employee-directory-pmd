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

function formatName(first, last) {
  let fullName = first + " " + last;
  return fullName;
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
        {
          (props.search === "")
          ? props.employees.map(employee => (
            <tr key={employee.id.value}>
              <td>
                <img alt="IMG" 
                src={employee.picture.thumbnail} 
                className="img" />
              </td>
              <td>
                {formatName(employee.name.first, employee.name.last)}
              </td>
              <td>
                {employee.phone}
              </td>
              <td type="email">
                <Link to={employee.email}>
                  {employee.email}
                </Link>
              </td>
              <td>
                {formatDOB(employee.dob.date)}
              </td>
            </tr>
          ))
          : props.employees.filter(employee => (employee.name.first || employee.name.last || employee.phone || employee.email || employee.dob.date).includes(props.search)).map(filteredEmp => (
            <tr key={filteredEmp.id.value}>
              <td>
                <img alt="IMG" 
                src={filteredEmp.picture.thumbnail} 
                className="img" />
              </td>
              <td>
                {formatName(filteredEmp.name.first, filteredEmp.name.last)}
              </td>
              <td>
                {filteredEmp.phone}
              </td>
              <td type="email">
                <Link to={filteredEmp.email}>
                  {filteredEmp.email}
                </Link>
              </td>
              <td>
                {formatDOB(filteredEmp.dob.date)}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default EmployeeList;