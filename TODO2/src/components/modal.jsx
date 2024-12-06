import React, { useState } from "react";
import Input from "./Input";
import IcoBtn from "./IcoBtn"; // 아이콘형 버튼 컴포넌트 추가

function Modal({ onClose, onSave }) {
    const [categoryName, setCategoryName] = useState("");
    const [textColor, setTextColor] = useState("#000000");

    const handleSave = () => {
    if (categoryName.trim() === "") {
        alert("카테고리명을 입력해주세요!");
        return;
    }

    onSave({ name: categoryName, color: textColor });
    onClose();
    };

    return (
    <div> {/*style={styles.overlay}*/}
        <div>  {/*style={styles.modal}*/}
        {/* 타이틀과 닫기 버튼 */}
        <div> {/*style={styles.header}*/}
            <h2>카테고리 추가</h2>  {/*style={styles.title}*/}
            <IcoBtn
            icon="✖" // 닫기 아이콘 (이모지 사용)
            onClick={onClose}
            // 아이콘 스타일 적용 {/*style={styles.closeIcon}*/} 
            aria-label="닫기"
            />
        </div>

        {/* 카테고리명 입력 필드 */}
        <label>  {/*style={styles.label}*/}
            카테고리명:
            <Input
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="카테고리 이름 입력"
            />
        </label>

        {/* 텍스트 색상 선택 */}
        <label> {/*style={styles.label}*/}
            텍스트 색상:
            <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            style={styles.colorPicker}
            />
        </label>

        <div> {/*style={styles.buttonContainer}*/}
            <button onClick={handleSave}>  {/*style={styles.saveButton}*/}
            저장
            </button>
        </div>
        </div>
    </div>
    );
}

export default Modal;
