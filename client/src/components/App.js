import React from "react";

import Table from "./Table";

class App extends React.Component {
  state = {
    landings: []
  };

  componentDidMount() {
    fetch("/api/landings", {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data =>
        this.setState(() => ({
          landings: data
        }))
      );
  }

  render() {
    const { landings } = this.state;
    return (
      <div>
        {landings.length > 0 && landings[0].mass}
        <Table />
      </div>
    );
  }
}

export default App;
