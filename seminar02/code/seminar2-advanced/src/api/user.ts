import express, { Request, Response, Router } from "express";
import { User } from "../interfaces/user";
import statusCode from "../modules/statusCode"

const router: Router = express.Router();

const user: User =
{
  name: "혜수",
  age: 25,
  isSopt: true
}

router.get("/", (req: Request, res: Response) => {
  return res.status(statusCode.OK).json({
    status: statusCode.OK,
    message: "유저 조회 성공",
    data: user
  });
});

module.exports = router;
