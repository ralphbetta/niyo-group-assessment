import { Request, Response } from "express";
import AccountService from "../services/account.service";
import { CustomRequest } from "../interfaces";
import { validationResult } from "express-validator";
import ApiResponse from "../config/response.config";


class AccountController {

    static async createAccount(req: Request, res: Response): Promise<void> {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
             res.status(ApiResponse.code.bad_request).json({ errors: errors.array() });
             return;
        }
        
        try {
            const response = await AccountService.createAccount(req.body)
            res.status(response.code).json(response.body);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error);
                res.status(500).json({
                    error: true,
                    message: `Internal Server Error: ${error.message}`,
                    data: {},
                });
            }
        }
    }

    static async loginAccount(req: Request, res: Response): Promise<void> {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
             res.status(ApiResponse.code.bad_request).json({ errors: errors.array() });
             return;
        }

        try {
            const response = await AccountService.loginAccount(req.body)
            res.status(response.code).json(response.body);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error);
                res.status(500).json({
                    error: true,
                    message: `Internal Server Error: ${error.message}`,
                    data: {},
                });
            }
        }
    }


    static async accounts(req: Request, res: Response): Promise<void> {

        try {
            const response = await AccountService.allAccounts()

            res.status(response.code).json(response.body);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error);
                res.status(500).json({
                    error: true,
                    message: `Internal Server Error: ${error.message}`,
                    data: {},
                });
            }
        }
    }

    static async accountById(req: Request, res: Response): Promise<void> {

        let {id}  = req.params;

        console.log()
        try {
            const response = await AccountService.accountById(id)

            res.status(response.code).json(response.body);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error);
                res.status(500).json({
                    error: true,
                    message: `Internal Server Error: ${error.message}`,
                    data: {},
                });
            }
        }
    }

    static async accountProfile(req: CustomRequest, res: Response): Promise<void> {

        let {id}  = req.userData;
        try {

            const response = await AccountService.accountById(id)
            
            res.status(response.code).json(response.body);

        } catch (error) {
            if (error instanceof Error) {
                console.log(error);
                res.status(500).json({
                    error: true,
                    message: `Internal Server Error: ${error.message}`,
                    data: {},
                });
            }
        }
    }

}

export default AccountController;