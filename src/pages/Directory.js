import React, { Component } from "react";
import API from "../utils/API";

import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchBar from "../components/SearchBar";
import EmployeeList from "../components/EmployeeList";



class Directory extends Component {
  state = {
    search: "",
    employees: [],
    error: ""
  };

  formatDOB = dob => {
    let year = dob.slice(0,4);
    let month = dob.slice(5,7);
    let day = dob.slice(8,10);
    
    let newDate = month + "/" + day + "/" + year;
    return newDate;
  }
  
  formatName = (first, last) => {
    let fullName = last + ", " + first;
    return fullName;
  }

  componentDidMount() {
    API.getEmployeesList()
      .then(res => {
        console.log(res.data.results);
        
        let newObj = res.data.results.map(emp => {
          let fullArr = {
            id: emp.id.value,
            thumbnail: emp.picture.thumbnail,
            name: this.formatName(emp.name.first, emp.name.last),
            phone: emp.phone,
            email: emp.email,
            dob: this.formatDOB(emp.dob.date),
            meta: emp.name.first + " " + 
                  emp.name.last + " " + 
                  emp.phone + " " + 
                  emp.email + " " + 
                  this.formatDOB(emp.dob.date)
          }
          return fullArr;
        })

        this.setState({ employees: newObj })
      })
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value});
  }

  // console.log(`This.state: ${this.state.employees}`);
  render() {
    console.log(this.state.employees);
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">
              <SearchBar 
                handleInputChange={this.handleInputChange}
              />
            </Col>
          </Row>
        </Container>
        <hr />
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <EmployeeList 
                employees={this.state.employees}
                search={this.state.search}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }




}





export default Directory;
