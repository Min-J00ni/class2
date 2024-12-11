import React from "react";
import styles from "../../css/Modal.module.css"; // CSS 모듈 import
import IcoBtn from "./IcoBtn.jsx"; // 공통 아이콘 버튼
import { Close as CloseIcon } from "@mui/icons-material"; // Google Material Icons Close 아이콘

/**
    * Modal 컴포넌트
    * @param {React.ReactNode} Header - 모달의 헤더 영역 JSX
    * @param {React.ReactNode} Content - 모달의 콘텐츠 영역 JSX
    * @param {React.ReactNode} Footer - 모달의 푸터 영역 JSX
    * @param {function} onClose - 모달 닫기 핸들러
    */
const Modal = ({ Header, Content, Footer, onClose }) => (
    <div className={styles.overlay}>
    <div className={styles.modal}>
        {/* 헤더 영역 */}
        {Header && (
        <div className={styles.header}>
            {Header}
            <IcoBtn
            icon={<CloseIcon />}
            size={32}
            iconSize={24}
            onClick={onClose}
            aria-label="닫기"
            />
        </div>
        )}

        {/* 콘텐츠 영역 */}
        <div className={styles.content}>{Content}</div>

      {/* 푸터 영역 */}
        {Footer && <div className={styles.footer}>{Footer}</div>}
    </div>
    </div>
);

export default Modal;
