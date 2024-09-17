import Server from "./classes/server";
import { SERVER_PORT } from "./global/env";
import bodyParser from "body-parser";
import { router } from "./routes/router";
import cors from "cors";
const server = Server.instance;
server.app.use(bodyParser.urlencoded({extended: true}));
server.app.use(bodyParser.json())
//configuracion de cors
server.app.use(cors({
    origin:"http://localhost:4500",
    credentials:true,
})
);

server.app.use("/", router);
server.start(()=>{
    console.log(`servidor corriendo en puerto:${SERVER_PORT} `)
});
