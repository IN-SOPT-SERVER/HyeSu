// 타입단언

// angle-bracket

let test: any = "김혜수";
let testLength: number = (<string>str).length;
console.log(`${typeof testLength}, ${testLength}`);

// as

let str2: any = "김해수";
let str2Length: number = (str2 as string).length;
console.log(`${typeof str2Length}, ${str2Length}`);
