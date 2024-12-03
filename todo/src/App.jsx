import { useState, useEffect } from 'react'; // React에서 상태(state)와 side effect를 관리하기 위한 훅(hook)
import TodoInput from './components/TodoInput.jsx';
import style from "./css/App.module.css";


function App() {
  /** * R (읽기) - 로컬스토리지에서 기존의 할 일 목록을 불러옴*/
  const [todos, setTodos] = useState(() => {
    // 로컬스토리지에서 "todos"라는 키에 저장된 데이터를 가져옴
    const storedTodos = localStorage.getItem("todos");
    // storedTodos가 존재하면 JSON으로 변환해서 반환 (목록으로), 없으면 빈 배열([]) 반환
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  /*** 📦 useEffect - 할 일 목록이 바뀔 때마다 로컬스토리지에 저장 */
  useEffect(() => {
    // todos 상태가 변경될 때마다 실행됨
    localStorage.setItem('todos', JSON.stringify(todos));
    // todos 배열을 JSON 문자열로 변환하여 로컬스토리지에 저장
  }, [todos]); 
  // 의존성 배열에 todos를 넣어서, todos가 변경될 때만 실행되도록 설정

  /**
    * C (생성하기) - 새로운 할 일 추가
    * @param {string} text - 사용자가 입력한 할 일의 내용
    */
  const addTodo = (text) => {
    // 기존의 할 일 목록(todos)에 새 할 일 객체를 추가
    setTodos([
      ...todos, // 기존 목록을 복사 (spread syntax 사용)
      {
        id: Date.now(), // 고유한 ID로 현재 시간을 밀리초 단위로 사용
        text, // 사용자가 입력한 내용
        completed: false // 처음 추가될 때는 "완료 안 됨" 상태로 시작
      }
    ]);
  };

  /**
   * UI 화면에 나타나는 부분
   */
  return (
    <div className={style.app}>
      {/* 제목 */}
      <h1>Daily
      <br />To-Do List<br />
      </h1>
      {/* 할 일 추가하는 컴포넌트 */}
      <TodoInput addTodo={addTodo} />
      {/* 할 일 목록을 보여주는 컴포넌트 (아직 추가되지 않았음, 나중에 작성 가능) */}
    </div>
  );
  
}

export default App; // 이 컴포넌트를 다른 파일에서 사용할 수 있게 내보냄