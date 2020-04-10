import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


function EmployeeList(props) {
  return (
    <table className="table table-bordered table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Image</th>
          <th scope="col">
            Name
            <span> </span>
            <button onClick={props.onSortChange}>
              <i className={`fas fa-chevron-${sortTypes[props.currentSort].name.class}`} />
            </button>
          </th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">DOB</th>
        </tr>
      </thead>
      <tbody>
        {
          (props.search === "")
          ? props.employees.map(employee => (
            <tr key={employee.id}>
              <td>
                <img alt="IMG" 
                src={employee.thumbnail} 
                className="img" />
              </td>
              <td>
                {employee.name}
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
                {employee.dob}
              </td>
            </tr>
          ))
          : props.employees.filter(employee => employee.meta.includes(props.search)).map(filteredEmp => (
            <tr key={filteredEmp.id}>
              <td>
                <img alt="IMG" 
                  src={filteredEmp.thumbnail} 
                  className="img" 
                />
              </td>
              <td>
                {filteredEmp.name}
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
                {filteredEmp.dob}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default EmployeeList;