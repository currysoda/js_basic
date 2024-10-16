/**
 * Chrome 으로 디버깅 하기
 * 
 */

function hello(name) {
    let phrase = `Hello ${name}`;

    debugger; // 중단점 명시

    say(phrase);
}

function say(phrase) {
    console.log(` ** ${phrase} ** `);
}

hello("Tom");