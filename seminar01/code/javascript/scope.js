/**
 * Function Scope (var)
 * block의 영향을 받지 않고 접근할 수 있다.
 */
if (true) {
    var x = "var";
}
console.log("x: ", x);

/**
 * Block Scope (let, const)
 * 특정 블록 선언한 변수는 외부에서 접근할 수 없다.
 */
if (true) {
    let y = "let";
}
// console.log("y: ", y); // 오류 ReferenceError: y is not defined

/**
 * function scope가 funcion을 벗어난 경우
*/

function func() {
    if (true) {
        var test = "var";
        console.log("test: ", test);
    }

    console.log("test: ", test);
}

func();
// console.log("test: ", test); // 함수밖에서 불가
