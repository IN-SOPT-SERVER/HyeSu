console.log(sum(4, 2)); // 선언식: 위에서 불러도 됨

// 함수 선언식 (호이스팅의 영향을 받는다)
function sum(a, b) {
    return a + b;
}

// console.log(add(1, 2)); // 표현식: 위에서 부르면 안됨 ReferenceError: Cannot access 'add' before initialization

// 함수 표현식 (실행흐름이 해당 함수에 도달했을 때부터 사용할 수 있다.)

const sum2 = (a, b) => {
    return a + b;
};

const add = (a, b) => a + b;
const hello = name => console.log(`${name}, hello~`);
const info = (name, age) => ({name, age});

console.log(add(1, 2));