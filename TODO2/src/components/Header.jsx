import React from "react";
import IconButton from "../common/IconButton"; // 공통 컴포넌트 (아이콘 버튼)
import { Add as PlusIcon } from "@mui/icons-material"; // Google Material Icons에서 + 아이콘
import styles from "./Header.module.css"; // CSS 모듈로 스타일 불러오기
import CompleteIcon from "../assets/complete-icon.svg"; // 에셋 폴더에서 완료 아이콘 불러오기

function Header({ completedCount, onAddCategory }) {
    // 조건에 따라 다른 스타일 클래스 이름을 설정
    // 만약 completedCount > 0 (완료된 리스트가 하나 이상 있다면),
    // 강조 스타일(styles.completedCountActive)을 사용
    // 아니면 기본 스타일(styles.completedCount)을 사용
const completedCountClass =
    completedCount > 0 ? styles.completedCountActive : styles.completedCount;

return (
    <header className={styles.headerContainer}>
        {/* 타이틀 영역 */}
        <div className={styles.titleContainer}>
        {/* 타이틀 텍스트 */}
        <h1 className={styles.title}>
            To-Do
            {/* 완료된 리스트 갯수 */}
            <span className={completedCountClass}>{completedCount}</span>
        </h1>
        {/* 꾸밈용 SVG 이미지 (에셋에서 불러옴) */}
        <img
            src={CompleteIcon} // 완료 아이콘 이미지
            alt="완료 아이콘"
            className={styles.completeIcon} // 스타일 클래스 적용
        />
        </div>

        {/* + 버튼: 카테고리 추가 */}
        <IconButton
            icon={PlusIcon} // Google Material Icons의 + 아이콘
            size={32} // 클릭 영역 크기 (40px)
            iconSize={24} // 아이콘 크기 (24px)
            onClick={onAddCategory} // 클릭 시 실행할 함수
            aria-label="카테고리 추가" // 접근성을 위한 설명
        />
    </header>
);
}

export default Header;
