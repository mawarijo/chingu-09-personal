import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";
import Table from "./Table";

class App extends React.Component {
  state = {
    error: "",
    landings: [],
    search: ""
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get("/api/landings", {
        params: {
          search: this.state.search
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

  onSearchChange = e => {
    const search = e.target.value;
    this.setState(() => ({
      search
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
        <Table landings={landings} />
      </div>
    );
  }
}

export default App;
