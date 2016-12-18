//启动执行文件
var server = require("./server");
var router = require("./route");
var requestHandlers = require("./requestHandlers");
var mongodb = require("./db"); 

var handle = {}
handle["/"] = requestHandlers.start;
// handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;
server.start(router.route,handle,mongodb);//将路由函数注入到服务器