import {body} from 'express-validator';

const TaskValidator = {
    payload: [
        body('title').notEmpty().withMessage('Title field is requred').isString().withMessage('Title must be strings'),
        body('description').notEmpty().withMessage("Description field is required").isString().withMessage('Description must be strings'),
    ],
}

export default TaskValidator;
