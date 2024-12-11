import React from "react";
import TodoItem from "./TodoItem"; // TodoItem 컴포넌트 불러오기
import styles from "../css/TodoCategory.module.css"; // 스타일 파일 불러오기

/**
    * Category 컴포넌트
    * - 각 카테고리를 렌더링하며, 할 일을 추가/수정/삭제할 수 있습니다.
    */
function TodoCategory({
    category,
    onAddTodo,
    onUpdateTodo,
    onDeleteTodo,
    onOpenBottomSheet,
}) {
    return (
    <div className={styles.categoryContainer}>
        {/* 카테고리 제목 */}
        <div
        className={styles.categoryHeader}
        onContextMenu={(e) => {
            e.preventDefault(); // 기본 우클릭 메뉴 방지
            onOpenBottomSheet(); // 바텀시트 열기
        }}
        >
        <h3 className={styles.categoryTitle}>{category.name}</h3>
        </div>

        {/* TodoItem 목록 */}
        {category.todos.map((todo) => (
        <TodoItem
            key={todo.id}
            todo={todo}
            onUpdate={(updatedTodo) => onUpdateTodo(category.id, todo.id, updatedTodo)}
            onDelete={() => onDeleteTodo(todo.id)}
        />
        ))}

        {/* 새 할 일 추가 인풋 */}
        <input
        className={styles.todoInput}
        placeholder="새 할 일을 추가하세요..."
        onKeyDown={(e) => {
            if (e.key === "Enter" && e.target.value.trim() !== "") {
            onAddTodo(category.id, e.target.value); // 새 할 일 추가
            e.target.value = ""; // 입력창 초기화
            }
        }}
        />
    </div>
    );
}

export default TodoCategory;
