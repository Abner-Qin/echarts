//拿来主义 需要什么js文件就拿什么在这之前先用窗口指令npm install echarts --save安装下载echarts
	var echarts = require('echarts');
// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
			//标题
            title: {
                text: 'ECharts 入门示例'
            },
			//工具提示 鼠标指定时的提示词
            tooltip: {},
			//图例
            legend: {
                data:['销量']
            },
			//横轴效果
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
			//纵轴效果
            yAxis: {},
			//核心数据
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);