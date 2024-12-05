import { useState, useEffect } from 'react'; // React에서 상태(state)와 side effect를 관리하기 위한 훅(hook)
import TodoInput from './components/TodoInput.jsx';
import TodoList from './components/TodoList.jsx';
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
    * U 업데이트 - 변경된 텍스트 반영
    * @param {*} id todo의 고유 값
    * @param {*} updatedText 업데이트 반영 할 텍스트
    */
  const updateTodo = (id, updatedText) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text: updatedText } : todo)));
    /* .map() 기록 되어있는 todos를 순회하면서 동일한 행동을 해, 각 할일은 todo라고 할게
    (삼항연산자) 현재 순회 중인 todos에서 todo가 변경된 텍스트를 반영할 아이템이라면
    (true) ...todo 전개구문을 이용해서 객체의 모든 속성을 복사하고, text 속성만 새로운 텍스트로 변경해
    (false) 기존 todo 그대로 둬 */
  };


    /**
      * U 업데이트 - 완료여부를 토글하는 핸들러 함수
   * @param {*} id todo의 고유 값
   */
  const toggleComplete = (id) => {
  setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  /* .map() 기록 되어있는 todos를 순회하면서 동일한 행동을 해, 각 할일은 todo라고 할게
  (삼항연산자) 현재 순회 중인 todo가 완료여부를 표시하려는 아이템이라면
  (true) ...todo 전개구문을 이용해서 객체의 모든 속성을 복사하고, completed 속성만 반전해
  (false) 기존 todo 그대로 둬 */
}

  /**
    * D 삭제
    * @param {*} id todo의 고유 값
    */
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    /* .filter() 주어진 조건을 만족하는 요소들로만 새로운 배열을 생성
    삭제하려는 todo의 id가 파라미터로 들어가고
    그 id와 같지 않은 todo만 모아서 배열생성하여 setTodos()로 부모상태 업데이트
    => 그 id값을 가진 todo는 제외시켜 */
  };


  /**
    * UI 화면에 나타나는 부분
    */
  return (
    <div className={style.app}>
      {/* 제목 */}
      <h1>to
      <br />To-Do List<br />
      </h1>
      {/* 할 일 추가하는 컴포넌트 */}
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        updateTodo={updateTodo}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
  
}

export default App; // 이 컴포넌트를 다른 파일에서 사용할 수 있게 내보냄