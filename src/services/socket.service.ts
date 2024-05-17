import { Server as HttpServer } from "http";
import { Socket } from 'socket.io';
import { Task } from "../models/task.model";


interface CustomSocket extends Socket {
    userId: string | string[] | undefined;
}

class SocketService {
  
    static userId: string | string[] | undefined;
    static io: Socket;

    static initialize(server: HttpServer) {

        const ioInstance = require('socket.io')(server, {
            cors: {
                origin: "*",
                methods: ['GET', 'POST']
            }
        });

        this.io = ioInstance;

        ioInstance.use(async (socket: CustomSocket, next: Function) => {
        if (socket.handshake.query) {
            let userId = socket.handshake.query.userId;

            socket.userId = userId;
            this.userId = userId;

            if (!userId) {
            next(new Error('No userId provided'));
            return;
            }

            next();

        }

        });

        ioInstance.on("connection", (socket: CustomSocket) => {

        const connectionMessage = `connection with user Id ${socket.userId} and socket id ${socket.id} is successful`;

        socket.join(socket.userId!);

        socket.on("message", async (data) => {
            let recipient = data.to;
            socket.to(recipient).emit('task', data.payload);
        });
        
        socket.on("disconnect", () => {
            socket.leave(`${socket.userId}`);
            socket.userId = undefined;
            socket.removeAllListeners();
        });

        });
    }

    static publish=(payload: Task, recipient: string)=>{

        this.io.to(`${recipient}`).emit('task', payload);

    }

}

export default SocketService; 