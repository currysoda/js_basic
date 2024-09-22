/* https://ko.javascript.info/ 
 * 코어 자바스크립트
 * 1.1.1 ~ 1.2.5
 */

let message = 123456;

console.log(message);

let message2 = "hello";

console.log(message2);

let message3 = 12345 / 0; // Infinity 반환

console.log(message3); // Infinity 반환

let message4 = 12345 / "hello"; // NaN 반환

console.log(message4); // NaN 반환

// alert(1n + 2); // 기본 자료형과 BigInt 를 사칙연산에 같이 쓰면 에러 발생


console.log(2n > 1); // true

console.log(2n > 1n); // true

console.log(1 == 1n); // true

console.log(1 === 1n); // false

// 0n === false
if (0n) {
    // 실행되지 않습니다.
    console.log("출력되지 않습니다."); // 0
}

// || && 같은 논리 연산자에도 일반 숫자처럼 적용됩니다.

console.log(true || false); // true

console.log(false || false); // false

console.log(true && false); // false

console.log(true && true); // true

console.log(1n || 2); // 1

console.log(0n || 2); // 2

console.log(1n && 2); // 2

console.log(0n && 2); // 0

let str1 = "Hello";
let str2 = 'hello';
let str3 = `${str1}`;

console.log(str1);

console.log(str1);

console.log(str1);

let str4 = str3[0];

console.log(str4);

let isGreater = 4 > 1;

console.log(isGreater); // true (비교 결과: "yes")

let age;

console.log(age); // undefined

let name = undefined // 명시적으로 undefined 할당도 가능합니다.

console.log(name) // undefined

console.log(typeof 0); // number

console.log(typeof (undefined)); // undefined

console.log(typeof true); // boolean

console.log("hello"); // string

console.log(typeof Symbol("id")); // symbol

console.log(typeof Math); // object

console.log(typeof null); // object 

console.log(typeof alert); // function

let user1 = new Object(); // 객체 생성자
let user2 = {}; // 객체 리터럴 문법

// key : value 쌍으로 구성된 프로퍼티가 들어갑니다.

let user3 = {
    name: "John", // 키 : name , 값 : "John"
    age: 30       // 키 : age ,  값 : 30
};

// 프로퍼티 값 얻기

console.log(user3.name); // "John"
console.log(user3.age); // 30

// 프로퍼티 값 추가

user3.isAdmin = true;

console.log(user3.isAdmin); // true

// 프로퍼티 값 삭제

delete user3.isAdmin;

console.log(user3.isAdmin); // undefined

// 여러 단어를 조합한 프로퍼티 키는 "" 로 묶어야 합니다.

let user4 = {
    "user4Name": "John", // 키 : name , 값 : "John"
    "user4Age": 30,      // 키 : age ,  값 : 30	
    "likes birds": true, // , (쉼표) 로 끝낼 수 있습니다. 
};

// 묶은 프로퍼티를 접근할 때 대괄호를 사용합니다.

console.log(user4["likes birds"]); // true

// 대괄호 표기법을 사용할 때는 문자열이 따옴표로 묶여있어야 합니다.

console.log(user4["user4Age"]); // 30

console.log(user4.user4Age); // 이런 방법으로도 가능

let key = "user4Age";

console.log(user4[key]); // 변수를 선언해서 접근도 가능 / 대괄호 안의 변수는 런타임에 정해진다.

console.log(user4.key); // undefined 
// 변수 사용시 점 표기법(dot notation)은 불가능하다


const user5 = {
    "user5name": "Jo bi",
};

let user6 = {
    "user6name": "user6",
}

user5["user5name"] = "jo ni"; // const 선언된 객체도 내부 프로퍼티를 변경 가능하다.

// user5 = user6; // 에러 발생

console.log(user5["user5name"]); // "jo ni"


let fruit = "fruit";

let user7 = {
    [fruit]: "apple", // 변수로 프로퍼티의 이름을 작성할 수 있습니다.
};

console.log(user7["fruit"]); // "apple"
console.log(user7.fruit); // "apple"

let user8name = "user8name"; // 객체 프로퍼티 생성용
let user8age = "user8age"; // 객체 프로퍼티 생성용

let user8 = {
    user8name, // user8name : "user8name", 과 같은 효과
    user8age, // user8age : "user8age", 과 같은 효과
};

let user9name = "user9name";
let user9age = "user9age";

let user9 = {
    user9name,
};

// 프로퍼티의 존재 여부 확인 undefined 와의 비교

console.log(user9.user9name === undefined); // false
console.log(user9.user9age === undefined); // true  user9.user9age 가 존재하지 않음을 의미

// 프로퍼티의 존재 여부 확인 in 연산자

console.log(user9name in user9); // true
console.log(user9age in user9); // false

// for..in 반복문

let user10 = {
    "property1": 1,
    "property2": 2,
    "property3": 3,
    "property4": 4,
};

for (let key in user10) {
    console.log(key); // property name
    console.log(user10[key]); // property value
};


let user11 = {
    // 정수 프로퍼티는 정렬된다.
    "10": 10,
    "5": 5,
    "3": 3,
    "1": 1,
    "4": 4,
    20: 20,
    // 여기부터는 작성한 순서대로
    "property1": 1,
    "property3": 3,
    "property2": 2,
};

// 정수 프로퍼티 정렬 확인
for (let key in user11) {
    console.log(key); // property name
    console.log(user11[key]); // property value
};

