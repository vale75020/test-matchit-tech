import React, { Component } from "react";
import "./App.css";
import Blocks from './component/Blocks';
import axios from "axios";

class App extends Component {
  state = {
    blocks: []
  };

  componentDidMount() {
    this.fetchData()
  }

  fetchData = () => {
    axios
    .get("http://52.47.129.155:8080/last_blocks/10") 
    .then(response => {
      this.setState({
        blocks: response.data.block
      });
      setInterval(this.fetchData, 15000)
      console.log(this.state.blocks);
    })
    .catch(erreur => console.log(erreur))
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Latest 10 Blocks</h1>
        <Blocks blocks={this.state.blocks} />
      </div>
    );
  }
}

export default App;
