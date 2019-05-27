import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import Table from "./Table";

class App extends React.Component {
  state = {
    error: "",
    landings: [],
    offset: 0,
    query: ""
  };

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.offset !== prevState.offset) {
      this.getData();
    }
  }

  getData = () => {
    axios
      .get("/api/landings", {
        params: {
          offset: this.state.offset,
          query: this.state.query
        }
      })
      .then(response =>
        this.setState(() => ({
          error: "",
          landings: response.data
        }))
      )
      .catch(error =>
        this.setState(() => ({
          landings: [],
          error
        }))
      );
  };

  getNextPage = () => {
    this.setState(prevState => ({ offset: prevState.offset + 100 }));
  };

  getPreviousPage = () => {
    this.setState(prevState => ({ offset: prevState.offset - 100 }));
  };

  onSearchChange = e => {
    const query = e.target.value;
    this.setState(() => ({
      query
    }));
  };

  onSearchSubmit = e => {
    e.preventDefault();
    this.getData();
  };

  render() {
    const { landings } = this.state;
    return (
      <div>
        <SearchBar
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
        />
        {!!this.state.landings && <Table landings={landings} />}
        {!!this.state.error && <p>{this.state.error}</p>}
        {this.state.offset > 0 && (
          <button onClick={this.getPreviousPage}>Previous</button>
        )}
        {this.state.landings.length === 100 && (
          <button onClick={this.getNextPage}>Next</button>
        )}
      </div>
    );
  }
}

export default App;
