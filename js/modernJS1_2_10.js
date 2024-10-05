/* https://ko.javascript.info/ 
 * 코어 자바스크립트
 * 1.2.10 ~ 
 */

// "use strict";


// if ~ else if ~ else 조건문

let score = prompt("점수를 입력해주세요", 0);

if (score >= 90) {
    console.log("A");
}
else if (score >= 80) {
    console.log("B");
}
else if (score >= 70) {
    console.log("C");
}
else {
    console.log("F");
}

// ? 를 이용한 조건문
// 조건문 ? true : false

console.log(((score >= 70) ? "pass" : "fail"));

// ? 를 이용한 다중 조건문

let result =
    score >= 90 ? "A" :
        score >= 80 ? "B" :
            score >= 70 ? "C" :
                "fail"

console.log(result);


// 논리 연산자

console.log(true || true);   // true
console.log(false || true);  // true
console.log(true || false);  // true
console.log(false || false); // false



function fun1() {

};




console.log("end");