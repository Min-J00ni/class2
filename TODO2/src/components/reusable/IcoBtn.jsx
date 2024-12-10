import React from "react";
import styles from "../../css/IcoBtn.module.css"; // CSS 모듈 import

function IconButton({ icon: Icon, onClick, size = 32, iconSize = 24, style = {}, ...props }) {
  return (
    <button
      onClick={onClick}
      className={styles.button} // 기본 스타일 적용
      style={{
        width: size, // 버튼 클릭 영역 크기
        height: size,
        ...style, // 사용자 정의 스타일 적용
      }}
      {...props}
    >
      <Icon
        style={{
          width: iconSize, // 아이콘 크기
          height: iconSize,
        }}
        className={styles.icon}
      />
    </button>
  );
}

export default IcoBtn;
