import React from "react"


// 이게 Link를 이용한 Screen 사이의 정보공유 방법.
// Router의 Route 컴포넌트가. 주는 props를 이용.
// render로 component를 Dom에 부착한 뒤 Mount완료 후 did mount가 호출됨
export default class Detail extends React.Component {
    componentDidMount(){
        // console.log(props); histrory에 많은것들이 있음. 웹사이트 있는 장소도 바꿀수있음.
        const {location, history} = this.props;
        // console.log(location); state없는거 확인.
        if(location.state===undefined){
            history.push("/");
        }

    }
    render() {
        const {location} = this.props;
        if(location.state){
            return (
                <span>{location.state.title}</span>
            )
        } else {
            return null;
        }
    }
}

// render가 일어나고 그다음 componentDidMount로 redirect가 일어남.
// =>location data가 상실될수도 있음.