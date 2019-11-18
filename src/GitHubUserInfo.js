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
      bio: data.bio,
      profileUrl: data.url
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>GitHub User Info</h1>
        <img src={this.state.avatar} />
      </div>
    );
  }
}

export default GitHubUserInfo;
