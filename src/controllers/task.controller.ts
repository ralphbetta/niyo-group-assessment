import { Request, Response } from "express";
import { CustomRequest } from "../interfaces";
import TaskService from "../services/task.service";


class TaskController {

    static async createTask(req: CustomRequest, res: Response): Promise<void> {
        try {
            const {id}  = req.userData;
            const response = await TaskService.createTask(req.body, id);

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

    static async allTask(req: CustomRequest, res: Response): Promise<void> {

        const {id}  = req.userData;

        try {
            const response = await TaskService.allTasks(id)
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

    static async taskById(req: Request, res: Response): Promise<void> {

        const {id}  = req.params;

        try {
            const response = await TaskService.taskById(id)

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


    static async updateTask(req: Request, res: Response): Promise<void> {

        const {id}  = req.params;

        try {
            const response = await TaskService.updateTask(req.body, id);

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


    static async deleteTask(req: Request, res: Response): Promise<void> {

        const {id}  = req.params;

        try {
            const response = await TaskService.deleteTask(id)

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

export default TaskController;