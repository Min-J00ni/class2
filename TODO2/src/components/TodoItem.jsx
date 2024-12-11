import React from "react";
import TodoInput from "./TodoInput";
import styles from "./TodoItem.module.css"; // CSS 모듈 불러오기

function TodoItem({ todo, onUpdate, onDelete }) {
    return (
    <div className={styles.todoItemContainer}>
        {/* 체크박스 */}
        <input
        type="checkbox"
        className={styles.checkbox}
        checked={todo.completed}
        onChange={() => onUpdate({ ...todo, completed: !todo.completed })}
        />

        {/* 텍스트 입력 */}
        <TodoInput
        value={todo.text}
        onChange={(text) => onUpdate({ ...todo, text })}
        placeholder="할 일을 입력하세요..."
        />

        {/* 삭제 버튼 */}
        <button className={styles.deleteButton} onClick={onDelete}>
        삭제
        </button>
    </div>
    );
}

export default TodoItem;
