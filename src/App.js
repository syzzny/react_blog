import logo from './logo.svg';

// 부트스트랩을 사용하기위해서는 css추가 필요
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';

// 라우터를 사용할때는 BrowserRouter를 들고와서 사용
import {BrowserRouter, Route, Routes} from 'react-router-dom'

// 각각의 페이지를 import해서 사용
import Home from './page/Home'
import Boardlist from './page/Boardlist'
import BoardForm from './page/BoardForm'
import Board from './page/Board'
import LonginForm from './page/LoginForm'
import NavHeader from './components/NavHeader';

function App() {
  // 데이터를 하위 컴포넌트에 전달하기 위해서 상위 컴포넌트에서 데이터를 작성하고
  // props값을 전달한다
  // 상위 데이터값을 하위에서 공유하기 때문에 동일한 값이 출력

  // user data
  // 처음 값 null "", 더미데이터로 내용 확인 후 선택
  /* 처음 값을 null로 두었을때 주의점 : null과 undefined는 속성을 가질 수 없기 때문에 속성에 접근하면 오류가 난다. 
    확실하게 처음에는 속성에 접근하지 않을때 사용
    [] 배열값을 사용할때 초기값을 null이나 ""으로 두면 Map() 메소드를 쓸수 없으므로 주의
  */

  // {name:"yejin"}
  const [user, setUser] = useState(
    null
  );

  const [boardlist, setBoardlist] = useState(
    [
      {
        id :1,
        title :"첫번째 게시물",
        content :"게시물의 내용을 작성합니다",
        name :"yejin",
        date: "2023-04-27"
      },
      {
        id :2,
        title :"두번째 게시물",
        content :"게시물의 내용을 작성합니다",
        name :"blue",
        date: "2023-04-27"
      }
    ]
  );

  // 주소와 페이지(컴포넌트 연결)
  return (
    <div className="App">
      <BrowserRouter>
      {/* NavHeader의 Link를 사용하기 위해 BrowserRouter인 */}
      {/*  */}
        <NavHeader user={user}/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/boardlist' element={<Boardlist boardlist={boardlist}/>}/>
          <Route path='/boardlist/:id' element={<Board boardlist={boardlist}/>} errorElement={<Home/>}/>
          <Route path='/boardform' element={<BoardForm/>}/>

          <Route path='/loginform' element={<LonginForm setUser={setUser}/>}/>          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
