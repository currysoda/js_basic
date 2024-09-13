
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
console.log(typeof value); // boolean

// 숫자형 변환
let str1 = "10";

console.log(str1);
console.log(typeof str1);

