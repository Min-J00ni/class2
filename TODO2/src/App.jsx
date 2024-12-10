import React, { useState } from "react";
import Header from "./components/Header.jsx"; // Header 컴포넌트
import Addmodal from "./components/Addmodal.jsx"; // Addmodal 컴포넌트

function App() {
  const [isModalOpen, setModalOpen] = useState(false); // 모달 열림/닫힘 상태 관리

  // 모달 열기
  const handleOpenModal = () => setModalOpen(true);

  // 모달 닫기
  const handleCloseModal = () => setModalOpen(false);

  // 저장 핸들러
  const handleSaveCategory = (category) => {
    console.log("저장된 카테고리:", category); // 저장된 데이터를 콘솔에 출력 (또는 API 호출 등)
    setModalOpen(false); // 저장 후 모달 닫기
  };

  return (
    <div>
      {/* Header에 모달 열기 핸들러 전달 */}
      <Header onAddCategory={handleOpenModal} completedCount={3} />

      {/* 모달 컴포넌트 */}
      {isModalOpen && (
        <Addmodal
          onClose={handleCloseModal} // 닫기 핸들러 전달
          onSave={handleSaveCategory} // 저장 핸들러 전달
        />
      )}
    </div>
  );
}

export default App;
