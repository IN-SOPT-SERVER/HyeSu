console.log("하이");

const sym1 = Symbol();
const sym2 = Symbol();
const sym3 = Symbol('foo');
const sym4 = Symbol('foo');

console.log(sym1 === sym1); // true
console.log(sym1 === sym2); // false
console.log(sym3 === sym4); // false

/**
 * Object
 */

const user = {
    email: "kimhyesooo@naver.com",
    name: "혜수",
    favorites: ["연어", "삼겹살", "소맥"],
    introduce: function () {
        console.log(`${this.name}입니다. ${this.favorites}좋아함`);
    },
    getFavoriteFoods: function () {
        this.favorites.forEach((food) => {
            console.log(`${food} 좋아함`);
        });
    },
};

console.log(user.introduce()); // 혜수입니다. 연어,삼겹살,소맥좋아함
console.log(user.getFavoriteFoods()); 
/*
연어 좋아함
삼겹살 좋아함
소맥 좋아함
*/

const arr1 = ["하이", 10, true];
const arr2 = Array(1, null, "우왕", false, { sopt: "server" });

arr1.map((item) => console.log("item1:", item));
arr2.map((item) => console.log("item2:", item));



