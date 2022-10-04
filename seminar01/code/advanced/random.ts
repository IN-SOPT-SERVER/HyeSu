/* 
도전 과제 조건
1. Member, Dinner interface 만들고 타입 지정하기
2. organize 내부 로직 채우기
*/

interface Member {
    name: string,
    group: string,
}

interface Dinner {
    members: Member[],
    foods: string[],
    shuffle: ((array: Member[] | string[]) => Member[] | string[]),
    organize: (array: Member[], foods: string[]) => void,
}

const dinner: Dinner = {
    members: [
        {
            name: "권세훈",
            group: "ob",
        },
        {
            name: "김혜수",
            group: "ob",
        },
        {
            name: "남지윤",
            group: "ob",
        },
        {
            name: "이종현",
            group: "ob",
        },
        {
            name: "박수린",
            group: "yb",
        },
    ],
    foods: [
        "회",
        "삼겹살",
        "된장찌개",
        "돈까스",
    ],
    shuffle(array) {
        array.sort(() => Math.random() - 0.5);
        return array;
    },
    organize(array, foods) {
        this.shuffle(array);
        this.shuffle(foods);
        console.log(`결과 ${array[0].name}랑 ${array[1].name} 저녁먹기, 메뉴: ${foods[0]}`);
    },
};

dinner.organize(dinner.members, dinner.foods);