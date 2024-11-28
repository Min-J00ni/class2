//리액트 수업 app.js

//방법1
//일반적인 모듈 갖고오기
//import { add, subtract } from "./math.js"
//console.log(Math.add(2, 3)); // 출력: 5

//export 디폴트로 불러오는 경우
//import multiply from "./math.js"
//이친구는 스코프에 감싸면 문제가 생김

//방법2
//모듈을 전체 갖고올 때 사용
//import * as Math from './math.js';
//몽땅갖고와서 math라는 객체라고 사용할거임
//console.log(Math.add(2,3)); //출력 5가 나올거임

//방법3
//이름 변경해서 갖고오기
//import { add as sum } from "./math.js";
//원본은 유지.데려와서 이름 변경사용
//원본가서 바꾸면 원본을 가져다쓰는 다른파일에 엄청나게 영향을 받음
//함부로 
//제2의 이름으로 sum이라고 이름을 붙인 개념
//console.log(sum(2,3));//출력 5
//변경해서 쓰면 오류남


// 일반적으로 ESM은 정적이지만 동적(비동기)으로 가져오기
async function loadModule() {
    //로드 모듈을 선언할게!
    const module = await import('./math.js');
    // 몽땅 가져와서 module이라는 객체라고 쓸게
    console.log(module.add(2, 3)); // 출력: 5
  } //그걸 함수 loadModule라고 선언한다?

  // 콜링 = 선언한 애 불러보겠음
loadModule();