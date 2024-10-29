import { cloneDeep, merge } from "lodash-es";

// "use strict"

// JS - 1.4.1 객체

// 객체의 생성

let user1 = new Object();
let user2 = {};


// 객체 리터럴 생성

let user3 = {
    name: "john",
    age: 30,
}

// 프로퍼티 값 얻기

console.log(user3.name); // john
console.log(user3.age); // 30

// 프로퍼티 값 추가

user3.isAdmin = true;

console.log(user3.isAdmin); // true

// 프로퍼티 값 삭제

delete user3.isAdmin;

console.log(user3.isAdmin); // undefined


// 여러 단어를 조합한 프로퍼티 키는 "" 로 묶어야 합니다.

let user4 = {
    user4Name: "John", // 키 : name , 값 : "John"
    user4Age: 30,      // 키 : age ,  값 : 30	
    "likes birds": true, // , (쉼표) 로 끝낼 수 있습니다. 
}

// 묶은 프로퍼티를 접근할 때 대괄호를 사용합니다.

console.log(user4["likes birds"]); // true

// console.log(user4.likes birds); // 에러 발생


// 대괄호 표기법을 사용할 때는 문자열이 따옴표로 묶여있어야 합니다.
// 대괄호 표기법은 대괄호 안의 문자를 변수로 인식합니다.

console.log(user4["user4Age"]); // 30

// console.log(user4[user4Age]); // 에러 발생


// 대괄호 표기법

let key = "user4Age";

console.log(user4[key]); // 30 
// 변수를 선언해서 접근도 가능 / 대괄호 안의 변수는 런타임에 정해진다.

console.log(user4.key); // undefined 
// 변수 사용시 점 표기법(dot notation)은 불가능하다.
// user4.key 시 user4 객체안의 "key" 를 그대로 찾게 된다.


// 객체를 const 로 선언

const user5 = {
    user5name : "John",
};

let user6 = {
    user6name : "Jojo",
};

console.log(user5["user5name"]); // John

user5["user5name"] = "not John";

console.log(user5["user5name"]); // not John

// user5 = user6; // 에러 발생

console.log(user5["user5name"]); // not John
console.log(user6["user6name"]); // Jojo

// const로 선언한 객체는 객체가 가리키는 객체 인스턴스 자체가 바뀔 때 오류가 발생
// 하지만 내부 프로퍼티 값을 바꾸는 것은 허용된다.


// 변수로 프로퍼티 선언 계산된 프로퍼티(computed property)

let fruit = "banana";

let user7 = {
    [fruit]: "apple", // 변수로 프로퍼티의 이름을 작성할 수 있습니다.
};

console.log(user7["banana"]); // "apple"
console.log(user7.banana); // "apple"


// 단축 프로퍼티(property value shortand)
// 프로퍼티 작성 시 반복을 줄여줍니다. 단 이미 선언된 변수를 대상으로 해야합니다.

let user8name = "user8name"; // 객체 프로퍼티 생성용
let user8age = "user8age"; // 객체 프로퍼티 생성용

let user8 = {
    user8name, // user8name : "user8name", 과 같은 효과
    user8age, // user8age : "user8age", 과 같은 효과
    // user8isAdmin, // 미리 선언된 변수 없음으로 에러 발생
};


// in 연산자로 프로퍼티 존재 여부 확인하기

console.log(user8name in user8); // true
console.log(user8["user8name"]); // user8name

// === 일치 연산자로 프로퍼티 존재 여부 확인하기

console.log(user8.user8name === undefined); // false
console.log(user8.isAdmin === undefined); // true


// for..in 반복문 객체 프로퍼티 순회

let user9 = {
    "property1": 1,
    "property2": 2,
    "property3": 3,
    "property4": 4,
}

// property name 을 순회한다.

for (let key in user9) {
    console.log(key); // property name
    console.log(user9[key]); // property value
};


// 객체 프로퍼티 자동 정렬
// 정수 프로퍼티는 자동 정렬되고 나머지는 작성한 순서대로 정렬됩니다.

let user10 = {
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

for (let key in user10) {
    console.log(key); // property name
    console.log(user10[key]); // property value
};



// JS - 1.4.2 참조에 의한 객체 복사

// 원시 값 그대로 복사 예제

let message1 = "Hello!";
let message2 = message1;

console.log(message1); // Hello!
console.log(message2); // Hello!

message1 = "Bye!";

console.log(message1); // Bye!
console.log(message2); // Hello!


// 객체 복사 예제
// 객체는 값을 복사하지 않고 참조값을 복사한다.

let byReference1 = {
    "name" : "John",
}

let byReference2 = byReference1; // byReference1 의 객체 주소값 복사

console.log(byReference1["name"]); // John
console.log(byReference2["name"]); // John

byReference1["name"] = "new name hero!"; // byReference1 으로 접근

console.log(byReference1["name"]); // new name hero!
console.log(byReference2["name"]); // new name hero!

byReference2["name"] = "byReference2 new name hero!"; // byReference2 으로 접근

console.log(byReference1["name"]); // byReference2 new name hero!
console.log(byReference2["name"]); // byReference2 new name hero!

// 두 변수가 가리키는 객체가 같다

console.log(byReference1 == byReference2); // true
console.log(byReference1 === byReference2); // true


// 객체 복사, 병합 Object.assign

// 기존 객체와 똑같으면서 독립된 객체를 만드는 방법

// 프로퍼티를 전부 순회하면서 만드는 방법

let originalObject = {
    "name" : "originalObject_name",
    "age" : 25
};

let cloneObject = {

};

for(let key in originalObject) {
    cloneObject[key] = originalObject[key];
}

for(let key in originalObject) {
    console.log(key); // property name
    console.log(originalObject[key]); // property value
}

for(let key in cloneObject) {
    console.log(key); // property name
    console.log(cloneObject[key]); // property value
}

cloneObject["name"] = "cloneObject_name";
cloneObject["age"] = 333;

for(let key in originalObject) {
    console.log(key); // property name
    console.log(originalObject[key]); // property value
}

for(let key in cloneObject) {
    console.log(key); // property name
    console.log(cloneObject[key]); // property value
}

// cloneObject 값을 바꿔도 originalObject 값은 바뀌지 않는다.



// Object.assign 예시

let Object1 = { "ob1" : "ob1"};
let Object2 = { "ob2" : "ob2"};
let Object3 = { "ob3" : "ob3"};

Object3 = Object.assign(Object3, Object1, Object2);

// Object1, Object2 값 변경

Object2["ob2"] = "Object2222";
Object1["ob1"] = "Object1111";

// Object.assign 을 이용해서 Object3 의 값은 바뀌지 않음

for(let key in Object3) {
    console.log(key); // property name
    console.log(Object3[key]); // property value
}


// 중첩 객체 복사

// lodash 를 이용한 예제

let Object4 = {
    property_object1 : {
        property_object1_property1 : "property_object1_property1",
        property_object1_property2 : "property_object1_property2",
    },

    name : "Object4_name",
    age: 30,
};

// lodash.cloneDeep() 함수 사용
let Object5 = cloneDeep(Object4);

console.log(Object5);

console.log(Object5["property_object1"]);

console.log(Object5["property_object1"]["property_object1_property1"]); // property_object1_property1
