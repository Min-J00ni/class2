import React from "react";
import Btn from "./reusable/Btn"; // 공통 버튼 컴포넌트 불러오기
import styles from "../css/PopupModal.module.css"; // 모달 스타일 불러오기

/**
    * ConfirmModal 컴포넌트
    * @param {string} message - 모달에 표시할 메시지
    * @param {function} onConfirm - "예" 버튼 클릭 시 호출되는 함수
    * @param {function} onCancel - "아니오" 버튼 클릭 시 호출되는 함수
*/
function ConfirmModal({ message, onConfirm, onCancel }) {
return (
    <div className={styles.modalOverlay}>
        {/* 모달 컨테이너 */}
        <div className={styles.modalContent}>
        {/* 메시지 표시 */}
        <p className={styles.modalMessage}>{message}</p>

        {/* 버튼 그룹 */}
        <div className={styles.buttonGroup}>
            {/* 예 버튼: 공통 Btn 컴포넌트 사용 */}
            <Btn
            onClick={onConfirm} // "예" 버튼 클릭 시 호출
            variant="danger" // 공통 버튼 스타일 (위험 강조)
            size="medium" // 버튼 크기 설정
            >
            예
            </Btn>

            {/* 아니오 버튼: 공통 Btn 컴포넌트 사용 */}
            <Btn
            onClick={onCancel} // "아니오" 버튼 클릭 시 호출
            variant="default" // 공통 버튼 스타일 (기본 스타일)
            size="medium" // 버튼 크기 설정
            >
            아니오
            </Btn>
        </div>
        </div>
    </div>
    );
}

export default PopupModal;
