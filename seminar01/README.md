# var, let const

| |var|let|const|
|:--:|:--:|:--:|:--:|
|범위|Function Scope|Block Scope|Block Scope|
|변수 재선언|가능|-|-|
|변수값 재할당|가능|가능|-|
|초기화값 필요|-|-|필요|

`var`의 경우 변수재선언, 재할당, 호이스팅 등의 문제로 사용하지 않는 것이 좋다.

-> 대신 `let`과 `const`를 쓰자.

<br>

# Scope (범위)

함수스코프와 블록스코프가 있다.(유효범위 차이) 블록스코프를 사용하면 **호이스팅**의 문제를 해결할 수 있다.

### Function Scope

- 유효범위가 **함수 내** (함수밖에서는 접근 불가능!!!!)
- `var`

``` javascript
if (true) {
  var x = "var";
}
console.log("x: ", x);
```

### Block Scope

- 블록의 범위: if { }, while { }, for { }, function { } 등..
- `let`, `const`
- 주어진 코드 블록 안에서만 사용이 가능하며, 외부에서 접근할 수 없다.
```javascript
if (true) {
    let y = "let";
}
// console.log("y: ", y); // 오류 ReferenceError: y is not defined
```

<br>

# Type

## Null과 Undefined

- `Null` : 정해지지 않은 값, 어떤 값이 의도적으로 비어있음을 나타낸다.
    ```javascript
    let a = null; 
    console.log(c); // null
    ```
  
- `Undefined` : 정해지지 않은 타입, 초기화되지 않은 변수, 존재하지 않는 값
  ```javascript
  let b;
  console.log(b); // undefined
  ```

<img width="661" alt="image" src="https://user-images.githubusercontent.com/68391767/193870158-88bca0ca-b3ee-470f-b218-0c55a971149a.png">

undefined의 경우 변수를 선언한 후 값을 할당하지 않은 상태 (..생기다만상태..?), null은 변수를 선언한 후 빈 값을 할당한 상태이다.
