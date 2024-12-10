import React from "react";
import styles from "../../css/Modal.module.css"; // CSS 모듈 import
import IcoBtn from "./IcoBtn"; // 공통 아이콘 버튼
import { Close as CloseIcon } from "@mui/icons-material"; // Google Material Icons Close 아이콘


function Modal({ Header, Content, Footer, onClose }) {
    return (
        <div className={styles.overlay}>
        <div className={styles.modal}>
        {/* 타이틀 영역 (title이 있을 경우에만 렌더링) */}
        {title && (
            <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <IcoBtn
                icon={CloseIcon}
                size={32}
                iconSize={24}
                onClick={onClose}
                aria-label="닫기"
            />
        </div>
    )}

            {/* 콘텐츠 */}
            <div className={styles.content}>{Content}</div>

            {/* 푸터 */}
            {Footer && <div className={styles.footer}>{Footer}</div>}
        </div>
        </div>
    );
}

export default Modal;
