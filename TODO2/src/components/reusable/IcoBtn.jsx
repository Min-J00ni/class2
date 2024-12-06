import React from "react";

function IconButton({ icon, onClick, style = {}, ...props }) {
    return (
    <button
        onClick={onClick}
        style={{
        ...styles.button,
        ...style, // 사용자 정의 스타일 적용
        }}
        {...props}
    >
      {icon} {/* 아이콘을 여기에 표시 */}
    </button>
    );
}


export default IconButton;
