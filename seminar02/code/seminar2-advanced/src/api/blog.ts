import express, { Request, Response, Router } from "express";
import statusCode from "../modules/statusCode"
import { Blog } from "../interfaces/blog"

const router: Router = express.Router();

const bolg: Blog = {
    title: "제목",
    content: "뭘적어야하죠..여긴.?.."
}

router.get("/", (req: Request, res: Response) => {
  return res.status(statusCode.OK).json({
    status: statusCode.OK,
    message: "blog 조회 성공",
    data: bolg
  });
});

module.exports = router;
