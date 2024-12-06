import React, { useState } from "react";
import Input from "./Input"; // 재사용 Input 컴포넌트 불러오기

function TodoInput({ onAdd }) {
const [todo, setTodo] = useState("");

const handleAddTodo = () => {
    if (todo.trim() === "") {
        alert("할 일을 입력해주세요!");
        return;
    }

    onAdd(todo); // 부모 컴포넌트로 새로운 할 일 전달
    setTodo(""); // 입력값 초기화
    };

return (
    <div style={styles.container}>
        <Input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="할 일을 입력하세요"
        />
        <button style={styles.addButton} onClick={handleAddTodo}>
        추가
        </button>
    </div>
    );
}



export default TodoInput;
