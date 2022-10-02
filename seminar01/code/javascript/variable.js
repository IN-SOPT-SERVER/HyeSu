// var (재선언 가능한 변수)

var myName = "김해수";
console.log(`${myName} is wrong name.`); // 출력: 김해수 is wrong name.

var myName = "김혜수"; // 다시 선언할 수 있음
console.log(`My name is ${myName}`); // 출력: My name is 김혜수

// let (변수)

let part = "iOS";
//let part = "server" // 오류 (재선언 불가)
part = "server"; // 재할당 가능

console.log(part);

// const (상수)

const school = "SOPT";
// const school = "SPOT"; // 재선언 안됨
// school = "SSOPT"; // TypeError: Assignment to constant variable.

console.log(school);