import React from "react";

// 이 함수는 재사용 가능한 'Input' 컴포넌트
// 쉽게 말하면, 이 컴포넌트는 우리가 화면에서 글을 입력할 수 있는 '입력창'
function Input({ value, onChange, placeholder, style = {}, ...props }) {
return (
    // 이건 실제로 화면에 나타날 '입력창(input 태그)'
    <input
        // 'value'는 입력창에 현재 들어있는 글자
        // 예를 들어, 입력창에 '안녕하세요'라고 적혀 있으면, 그게 바로 'value'가 되는 
        type="text" // 입력창의 타입을 'text'로 설정했어요. 즉, 글자를 입력할 수 있다는 뜻이에요.
        value={value} // 현재 입력창에 들어갈 글자를 여기에 연결
        onChange={onChange} // 입력창에서 글자를 바꿀 때마다 실행될 동작(함수)을 연결
        placeholder={placeholder} // 입력창에 아무것도 입력하지 않았을 때 나타나는 안내문구를 설
        style={{
        ...styles.input, // 입력창에 기본으로 적용할 스타일을 불러옴
        ...style, // 사용자가 특별히 추가로 설정한 스타일도 적용
        }}
        {...props} // 나머지 전달받은 속성들도 모두 적용
    />
);
}


// 이 파일에서 만든 'Input' 컴포넌트를 다른 곳에서도 사용할 수 있도록 내보내요.
export default Input;
