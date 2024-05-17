/**
 * @swagger
 * components:
 *   schemas:
 *     Authentication:
 *       type: object
 *       required:
 *         - username
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         username:
 *           type: string
 *           description: Enter username
 *         email:
 *           type: string
 *           description: Enter email
 *         password:
 *           type: string
 *           description: Enter password
 *       example:
 *         username: "Ralph"
 *         email: "ralph@gmail.com"
 *         password: "password123"
 */

/**
 * @swagger
 *   tags:
 *   name: Authentication
 *   description: The begining of authentication process
 *
 * /createaccount:
 *   post:
 *     summary: Create new account
 *     tags: [Authentication]
 *     requestBody:
 *       description: Enter Account Information
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *                username: "Ralph"
 *                email: "ralph@gmail.com"
 *                password: "password123"
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
 * /loginaccount:
 *   post:
 *     summary: Login to account
 *     tags: [Authentication]
 *     requestBody:
 *       description: Enter work email
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *                email: "ralph@gmail.com"
 *                password: "password123"
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
 * /accounts:
 *   get:
 *     summary: Get the list of all accounts
 *     tags: [Authentication]
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
 * /account:
 *   get:
 *     summary: Get loggedin user account details by token
 *     tags: [Authentication]
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
 * /account/{id}:
 *   get:
 *     summary: Get the user account by id
 *     tags: [Authentication]
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
 *         description: The account response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Authentication'
 *       404:
 *         description: The book was not found
 *
 */

