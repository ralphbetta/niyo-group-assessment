import ApiResponse from "../config/response.config";
import { Account, Task } from "../models/database.connection";
import SocketService from "./socket.service";

class TaskService {


    static async createTask(body: any, accountId: string): Promise<any>{

        let response: {};
        
        const accountInstance = await Account.findByPk(accountId);

        if (!accountInstance) {
            response = { error: true, message: ApiResponse.fail.not_found, data: {} }
            return { code: ApiResponse.code.not_found, body: response };
        }

        const taskInstance = await Task.create(body);
        await accountInstance.addTask(taskInstance);

        SocketService.publish(taskInstance, accountId);
 
        response = { error: false, message: ApiResponse.pass.create, data: taskInstance }
        return { code: ApiResponse.code.success, body: response };

    }


    static async allTasks(id:string): Promise<any>{

        let response: {};
        const accountInstance = await Account.findByPk(id);

        if (!accountInstance) {
            response = { error: true, message: ApiResponse.fail.not_found, data: {} }
            return { code: ApiResponse.code.not_found, body: response };
        }

        const taskInstances = await accountInstance.getTasks();

        response = { error: false, message: ApiResponse.pass.read, data: taskInstances }
        return { code: ApiResponse.code.success, body: response };

    }


static async taskById(id:string): Promise<any>{

        let response: {};

        const existingInstance = await Task.findByPk(id);

        if (!existingInstance) {
            response = { error: true, message: ApiResponse.fail.not_found, data: {} }
            return { code: ApiResponse.code.not_found, body: response };
        }

        response = { error: false, message: ApiResponse.pass.read, data: existingInstance }
        return { code: ApiResponse.code.success, body: response };

}


    static async updateTask(body:any, id:string): Promise<any>{

        let response: {};

        const existingInstance = await Task.findByPk(id);

        if (!existingInstance) {
            response = { error: true, message: ApiResponse.fail.not_found, data: {} }
            return { code: ApiResponse.code.not_found, body: response };
        }

        const updatedInstance = await existingInstance.update(body);

        response = { error: false, message: ApiResponse.pass.update, data: existingInstance }
        return { code: ApiResponse.code.success, body: response };

    }

    static async deleteTask(id:string): Promise<any>{

        let response: {};

        const existingInstance = await Task.findByPk(id);

        if (!existingInstance) {
            response = { error: true, message: ApiResponse.fail.not_found, data: {} }
            return { code: ApiResponse.code.not_found, body: response };
        }

        const deletedInstance = await existingInstance.destroy();
        
        response = { error: false, message: ApiResponse.pass.delete, data: {} }
        return { code: ApiResponse.code.success, body: response };

    }
}

export default TaskService;