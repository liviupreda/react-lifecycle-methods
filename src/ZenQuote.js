import React, { Component } from "react";
import axios from "axios";
import "./ZenQuote.css";

class ZenQuote extends Component {
  constructor(props) {
    super(props);
    this.state = { quote: "" };
  }

  componentDidMount() {
    axios.get("https://api.github.com/zen").then(res => {
      setTimeout(
        function() {
          this.setState({ quote: res.data });
        }.bind(this),
        3000
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Always remember ... </h1>
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
        <p>{this.state.quote}</p>
      </div>
    );
  }
}

export default ZenQuote;
