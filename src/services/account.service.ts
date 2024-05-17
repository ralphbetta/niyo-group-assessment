import ApiResponse from "../config/response.config";
import { Account } from "../models/database.connection";
import TokenMiddleware from "../middleware/token.middleware";
import { AccountData } from "../interfaces";

class AccountService {


    static async createAccount(body: any): Promise<any>{

        let response: {};

        const existingInstance = await Account.findOne({ where: { email: body.email } });

        if (existingInstance) {
            response = { error: true, message: ApiResponse.fail.account_conflict, data: {} }
            return { code: ApiResponse.code.conflict, body: response };
        }

        const accountInstance = await Account.create(body);

        const payload = {
            id: accountInstance.id,
            username: accountInstance.username,
            email: accountInstance.email,
        }

        response = { error: false, message: ApiResponse.pass.create, data: payload }
        return { code: ApiResponse.code.success, body: response };

    }

    static async loginAccount(body: any): Promise<any>{

        let response: {};

        const existingInstance = await Account.findOne({ where: { email: body.email } });

        if (!existingInstance) {
            response = { error: true, message: ApiResponse.fail.not_found, data: {} }
            return { code: ApiResponse.code.not_found, body: response };
        }

        const isValidPassword = existingInstance.comparePassword(body.password);

        if (!isValidPassword) {
            response = { error: true, message: ApiResponse.fail.login, data: {} }
            return { code: ApiResponse.code.not_found, body: response };
        }

        const generatedToken = TokenMiddleware.generate({
            id: existingInstance.id,
            email: existingInstance.email,
            username: existingInstance.username
        });

        const payload = {
            email: existingInstance.email,
            username: existingInstance.username
        }

        response = { error: false, message: ApiResponse.pass.login, data: payload, token: generatedToken }
        return { code: ApiResponse.code.success, body: response };


    }


    static async allAccounts(): Promise<any>{

        let response: {};

        const accountInstances = await Account.findAll({
            attributes: { exclude: ['password'] }
          });

        response = { error: false, message: ApiResponse.pass.create, data: accountInstances }
        return { code: ApiResponse.code.success, body: response };

    }


    static async accountById(id:string): Promise<any>{

        let response: {};

        const existingInstance = await Account.findByPk(id, {
            attributes: { exclude: ['password'] }
          });

        if (!existingInstance) {
            response = { error: true, message: ApiResponse.fail.not_found, data: {} }
            return { code: ApiResponse.code.not_found, body: response };
        }

        response = { error: false, message: ApiResponse.pass.create, data: existingInstance }
        return { code: ApiResponse.code.success, body: response };

    }
}

export default AccountService;