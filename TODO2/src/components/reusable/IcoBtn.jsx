import React from "react";
import styles from "../../css/IcoBtn.module.css"; // CSS 모듈 import

const IcoBtn = ({ icon: Icon, size = 32, iconSize = 24, onClick, ...props }) => (
  <button
    onClick={onClick}
    className={styles.button} // 스타일 적용
    style={{ width: size, height: size }}
    {...props}
  >
    <Icon
      style={{
        width: iconSize,
        height: iconSize,
      }}
      className={styles.icon} // 아이콘 스타일 적용
    />
  </button>
);

export default IcoBtn;
