import React from "react";
import PropTypes from "prop-types";
import "../../css/Btn.css"; // 스타일은 별도의 CSS 파일로 관리

/**
    * 공통 버튼 컴포넌트
    * - 라인 형태, 기본 형태, 아이콘 포함 등 다양한 스타일로 사용 가능
    * - 디자이너와 개발자 간의 협업을 고려하여 재사용성 및 확장성을 강화
    *
    * Props:
    * - variant: 버튼 스타일 ('default', 'outlined', 'icon') 중 선택
    * - size: 버튼 크기 ('small', 'medium', 'large') 중 선택
    * - color: 버튼 색상 (primary, secondary, danger 등)
    * - icon: 버튼에 표시할 아이콘 컴포넌트 (React Node)
    * - children: 버튼 내부의 텍스트
    * - onClick: 버튼 클릭 시 호출되는 함수
    */

const ActionButton = ({
    variant = "default", // 기본 스타일
    size = "medium", // 기본 크기
    color = "primary", // 기본 색상
    icon, // 버튼 왼쪽에 표시될 아이콘
    children, // 버튼의 텍스트
    onClick, // 클릭 이벤트 핸들러
    disabled = false, // 버튼 비활성화 상태
}) => {
    // 버튼 클래스 이름 생성
    const className = `action-button ${variant} ${size} ${color} ${
    disabled ? "disabled" : ""
    }`;

    return (
    <button className={className} onClick={onClick} disabled={disabled}>
        {icon && <span className="button-icon">{icon}</span>} {/* 아이콘 표시 */}
        <span className="button-text">{children}</span> {/* 버튼 텍스트 */}
    </button>
    );
};

// PropTypes를 이용한 타입 확인
ActionButton.propTypes = {
    variant: PropTypes.oneOf(["default", "outlined", "icon"]),
    size: PropTypes.oneOf(["small", "medium", "large"]),
    color: PropTypes.string,
    icon: PropTypes.node,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

export default Btn;
