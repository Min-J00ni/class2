import React, { useState } from "react";
import Modal from "./reusable/Modal"; // 공통 Modal 컴포넌트
import Input from "./Input"; // 재사용 가능한 Input 컴포넌트
import styles from "../css/Addmodal.module.css"; // 필요한 추가 스타일 (CSS 모듈)

function ModalWithContent({ onClose, onSave }) {
    const [categoryName, setCategoryName] = useState("");
    const [textColor, setTextColor] = useState("#000000");

    const handleSave = () => {
    if (categoryName.trim() === "") {
        alert("카테고리명을 입력해주세요!");
        return;
    }

    // 카테고리 정보 저장 및 모달 닫기
    onSave({ name: categoryName, color: textColor });
    onClose();
};

return (
    <Modal title="카테고리 추가" onClose={onClose}>
        {/* 카테고리명 입력 필드 */}
        <label className={styles.label}>
        카테고리명:
        <Input
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="카테고리 이름"
        />
        </label>

        {/* 텍스트 색상 선택 */}
        <label className={styles.label}>
        텍스트 색상:
        <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className={styles.colorPicker}
        />
        </label>

        {/* 저장 버튼 */}
        <div className={styles.buttonContainer}>
        <button onClick={handleSave} className={styles.saveButton}>
            저장
        </button>
        </div>
    </Modal>
);
}

export default Addmodal;
