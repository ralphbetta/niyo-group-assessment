// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken';
import { Response, NextFunction } from 'express'; // Assuming you're using Express
import ApiResponse from '../config/response.config';
import { AccountData, CustomRequest } from '../interfaces';
import { Account } from '../models/database.connection';
import { JWTSECRETE } from '../config/environment.config';


class TokenMiddleware {

    static generate = (userdata: AccountData) => {

        return jwt.sign({ userdata }, JWTSECRETE, { expiresIn: "90d" });
    }

    static verifyToken = async (req: CustomRequest, res: Response, next: NextFunction) => {

        try {

            const token = req.headers.authorization?.split(' ')[1];

            if (!token) {
                return res.status(401).json({ message: 'Authentication failed. Token missing.' });
            }

            const decoded:any = jwt.verify(token, JWTSECRETE);
            const email = decoded.userdata.email;

            const accountInstance = await Account.findOne({ where: { email } });

            if (!accountInstance) {
                return res.status(ApiResponse.code.unauthorized).json({ message: ApiResponse.fail.unauthorized });
            }

            const encryptedData = decoded.userData;

            const fetchedData = accountInstance.toJSON();

            req.userData = fetchedData;

            next();



        } catch (err) {

            return res.status(401).json({ message: 'Authentication failed. Token invalid.' });
        }
    }

}


export default TokenMiddleware;