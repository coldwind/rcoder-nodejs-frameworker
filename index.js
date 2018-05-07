var Gateway = require("./lib/gateway.js");
var Cache = require("./lib/cache.js");
var Common = require("./common.js");
var WebSocket = require("ws").Server;
var Protocol = require("./lib/protocol/" + SYS_CONF.PROTOCOL + ".js");
var wss = null;

var gateway = new Gateway();
var CACHE = new Cache();

function main() {
    gateway.init();

    // 启动服务
    if (!process.argv[2]) {
        console.log("can't find port");
        process.exit(1);
    }

    var port = parseInt(process.argv[2]);
    if (port == 0) {
        console.log("can't find port");
        process.exit(1);
    }

    wss = new WebSocket({"port":port});

    wss.on("connection", function(ws) {
        ws.on("message", function(msg) {
            console.log(msg);
            // 根据协议路由
            try {
                var parsedData = PROTOCOL.decode(msg);
                gateway.call(parsedData, function(data) {
                    ws.send(data);
                });
            } catch(err) {
                console.log(err);
                ws.send(null);
            }
        });

        ws.on("close", function(close) {
            ws.close();
        });
    });
}

main();
