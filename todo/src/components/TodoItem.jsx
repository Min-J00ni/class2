// TodoItem.jsx
/* eslint-disable react/prop-types */
// PropTypes 경고를 무시하기 위한 설정. 코드에 큰 영향을 미치지 않음.

import { useState } from 'react';
// React의 useState 훅을 사용하여 컴포넌트의 상태를 관리.
import style from "../css/TodoItem.module.css";

const TodoItem = ({ todo, updateTodo, toggleComplete, deleteTodo }) => {
    // TodoItem 컴포넌트는 하나의 할 일을 표시하고 관리합니다.
    // 전달된 props:
    // 1. todo: 현재 할 일 데이터 (id, text, completed 상태를 포함).
    // 2. updateTodo: 할 일을 수정하는 함수.
    // 3. toggleComplete: 완료 여부를 바꾸는 함수.
    // 4. deleteTodo: 할 일을 삭제하는 함수.

    const [isEditing, setIsEditing] = useState(false);
    // isEditing은 "현재 수정 중인지 여부"를 저장하는 상태입니다.
    // 기본값은 false (수정 중이 아님)으로 설정.

    const [editText, setEditText] = useState(todo.text);
    // editText는 "수정 중인 입력 필드의 텍스트"를 저장합니다.
    // 초기값으로 todo.text(현재 할 일의 내용)를 사용.

    const handleEdit = () => {
    // 수정 버튼을 눌렀을 때 호출되는 함수.
    if (isEditing && editText.trim()) {
        // 1. 현재 수정 상태이고(editing), 텍스트가 공백이 아니면:
        // updateTodo를 호출하여 새로운 텍스트를 부모 컴포넌트(App)로 전달.
        updateTodo(todo.id, editText);
    }
    // 2. 수정 상태를 반전(toggle): 수정 모드로 전환하거나 종료.
    setIsEditing(!isEditing);
    };

    return (
    <li className={style.li}> {/*리스트 항목*/} 
        {/* 1. 체크박스: 할 일 완료 여부를 표시하고 토글(완료/미완료)할 수 있음 */}
        <input
        type="checkbox"
        checked={todo.completed} // 완료 상태를 체크박스에 반영.
        onChange={() => toggleComplete(todo.id)} // 체크박스를 클릭하면 완료 상태를 반전.
        />

        {/* 2. 할 일의 내용 표시 또는 수정 */}
        {isEditing ? (
        // 수정 상태일 때:
        <input
            type="text"
            value={editText} // 입력 필드에 현재 수정 중인 텍스트 표시.
            onChange={(e) => setEditText(e.target.value)} // 사용자가 입력한 텍스트를 업데이트.
        />
        ) : (
        // 수정 상태가 아닐 때:
        <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            // 완료된 할 일은 취소선(선 긋기)을 표시, 그렇지 않으면 원래 스타일 유지.
        >
            {todo.text}
        </span>
        )}

        {/* 3. 수정 버튼 */}
        <button onClick={handleEdit}>
        {/* 현재 상태에 따라 버튼의 텍스트가 바뀜 */}
        {isEditing ? '등록' : '수정'}
        {/* '등록': 수정 완료를 의미.
            '수정': 수정 모드로 전환. */}
        </button>

      {/* 4. 삭제 버튼 */}
        <button onClick={() => deleteTodo(todo.id)}>
        {/* 삭제 버튼을 클릭하면 부모 컴포넌트(App)에서 해당 할 일을 삭제 */}
        삭제
        </button>
    </li>
    );
};

export default TodoItem;
// 이 컴포넌트를 다른 파일에서 사용할 수 있도록 내보냄.
