interface Server {
    name: string,
    age: number,
    address: string,
    mbti: string,
    favoriteFood: string
    alchole: string
}

const members: Server[] = [
   {
    name: "천호영",
    age: 24,
    address: "하남",
    mbti: "ENFJ",
    favoriteFood: "소주(진로)",
    alchole: "한병"
   },
   {
    name: "권세훈",
    age: 24,
    address: "남영",
    mbti: "ENTP",
    favoriteFood: "연어",
    alchole: "다섯병"
   }
]

members.map((member) =>
    console.log(`${member.name}의 MBTI는 ${member.mbti}이고, 나이는 ${member.age}, 사는 곳은 ${member.address}입니다.`)
)