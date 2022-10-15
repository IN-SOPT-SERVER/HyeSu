import express, { Request, Response, Router } from "express";
import statusCode from "../modules/statusCode"
import { Member } from "../interfaces/member"

const router: Router = express.Router();

const members: Member[] = [
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
    {
        name: "최승빈",
        group: "ob"
    }
]

router.get("/", (req: Request, res: Response) => {
    return res.status(statusCode.OK).json({
        status: statusCode.OK,
        message: "멤버 전체 조회 성공",
        data: members
    });
});

router.get("/:name", (req: Request, res: Response) => {
    const name = req.params.name;

    const member = members.find((member) => {
        return member.name === name
    });

    if (member === undefined) {
        return res.status(statusCode.NOT_FOUND).json({
            statusCode: statusCode.NOT_FOUND,
            message: `${name}이라는 분은 안계셔요`
        })
    }

    return res.status(statusCode.OK).json({
        status: statusCode.OK,
        message: "멤버 이름으로 조회 성공",
        data: member
    }); 
});

module.exports = router;
