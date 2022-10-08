/* 
도전 과제 조건
1. Member, Dinner interface 만들고 타입 지정하기
2. organize 내부 로직 채우기
*/

import { Dinner } from "./interface/dinner"


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
        {
            name: "회",
            category: "일식"
        },
        {
            name: "삼겹살",
            category: "한식"
        },
        {
            name: "된장찌개",
            category: "한식"
        }, 
        {
            name: "돈까스",
            category: "일식"
        }
    ],
    shuffle(array) {
        array.sort(() => Math.random() - 0.5);
        return array;
    },
    organize(members, foods) {
        this.shuffle(members);
        this.shuffle(foods);
        console.log(`결과: ${members[0].name}랑 ${members[1].name} 저녁먹기, 메뉴: ${foods[0].name}(${foods[0].category})`);
    },
};

dinner.organize(dinner.members, dinner.foods);
