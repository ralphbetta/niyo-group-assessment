import { Router, Request, Response } from "express";
import AccountController from "../controllers/account.controller";
import TokenMiddleware from "../middleware/token.middleware";

const router = Router();


router.post('/createaccount', AccountController.createAccount);
router.post('/loginaccount', AccountController.loginAccount);

// SECURED ROUTES
router.get('/accounts', TokenMiddleware.verifyToken, AccountController.accounts);
router.get('/account', TokenMiddleware.verifyToken, AccountController.accountProfile);
router.get('/account/:id', TokenMiddleware.verifyToken, AccountController.accountById);




export default router;