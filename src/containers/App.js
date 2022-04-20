import React, { Component } from "react";
import CardList from "../component/CardList";
import SearchBox from "../component/SearchBox";
import "./app.css";
import Scroll from "../component/Scroll";
import ErrorBoundary from "../component/ErrorBoundary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    // not using the => function since we are overriding something that is part of Component
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  //   onSearchChange(event) {
  //     // Because the onSearchChange function was called by the <input> in SearchBox
  //     // `this` here refers to the <input>
  //     console.log(event.target.value);
  //     const filterBots = this.state.robots.filter((robots) => {
  //       return robots.name.toLowerCase().includes(this.searchfield.toLowerCase());
  //     });
  //     console.log(filterBots);
  //   }

  onSearchChange = (event) => {
    // Now `this` refers to the App because of how the function is defined
    console.log(event.target.value);
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filterBots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Robot Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filterBots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
