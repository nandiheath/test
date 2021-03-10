let grpc = require("grpc");
let protoLoader = require("@grpc/proto-loader");

const server = new grpc.Server();
const URL = "0.0.0.0:8081";

let grpc = grpc.loadPackageDefinition(
    protoLoader.loadSync("./test.grpc",{
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    })
);

function greetUser(call, callBack) {
    callBack(null, {message: `Hello ${call.request.name} welcome to the world`});
}

server.addService(grpc.WelcomeService.service, { greetUser: greetUser });

server.bind(URL, grpc.ServerCredentials.createInsecure());

server.start();
