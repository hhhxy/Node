//路由文件
// function route(handle,pathname,response,postData1,postData2,mongodb){
// 	console.log(pathname);
// 	if(typeof handle[pathname]==='function') {
// 		handle[pathname](response,postData1,postData2,mongodb);//增加与requestHandlers的联系，在index中直接存放了对应路径
// 	}else{
// 		response.writeHead(404,{"Content-Type":"text/plain"});
// 		response.write("404 Not Found");
// 	 	response.end();
// 	}
// };
// exports.route = route;


function route(handle,pathname,response,postData,mongodb){
	console.log(pathname);
	if(typeof handle[pathname]==='function') {
		handle[pathname](response,postData,mongodb);//增加与requestHandlers的联系，在index中直接存放了对应路径
	}else{
		response.writeHead(404,{"Content-Type":"text/plain"});
		response.write("404 Not Found");
	 	response.end();
	}
};
exports.route = route;