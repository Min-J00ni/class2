import React from "react";

// Header 컴포넌트
function Header({ completedCount, onAddCategory }) {
return (
    <header style={styles.headerContainer}>
        {/* 1. To-Do 타이틀 */}
        <h1 style={styles.title}>
        To-Do

        {/* 2. 완료된 리스트 개수 표시 */}
        <span style={styles.completedCount}> {completedCount}</span>
        </h1>

        {/* 3. 카테고리 추가 버튼 */}
        <button
        style={styles.addButton}
        onClick={onAddCategory} // 클릭 시, 카테고리 추가 이벤트 실행
        aria-label="카테고리 추가"
        >
        +
        </button>
    </header>
);
}