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
        message: "멤버 조회 성공",
        data: members
    });
});

module.exports = router;
