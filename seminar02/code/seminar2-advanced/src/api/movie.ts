import express, { Request, Response, Router } from "express";
import { Movie } from "../interfaces/movie";
import statusCode from "../modules/statusCode"

const router: Router = express.Router();

const movie: Movie = {
    title: "업",
    director: "Pete Doctor"
}

router.get("/", (req: Request, res: Response) => {
  return res.status(statusCode.OK).json({
    status: statusCode.OK,
    message: "영화 정보 조회 성공",
    data: movie
  });
});

module.exports = router;
