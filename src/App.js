
import React from "react";
import {HashRouter, Route} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

// router를 넣기위한 app초기화 Homejs? AboutJS? 뭘볼꺼야?
// router는 겹쳐서 rendering함 /home/cooler과 /home이따로 있을때 /home/cooler에서는 /home의 component도 겹쳐서 rendering됨
// 라우터는 URL을 비교하고 매치되면 렌더링함.
// 그래서exact설정을 통해 겹치지 않게함.(exact는 그것만 rendering함)
// URL을 통해 path를 지정해줄수있음. URL뒤에 /about붙히면 component About이 열림.
// browserRouter는 Hashrouter과 비교해 /#/이 주소에 안들어감.
// 그러나 github pages를 쓰기에는 Hashrouter가 더 용이함.

// Router의 모든 Route들은 props를 가진다.(Router가 전달해줌)
// :id는 변수표시.
function App(){
    return <HashRouter>
        <Navigation />
        <Route path="/about" component={About}/>
        <Route path="/movie/:id" component={Detail}/>
        <Route path="/" exact="true" component={Home}/>
    </HashRouter>
}

export default App;
