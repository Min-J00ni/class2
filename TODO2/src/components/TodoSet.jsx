import React from 'react';
import TodoList from './TodoList';

function Category({ category, onUpdate }) {
    return (
    <div>
        <h2>{category.title}</h2>
      <button>...</button> {/* 수정/삭제 버튼 */}
        <TodoList todos={category.todos} />
    </div>
    );
}

export default Category;
