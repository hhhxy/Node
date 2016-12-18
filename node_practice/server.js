//服务器文件
var http = require('http');
var url = require('url');
function start(route,handle,mongodb){
	function onRequest(req,res){//http服务器开始工作
		res.writeHead(200, {
          "Content-Type": "text/html;charset=utf-8"
      	});
		// var postData1 = "";
		// var postData2 = "";
		// var data1 = "";
		// var data2 = "";
		var postData = "";
		var pathname = url.parse(req.url).pathname; //获取路径
		// console.log(pathname);
		req.setEncoding("utf8");
		// if(pathname=='/'){
		// 	req.addListener("data",function(postDataChunk){//有新的数据包到达就执行
		// 	data1 += postDataChunk;
		// 	console.log("received POST data chunk "+postDataChunk+".");
		// 	data2 = data1.split("&");
		// 	postData1 = data2[0].split("=");
		// 	postData2 = data2[1].split("=");
		// 	console.log(postData1,postData2);
		// })
		// req.addListener("end",function(){//数据传输完毕
		// 	route(handle,pathname,res,postData1,postData2,mongodb);
		// })
		// }

			if(pathname=='/'){
			req.addListener("data",function(postDataChunk){//有新的数据包到达就执行
			postData += postDataChunk;
			console.log("received POST data chunk "+postDataChunk+".");
			// console.log(postData1,postData2);
		})
		req.addListener("end",function(){//数据传输完毕
			route(handle,pathname,res,postData,mongodb);
		})
		}
		
	}
	http.createServer(onRequest).listen(8888);//触发回调函数
}

exports.start = start;