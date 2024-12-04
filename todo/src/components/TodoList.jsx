/* eslint-disable react/prop-types */ 
// 이 줄은 ESLint 규칙 중 "prop-types" 검사를 비활성화한 것입니다. 
// prop-types는 React 컴포넌트의 props 타입을 검증하기 위한 도구인데, 
// 여기서는 사용하지 않으므로 경고를 방지합니다.

import TodoItem from './TodoItem'; 
// 개별 할 일 항목을 표시하는 컴포넌트입니다. 
// TodoList에서 각 항목을 반복적으로 렌더링할 때 사용됩니다.

import style from "../css/TodoList.module.css";

// 주의!!!!! 
// 파일 이름을 모듈로 작성하지 않으면(예: TodoList.module.css 대신 TodoList.css), 
// CSS가 전역으로 적용되어 하위 컴포넌트에도 영향을 미칩니다. 
// 그래서 TodoItem에도 li 스타일이 반영될 수 있습니다.

const TodoList = ({ todos, updateTodo, toggleComplete, deleteTodo }) => { 
    // TodoList 컴포넌트는 여러 개의 할 일 목록을 보여주는 역할을 합니다.
    // 전달된 props:
    // 1. todos: 현재 할 일 목록 데이터를 담은 배열입니다.
    // 2. updateTodo: 할 일의 내용을 수정하는 함수입니다.
    // 3. toggleComplete: 할 일이 완료되었는지 상태를 바꾸는 함수입니다.
    // 4. deleteTodo: 할 일을 삭제하는 함수입니다.

    return (
    <ul className={style.ul}>{/*순서가 없는 리스트 컨테이너의 역할*/}
      {/* ul 태그는 할 일 목록을 HTML 리스트 형태로 감싸는 역할을 합니다. */}
        {todos.map((todo) => (
        // todos 배열에 있는 각 할 일(todo)을 반복하며, 
        // TodoItem 컴포넌트를 생성합니다.

        <TodoItem
            key={todo.id} 
            // React에서 각 항목을 고유하게 구분하기 위한 고유 ID입니다. 
            // 이 키는 성능 최적화를 위해 필수입니다.

            todo={todo} 
            // 현재 반복 중인 하나의 할 일 데이터를 TodoItem에 전달합니다.

            updateTodo={updateTodo} 
            // 각 TodoItem에서 할 일의 내용을 수정할 수 있도록 updateTodo 함수를 전달합니다.

            toggleComplete={toggleComplete} 
            // TodoItem에서 할 일이 완료되었는지 상태를 변경하는 데 사용됩니다.

            deleteTodo={deleteTodo} 
            // TodoItem에서 할 일을 삭제할 수 있는 기능을 제공합니다.
        />
        ))}
    </ul>
    );
    // 최종적으로, 각 TodoItem이 ul 내부에 포함되어 화면에 표시됩니다.
};

export default TodoList; 
// 이 파일을 다른 곳에서 사용할 수 있도록 TodoList 컴포넌트를 내보냅니다.
