import React, { Component } from "react";
import API from "../../utils/API";
import Container from "../Container";
import Search from "../Search";
import Table from "../Table";
import { sort } from '../../utils/sort';

class Directory extends Component {
  state = {
    search: "",
    employees: [],
    filteredEmployees: []
  };

  componentDidMount() {
    API.exportEmployees()
      .then(results => {
        this.setState({
          employees: results.data.results,
          filteredEmployees: results.data.results
        });
      });
  }

  sortHandler = () => {
    this.setState(
      {
        ...this.state,
        filteredEmployees: sort(this.state.filteredEmployees)
      }
    )
  }

  handleInputChange = event => {
    const filter = event.target.value;
    const filteredList = this.state.employees.filter(item => {
      let values = Object.values(item).join("").toLowerCase()
      return values.indexOf(filter.toLowerCase()) !== -1;
    })

    this.setState({ 
      filteredEmployees: filteredList, 
      search: event.target.value 
    })
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%", minWidth: "80%" }}>
          <Search
            handleInputChange={this.handleInputChange}
          />
          <Table employees={this.state.filteredEmployees} sortHandler={this.sortHandler} />
        </Container>
      </div>
    );
  }
}

export default Directory;