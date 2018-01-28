//拿来主义 需要什么js文件就拿什么在这之前先用窗口指令npm install echarts --save安装下载echarts
	var echarts = require('echarts');
	//引入jquery指令输入npm install jquery@1.11.1 --save
	var $ = require('jquery');
	//动态拿取远程数据
	
		/**$.getJSON('http://location.kunx.org/index/job/getAllList',function(data){
		console.log(data)
	})
		$.getJSON('http://location.kunx.org/index/job/getLocations',function(data){
		console.log(data)
	})
		$.getJSON('http://location.kunx.org/index/job/getKeywords',function(data){
		console.log(data)
	})**/
	
	//构建三个异步对象
	var p1=new Promise(function(ok,nok){
		$.getJSON('http://location.kunx.org/index/job/getKeywords',function(data){
		console.log('keywords',data);
		ok(data);
	})
	})
	var p2=new Promise(function(ok,nok){
		$.getJSON('http://location.kunx.org/index/job/getLocations',function(data){
		console.log('locations',data);
		ok(data);
	})
	})
	var p3=new Promise(function(ok,nok){
		$.getJSON('http://location.kunx.org/index/job/getAllList',function(data){
		console.log('allList',data);
		ok(data);
	})
	})
	//Promise.all([])放一个数组
	Promise.all([p1,p2,p3]).then(function(data){
		console.log('result',data);
		var keywords=data[0];
		var locations=data[1];
		var allList=data[2];
		console.log(p1)
		console.log(p2)
		console.log(p3)
		// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
    title: {
        text: '职位招聘信息'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend:{
		data:locations
	}, 
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data:keywords
    },
    yAxis: {
        type: 'value'
    },
    series:allList
};


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
	})
