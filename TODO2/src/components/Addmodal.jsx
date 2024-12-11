import React, { useState } from "react";
import Modal from "./reusable/Modal.jsx"; // 공통 Modal 컴포넌트
import Input from "./reusable/Input.jsx"; // 재사용 가능한 Input 컴포넌트
import Btn from "./reusable/Btn.jsx"; // 공통 버튼 컴포넌트
import styles from "../css/Addmodal.module.css"; // 이 모달만의 커스텀 스타일

/**
    * ModalWithContent 컴포넌트
    * - 이 모달은 "카테고리 추가" 기능을 제공합니다.
    * - 입력 필드와 색상 선택기를 포함하고, 저장 버튼을 통해 데이터를 저장할 수 있습니다.
    * - 공통 Modal 컴포넌트를 활용해 Header, Content, Footer를 동적으로 구성합니다.
   */
function Addmodal({ onClose, onSave }) {
    // 카테고리 이름을 관리하는 상태
    const [categoryName, setCategoryName] = useState(""); // 사용자 입력값 (카테고리명)
    const [textColor, setTextColor] = useState("#000000"); // 사용자 선택값 (텍스트 색상)

/**
    * 저장 버튼 클릭 핸들러
    * - 카테고리 이름이 비어 있으면 경고 메시지를 띄웁니다.
    * - 입력된 카테고리 정보를 저장하고, 모달을 닫습니다.
    */
const handleSave = () => {
    if (categoryName.trim() === "") {
        alert("카테고리명을 입력해주세요!"); // 카테고리명이 비어 있을 때 경고 메시지
    return;
}

    // 부모 컴포넌트로 저장 데이터 전달 (이벤트 전달)
onSave({ name: categoryName, color: textColor });
onClose(); // 모달 닫기
};

/**
    * Header 영역 정의
    * - 제목을 표시하는 간단한 텍스트입니다.
    */
const header = <h2 className={styles.title}>카테고리 추가</h2>;

/**
    * Content 영역 정의
    * - 카테고리명 입력 필드와 색상 선택기를 포함합니다.
    * - 사용자가 카테고리 이름을 작성하거나, 텍스트 색상을 선택할 수 있습니다.
    */
const content = (
    <>
    {/* 카테고리명 입력 필드 */}
        <label className={styles.label}>
        카테고리명: {/* 설명 텍스트 */}
        <Input
            value={categoryName} // 입력값 상태
            onChange={(e) => setCategoryName(e.target.value)} // 입력값 변경 핸들러
            placeholder="카테고리 이름" // 힌트 텍스트
        />
    </label>

    {/* 텍스트 색상 선택 */}
        <label className={styles.label}>
        텍스트 색상: {/* 설명 텍스트 */}
        <input
            type="color" // 색상 선택을 위한 input 타입
            value={textColor} // 선택된 색상 상태
            onChange={(e) => setTextColor(e.target.value)} // 색상 변경 핸들러
            className={styles.colorPicker} // 스타일 클래스
        />
        </label>
    </>
);

/**
    * Footer 영역 정의
    * - 공통 버튼 컴포넌트를 사용해 "저장" 버튼을 추가합니다.
    * - 공통 버튼은 일관된 스타일을 유지하며, 클릭 이벤트를 처리합니다.
    */
const footer = (
    <div className={styles.buttonContainer}>
        <Btn
        onClick={handleSave} // 저장 버튼 클릭 시 호출
        variant="primary" // 버튼 스타일 (Primary 버튼)
        size="large" // 버튼 크기 (Large 크기)
        >
        저장 {/* 버튼 텍스트 */}
        </Btn>
    </div>
);

/**
    * 최종 모달 렌더링
    * - 공통 Modal 컴포넌트에 Header, Content, Footer를 각각 전달합니다.
    */
return (
    <Modal
        Header={header} // 모달의 헤더 (제목)
        Content={content} // 모달의 콘텐츠 (입력 필드와 색상 선택기)
        Footer={footer} // 모달의 푸터 (저장 버튼)
        onClose={onClose} // 닫기 버튼 클릭 시 호출
    />
);
}

export default Addmodal;
