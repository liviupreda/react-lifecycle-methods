import React, { Component } from "react";
import axios from "axios";
import "./ZenQuote.css";

class ZenQuote extends Component {
  constructor(props) {
    super(props);
    this.state = { quote: "", isLoaded: false };
  }

  componentDidMount() {
    axios.get("https://api.github.com/zen").then(res => {
      setTimeout(
        function() {
          this.setState({ quote: res.data, isLoaded: true });
        }.bind(this),
        3000
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Always remember ... </h1>
        {this.state.isLoaded ? (
          <div>
            <p>{this.state.quote}</p>
          </div>
        ) : (
          <div className="showbox">
            <div className="loader">
              <svg className="circular" viewBox="25 25 50 50">
                <circle
                  className="path"
                  cx="50"
                  cy="50"
                  r="20"
                  fill="none"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ZenQuote;
