var path=require('path')
//模块化管理
module.exports={
	//开启监听模式指令输入webpack自动打包
	watch:true,
	//入口
	entry:"./demo1.js",
	//出口
	output:{
	//目录地址
	path:path.join(__dirname,'static/'),
	//文件名称
	filename:'demo1.js'
	}
}