import { Request, Response } from "express";
import { userService } from "../service";

const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const data = await userService.getUserById(+userId);

  if (!data) {
    return res.status(404).json({ status: 404, message: "NOT_FOUND" });
  }
  return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};

//* 유저 생성
const createUser = async (req: Request, res: Response) => {
  
  /*
  {
    "name": "gd",
    "email": "e",
    "age": 10
  }

  ->
  비구조 할당  (이름 같은거끼리 알아서 할당됨)
  const { name, email, age } = req.body
  */

  const { userName, email, age } = req.body
  
  // Service의 createUser에서 넘어온 값을 데이터에 넣음
  const data = await userService.createUser(userName, email, age);
  console.log(data)

  if (!userName || !email || !age) {
    return res.status(400).json({ status: 400, message: "다 안들어옴"});
  }

  // 데이터가 없는 경우
  if (!data) {
    return res.status(404).json({ status: 404, message: "NOT_FOUND" });
  }
  return res.status(200).json({ status: 200, message: "유저 생성 성공", data });
};

//* 유저 전체 조회
const getAllUser = async (req: Request, res: Response) => {
  const data = await userService.getAllUser();
  return res.status(200).json({ status: 200, message: "조회성공", data });
};

//* 유저 정보 업데이트
const updateUser = async (req: Request, res: Response) => {
  const { name } = req.body;
  const { userId  } = req.params
  if (!name) {
    return res.status(400).json({ status: 400, message: "이름 안옴"});
  }

  const updatedUser = await userService.updateUser(+userId, name);
  return res.status(200).json({ status: 200, message: "유저 업데이트 성공", updatedUser});

};

//* 유저 삭제
const deleteUser = async (req: Request, res: Response) => {
  const { userId } = req.params;

  await userService.deleteUser(+userId);
  return res.status(200).json({ status: 200, message: "유저 삭제성공"});
};

const userController = {
  getUserById,
  createUser,
  getAllUser,
  updateUser,
  deleteUser
};

export default userController;
