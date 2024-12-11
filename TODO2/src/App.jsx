import React, { useState } from "react";
import Header from "./components/Header.jsx"; // Header 컴포넌트
import Addmodal from "./components/Addmodal.jsx"; // Addmodal 컴포넌트
import TodoSet from "./components/TodoSet.jsx"; // TodoSet 컴포넌트

function App() {
  // **카테고리와 할 일 데이터를 관리하는 상태**
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "아침 루틴",
      todos: [{ id: 1, text: "기상하기", completed: false }],
    },
  ]);

  const [isModalOpen, setModalOpen] = useState(false); // 모달 열림/닫힘 상태 관리

  // **새로운 카테고리 추가**
  const handleSaveCategory = (category) => {
    const newCategory = {
      id: Date.now(), // 고유 ID 생성
      name: category.name,
      todos: [], // 초기 상태로 빈 할 일 목록
    };
    setCategories((prev) => [...prev, newCategory]); // 새로운 카테고리 추가
    setModalOpen(false); // 저장 후 모달 닫기
  };

  // **완료된 할 일 개수 계산**
  const completedCount = categories.reduce(
    (count, category) =>
      count + category.todos.filter((todo) => todo.completed).length,
    0
  );

  return (
    <div>
      {/* Header 컴포넌트 */}
      <Header
        onAddCategory={() => setModalOpen(true)} // 카테고리 추가 모달 열기
        completedCount={completedCount} // 완료된 할 일 개수 전달
      />

      {/* TodoSet 컴포넌트 */}
      <TodoSet
        categories={categories} // 카테고리 데이터 전달
        setCategories={setCategories} // 상태 업데이트 함수 전달
      />

      {/* Addmodal 컴포넌트 */}
      {isModalOpen && (
        <Addmodal
          onClose={() => setModalOpen(false)} // 모달 닫기 핸들러
          onSave={handleSaveCategory} // 카테고리 저장 핸들러
        />
      )}
    </div>
  );
}

export default App;
