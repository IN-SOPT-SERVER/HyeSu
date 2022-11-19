import { Router } from 'express';
import { userController } from '../controller';

const router: Router = Router();

router.get('/:userId', userController.getUserById);

router.post('/', userController.createUser);
router.get('/', userController.getAllUser);
router.patch('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);

export default router;