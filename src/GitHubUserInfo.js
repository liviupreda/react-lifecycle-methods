import React, { Component } from "react";
import axios from "axios";

class GitHubUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: "",
      name: "",
      bio: "",
      profileUrl: ""
    };
  }

  async componentDidMount() {
    const url = `https://api.github.com/users/${this.props.username}`;
    let res = await axios.get(url);
    const data = res.data;
    this.setState({
      avatar: data.avatar_url,
      name: data.name,
      bio: data.bio
    });
  }

  render() {
    return (
      <div>
        <h1>GitHub User: {this.state.name}</h1>
        <p>Bio: {this.state.bio}</p>
        <img src={this.state.avatar} alt="User Avatar" />
      </div>
    );
  }
}

export default GitHubUserInfo;
