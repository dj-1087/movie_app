import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const {location, history} = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const {location} = this.props;
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
} 호스트ㅏㄱ 가면 꺼져

export default Detail;