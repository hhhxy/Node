var mongodb = require("mongodb"); 

function register(postData1,postData2){
  var server = new mongodb.Server("localhost",27017,{  //设置ip和端口
      auto_reconnect : true  
  }) ;
  var conn = new mongodb.Db("test",server,{safe : true}) ;  //将我们需要查找的数据库命名为conn
  conn.open(function(error,db){ //打开数据库，此处匿名函数中db即为需要操作的数据库
    // console.log(db);
      if(error) throw error ;
      db.collection("user",{     //collection相当于关系型数据库的表，在集合名user下查找
          safe : true
      },function(err,collection){
          if(err){
          	conn.close();
          	throw err ;
          } 
          else{
          	 collection.findOne({usename:postData1[1]},function(err,doc){
          	 	console.log(postData1[1]);
          	 	if(postData1[1]=='undefined')
          	 	{
          	 		conn.close();
          	 	}
          	 	else if(doc==""){
          	 		//跳转
          	 		collection.insert({usename:postData1[1],passwd:postData2[1]});
          	 		conn.close();
          	 	}
          	 	else
          	 		// alert("111");
          	 		//报错
          	 		console.log(doc);
          	 		// return doc;
          	 })
          }
      }) ;
  }) ;
}
exports.register=register;