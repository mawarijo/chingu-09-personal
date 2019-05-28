import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import Table from "./Table";
import "./App.css";

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
      <div className="page">
        <SearchBar
          onChange={this.onSearchChange}
          onSubmit={this.onSearchSubmit}
        />
        {!!this.state.landings && <Table landings={landings} />}
        {!!this.state.error && <p>{this.state.error}</p>}
        <div className="nav">
          <div>
            {this.state.offset > 0 && (
              <button class="nav-button" onClick={this.getPreviousPage}>
                Previous
              </button>
            )}
          </div>
          {this.state.landings.length === 100 && (
            <button class="nav-button" onClick={this.getNextPage}>
              Next
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default App;
