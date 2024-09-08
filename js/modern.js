
let message = 123456;

alert(message);

let message2 = "hello";

alert(message2);

let message3 = 12345 / 0; // Infinity 반환

alert(message3); // Infinity 반환

let message4 = 12345 / "hello"; // NaN 반환

alert(message4); // NaN 반환

// alert(1n + 2);

alert(2n > 1); // true

alert(2n > 1n); // true

alert(1 == 1n); // true

alert(1 === 1n); // false

// 0n === false

if (0n) {
    // 실행되지 않습니다.
    alert("출력되지 않습니다.");
}

// || && 같은 논리 연산자에도 일반 숫자처럼 적용됩니다.

alert(true || false); // true

alert(false || false); // false

alert(true && false); // false

alert(true && true); // true

alert(1n || 2); // 1

alert(0n || 2); // 2

alert(1n && 2); // 2

alert(0n && 2); // 0