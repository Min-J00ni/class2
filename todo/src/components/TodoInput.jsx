import { useState } from 'react'; // React에서 상태(state)를 관리하기 위한 훅(hook)을 가져옴
import style from "../css/TodoInput.module.css";

// 할 일 추가 컴포넌트 정의 (사용자 입력을 받아 "할 일"을 등록하는 역할)
const TodoInput = ({ addTodo }) => {
    // 상태(state)를 생성: 사용자가 입력한 텍스트를 담기 위해 input이라는 변수를 사용
    const [input, setInput] = useState(''); 
    // input은 현재 상태 값을 의미, setInput은 input 상태를 변경하는 함수

    // ✅ 할 일 추가하는 함수 (사용자가 입력한 값을 저장하고 비워주는 역할)
    const handleAdd = () => {
        if (input.trim()) { 
            // trim(): 공백을 제거하는 함수, 아무것도 안 적었으면 등록 안 함
            addTodo(input); // 부모 컴포넌트에서 전달받은 addTodo 함수로 할 일을 전달
            setInput(''); // 입력 칸을 비움 (새로운 할 일을 적을 수 있게 초기화)
        }
    };

    // ✅ 키보드 "Enter"를 감지하는 함수
    const handleKeyDown = (e) => {
        if (e.keyCode === 229) return;
        // 맥에서 한글을 입력하는 동작(onKeyDown/Up)에서 함수 콜링이 두번 중첩되는 이슈가 있어 해결책 삽입
        if (e.key === 'Enter') handleAdd(); 
        // 사용자가 Enter를 누르면 handleAdd() 함수를 실행 (할 일 추가)
    };

    // ✅ UI 화면에 보이는 부분
    return (
        <div className={style.container}>
            {/* 사용자가 입력할 수 있는 텍스트 상자 */}
            <input
                type="text" // 텍스트를 입력하는 타입
                value={input} // 입력 상자의 값은 input 상태와 연결
                onChange={(e) => setInput(e.target.value)} 
                // 사용자가 입력할 때마다 setInput으로 상태를 업데이트
                onKeyDown={handleKeyDown} 
                // 키보드 입력을 감지, Enter를 누르면 할 일 추가
                placeholder="Plz add list🌟" 
                // 아무것도 입력하지 않았을 때 보이는 안내 텍스트
                className={style.todoInput}
            />
            {/* 사용자가 "등록" 버튼을 누르면 handleAdd() 실행 */}
            <button onClick={handleAdd}> Add </button>
        </div>
    );
};

export default TodoInput; 
// 다른 곳에서 이 컴포넌트를 사용할 수 있게 내보냄
