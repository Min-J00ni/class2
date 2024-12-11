import React from "react";
import Category from "./TodoCategory.jsx"; // Category 컴포넌트
import styles from "./TodoSet.module.css"; // 스타일 파일 불러오기

/**
    * TodoSet 컴포넌트
    * - 카테고리와 할 일 목록을 렌더링하며, 추가/수정/삭제 기능을 처리합니다.
    */
function TodoSet({ categories, setCategories }) {
    // **Todo 추가**
    const handleAddTodo = (categoryId, text) => {
    setCategories((prev) =>
        prev.map((category) =>
        category.id === categoryId
            ? {
                ...category,
                todos: [
                ...category.todos,
                { id: Date.now(), text, completed: false },
                ],
            }
            : category
        )
    );
    };

    // **Todo 수정**
    const handleUpdateTodo = (categoryId, todoId, updatedTodo) => {
    setCategories((prev) =>
        prev.map((category) =>
        category.id === categoryId
            ? {
                ...category,
                todos: category.todos.map((todo) =>
                todo.id === todoId ? updatedTodo : todo
                ),
            }
            : category
        )
    );
    };

    // **Todo 삭제**
    const handleDeleteTodo = (categoryId, todoId) => {
    setCategories((prev) =>
        prev.map((category) =>
        category.id === categoryId
            ? {
                ...category,
                todos: category.todos.filter((todo) => todo.id !== todoId),
            }
            : category
        )
    );
    };

    return (
    <div className={styles.todoSetContainer}>
        {categories.map((category) => (
        <Category
            key={category.id}
            category={category}
            onAddTodo={handleAddTodo}
            onUpdateTodo={handleUpdateTodo}
            onDeleteTodo={handleDeleteTodo}
        />
        ))}
    </div>
    );
}

export default TodoSet;
