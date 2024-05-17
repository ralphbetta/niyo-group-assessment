/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *         - description
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the task
 *         title:
 *           type: string
 *           description: Enter task title
 *         description:
 *           type: string
 *           description: Enter task description
 *       example:
 *         title: "Walkout Tomorrow Morning"
 *         description: "You should get up by 7am for your walkout"
 */

/**
 * @swagger
 *   tags:
 *   name: Task
 *   description: All Secured Task API - requires account JWTs
 *
 * /createtask:
 *   post:
 *     summary: Create new tast
 *     tags: [Task]
 *     security:
 *       - BearerAuth: []
 *       - ApiKeyAuth: []
 *     requestBody:
 *       description: Enter Task Information
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *             example:
 *               title: "Walkout Tomorrow Morning"
 *               description: "You should get up by 7am for your walkout"
 *     responses:
 *       201:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               data: [{}]
 *       400:
 *         description: Invalid request
 *
 *
 *
 * /tasks:
 *   get:
 *     summary: Get the list of all task for this authenticated user
 *     tags: [Task]
 *     security:
 *       - BearerAuth: []
 *       - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               data:{}
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             example:
 *               error:
 *                 message: "Bad Request"
 *
 *
 *
 * /task/{id}:
 *   get:
 *     summary: Get users task by taskId
 *     tags: [Task]
 *     security:
 *       - BearerAuth: []
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The task id
 *     responses:
 *       200:
 *         description: The task response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: The book was not found
 *
 *
 * /task/update/{id}:
 *   put:
 *     security:
 *       - BearerAuth: []
 *     summary: Update Task Details
 *     tags: [Task]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The users task id
 *     requestBody:
 *       description: Updated task information
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       201:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               data: [{}]
 *       400:
 *         description: Invalid request
 *
 *
 * /task/delete/{id}:
 *   delete:
 *     summary: Delete user task by taskId
 *     tags: [Task]
 *     security:
 *       - BearerAuth: []
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The account id
 *     responses:
 *       200:
 *         description: The task response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: The book was not found
 */

