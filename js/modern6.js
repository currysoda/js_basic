"use strict";

alert("Hello");

let result = prompt("값을 입력해주세요", "default");
// title : 사용자에게 보여줄 문자열 default : 입력 필드의 초깃값(선택값)
// 인수를 감사는 [] 대괄호는 필수가 아닌 선택값이라는 것을 의미합니다.

console.log(`입력값은 = ${result}`);

// confirm

result = confirm("예/아니오");

if (result === true) {
    console.log("확인");
}

else if (result === false) {
    console.log("취소");
}

// 형 변환

// 문자형 변환
let value = true;

console.log(value); // true
console.log(typeof value); // boolean

value = String(value);

console.log(value); // true
console.log(typeof value); // string

// 숫자형 변환
let str1 = "10";

console.log(str1); // 10
console.log(typeof str1); // string

console.log("10" / "2"); // 5

str1 = Number(str1);

console.log(str1); // 10
console.log(typeof str1); // number

// 숫자형 변환 규칙

console.log(Number("  123  ")); // 123
console.log(Number("  123z ")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0

// 불린형 변환 규칙

console.log(Boolean(0)); // false 
console.log(Boolean(NaN)); // false 
console.log(Boolean(null)); // false 
console.log(Boolean(undefined)); // false 
console.log(Boolean("")); // false 
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // true
console.log(Boolean("내용이 있는 문자열")); // true


// 기본연산자

let num1 = 1;

num1 = -num1; // - 의 단항 연산자는 부호를 뒤집습니다.
console.log(num1); // -1

let num2 = 5;
let num3 = 3;

console.log(num2 - num3); // 2, - 의 이항 연산자는 뺄셈을 해줍니다.


console.log("Java" + "script");


// 거듭제곱 연산자 **

console.log(2 ** 3); // 8
console.log(2 ** (1 / 2)); // 1.414...
console.log(4 ** (1 / 2)); // 2


// 이항 연산자 ‘+’ 와 문자열 연결

console.log(2 + "2"); // 22

console.log(2 - "2"); // 0

console.log(2 + 2 + "2") // 42


// 단항 연산자 ‘+’ 와 숫자형으로 변환

let num4 = 1;

console.log(num4);
console.log(typeof num4);

num4 = +num4;

console.log(num4);
console.log(typeof num4);

let str2 = "1";

console.log(str2);
console.log(typeof str2);

str2 = +str2;

console.log(str2);
console.log(typeof str2);

// 할당 연산자

let num5 = 10 + 5 + 7;

console.log(num5);














