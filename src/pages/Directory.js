import React, { Component } from "react";
import API from "../utils/API";

import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import EmployeeList from "../components/EmployeeList";



class Directory extends Component {
  state = {
    employees: [],
    error: "",
  };


  componentDidMount() {
    API.getEmployeesList()
      .then(res => {
        console.log(res.data);
        this.setState({ employees: res.data.request });
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <hr/>
        
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>Employee Directory</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <EmployeeList employees={this.state.employees}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }




}





export default Directory;
