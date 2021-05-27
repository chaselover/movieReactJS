import React from "react"

export default class App extends React.Component {
  // 꼭 여기에 state 전부 선언할 필요 없음. 나중에 다른곳에서 그냥 추가해도됨.
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount(){
    setTimeout(() => {
      this.setState({isLoading : false});
    },6000);
  }
  render() {
    const { isLoading} = this.state;
    return (
      <React.Fragment>
        <div>{isLoading ? "Loading" : "We are ready"}</div>
      </React.Fragment>
    )
  }
}
