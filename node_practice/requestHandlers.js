//路径文件
var querystring = require("querystring");
var fs = require("fs");


// function start(response,postData1,postData2,mongodb) {
// 	console.log("Request handler 'start' was called.");
// 	fs.readFile("/Node/lianxi/main.html", function(error, file) {
//     if(error) {
//       response.writeHead(500, {"Content-Type": "text/html;charset=utf-8"});
//       response.write(error + "\n");
//       response.end();
//     } else {
//       response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
//       response.write(file);
//       mongodb.register(postData1,postData2);
//       response.end();
//     }
//   });
// }


function start(response,postData,mongodb) {
  console.log("Request handler 'start' was called.");
  fs.readFile("/Node/lianxi/main.html", function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/html;charset=utf-8"});
      response.write(error + "\n");
      response.end();
    } else {
      var data = postData.split("&");
      var postData1 = data[0].split("=");
      var postData2 = data[1].split("=");
      response.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
      response.write(file);
      mongodb.register(postData1,postData2);
      response.end();
    }
  });
}

// function upload(response,postData,mongodb) {
//   console.log("Request handler 'upload' was called.");
//   response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
//   // response.write("you've sent:"+querystring.parse(postData1).text);//输出文本
//   response.write("hello");
//   // mongodb.database(postData);
//   response.end();
// }

// function show(response, postData,mongodb) {
//   console.log("Request handler 'show' was called.");
//   fs.readFile("/img/1.jpg", "binary", function(error, file) {
//     if(error) {
//       response.writeHead(500, {"Content-Type": "text/plain"});
//       response.write(error + "\n");
//       response.end();
//     } else {
//       response.writeHead(200, {"Content-Type": "image/jpg"});
//       response.write(file, "binary");
//       response.end();
//     }
//   });
// }
exports.start = start;
// exports.upload = upload;
// exports.show = show;