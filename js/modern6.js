/* https://ko.javascript.info/ 
 * 코어 자바스크립트
 * 1.2.6 ~ 
 */

// "use strict";

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


console.log("Java" + "script"); // Javascript


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

console.log(num4); // 1
console.log(typeof num4); // number

num4 = +num4;

console.log(num4); // 1
console.log(typeof num4); // number

let str2 = "1";

console.log(str2); // 1
console.log(typeof str2); // string

str2 = +str2;

console.log(str2); // 1
console.log(typeof str2); // number


// 할당 연산자

let num5 = 10 + 5 + 7;

console.log(num5); // 22


// 비트 연산자
let num6 = 2;

// 비트 and
console.log(num6 & 5); // 0
// 비트 or 
console.log(num6 | 5); // 7
// 비트 xor
console.log(num6 ^ 5); // 7
// 비트 not
console.log(~num6); // -3
// 비트 쉬프트 왼쪽 <<
console.log(num6 << 1); // 4
// 비트 쉬프트 오른쪽 >>
console.log(num6 >> 1); // 1
// 비트 쉬프트 부호 없는 오른쪽 >>>
console.log(num6 >>> 1); // 1


// 쉼표 연산자 
// 쉼표의 마지막 값만 반환됩니다.

let num7 = (1 + 2, 3 + 4); // 할당 연산자보다 우선순위가 낮기 때문에 () 괄호 안에 배치합니다.

console.log(num7); // 7

console.log((1 + 2, 3 + 4, 5 + 6, 7 + 8)); // 15

// use strict 꺼야 작동
let sum = 0

for (a = 1, b = 3, c = a * b; a < 10; a++) {
    sum += c;
    console.log(`c = ${c} | sum = ${sum} \n`);
}


// 비교 연산자

let num8 = 1;
let num9 = 2;
let num10 = 2;

console.log(num8 > num9); // false
console.log(num8 < num9); // true
console.log(num9 == num10); // true
console.log(num9 != num10); // false
console.log(num8 != num10); // true

let str3 = "apple";
let str4 = "apple";
let str5 = "banana";

console.log(str3 == str4); // true
console.log(str4 == str5); // false
console.log(str4 > str5); // false
console.log(str4 < str5); // true


// 다른 형을 가진 값 간의 비교

console.log('1' == 1); // true
console.log('01' == 1); // true
console.log('2' > 1); // true
console.log(true == 0); // false

// 0은 false 이지만 문자열 "0" 은 true 입니다.

console.log(Boolean(0)); // false
console.log(Boolean("0")); // true


// 일치 연산자

console.log(0 == false); // true
console.log('' == false); // true

console.log(0 === false);
console.log('' === false);



console.log("end");