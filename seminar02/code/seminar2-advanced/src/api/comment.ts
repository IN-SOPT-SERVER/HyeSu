import express, { Request, Response, Router } from "express";
import statusCode from "../modules/statusCode"

const router: Router = express.Router();

const comments: string[] = [
    "퍼가요~",
    "안녕하세요",
    "하이하이",
    "내공냠냠"
]

router.get("/", (req: Request, res: Response) => {
  return res.status(statusCode.OK).json({
    status: statusCode.OK,
    message: "댓글 조회 성공",
    data: comments
  });
});

module.exports = router;
