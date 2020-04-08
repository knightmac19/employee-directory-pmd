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


  componentDidMount() {
    API.getEmployeesList()
      .then(res => {
        console.log(res.data.results);
        this.setState({ employees: res.data.results });
        
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
