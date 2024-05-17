import { Router, Request, Response } from "express";
import AccountController from "../controllers/account.controller";
import TokenMiddleware from "../middleware/token.middleware";
import TaskController from "../controllers/task.controller";
import AccountValidator from "../validators/account.validators";

const router = Router();


router.post('/createaccount', AccountValidator.signup, AccountController.createAccount);
router.post('/loginaccount', AccountValidator.signin, AccountController.loginAccount);

// SECURED ACCOUNT ROUTES
router.get('/accounts', TokenMiddleware.verifyToken, AccountController.accounts);
router.get('/account', TokenMiddleware.verifyToken, AccountController.accountProfile);
router.get('/account/:id', TokenMiddleware.verifyToken, AccountController.accountById);

// SECURED TASK ROUTES
router.post('/createtask', TokenMiddleware.verifyToken, TaskController.createTask);
router.get('/tasks', TokenMiddleware.verifyToken, TaskController.allTask);
router.put('/task/update/:id', TokenMiddleware.verifyToken, TaskController.updateTask);
router.delete('/task/delete/:id', TokenMiddleware.verifyToken, TaskController.deleteTask);
router.get('/task/:id', TokenMiddleware.verifyToken, TaskController.taskById);






export default router;