import React, { useState } from "react";
import Header from "./Header";
import Modal from "./Modal"; // 모달 컴포넌트를 불러옴

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 (true: 열림, false: 닫힘)

  // 모달 열기
  const handleOpenModal = () => {
    setIsModalOpen(true); // 모달 상태를 true로 설정
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 상태를 false로 설정
  };

  return (
    <div>
      {/* 헤더 컴포넌트 */}
      <Header onAddCategory={handleOpenModal} completedCount={0} />

      {/* 모달 컴포넌트 */}
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <h2>카테고리 추가</h2>
          <input type="text" placeholder="카테고리 이름 입력" />
          <button onClick={handleCloseModal}>닫기</button>
        </Modal>
      )}
    </div>
  );
}

export default App;
