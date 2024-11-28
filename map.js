document.addEventListener('DOMContentLoaded', function() {
    // 确保DOM加载完成后再初始化地图
    setTimeout(() => {
        const chartDom = document.getElementById('chinaMap');
        if (!chartDom) {
            console.error('找不到地图容器元素');
            return;
        }

        const myChart = echarts.init(chartDom);
        if (!myChart) {
            console.error('ECharts 初始化失败');
            return;
        }

        // 检查地图数据是否加载
        if (!echarts.getMap('china')) {
            console.error('中国地图数据未能加载');
            return;
        }

        const data = [
            {name: '江苏', value: 15654},
            {name: '北京', value: 12000},
            {name: '上海', value: 11000},
            {name: '广东', value: 21000},
            {name: '浙江', value: 18000},
            {name: '四川', value: 19000},
            {name: '湖北', value: 16000},
            {name: '山东', value: 17000},
            {name: '河南', value: 15000},
            {name: '福建', value: 14000},
            {name: '江西', value: 13000},
            {name: '安徽', value: 12000},
            {name: '湖南', value: 15000},
            {name: '河北', value: 11000},
            {name: '重庆', value: 10000},
            {name: '云南', value: 8000},
            {name: '贵州', value: 7000},
            {name: '广西', value: 6000},
            {name: '山西', value: 5000},
            {name: '陕西', value: 4000},
            {name: '吉林', value: 3000},
            {name: '黑龙江', value: 2000},
            {name: '内蒙古', value: 1500},
            {name: '新疆', value: 1000},
            {name: '宁夏', value: 800},
            {name: '青海', value: 600},
            {name: '西藏', value: 400},
            {name: '甘肃', value: 900},
            {name: '海南', value: 700}
        ];

        const option = {
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    return `${params.name}<br/>政策数量：${params.value}`;
                }
            },
            visualMap: {
                type: 'piecewise',
                left: 'left',
                top: 'bottom',
                splitNumber: 6,
                pieces: [
                    {min: 20000, label: '> 20000'},
                    {min: 10000, max: 20000, label: '10000 - 20000'},
                    {min: 5000, max: 10000, label: '5000 - 10000'},
                    {min: 2000, max: 5000, label: '2000 - 5000'},
                    {min: 1000, max: 2000, label: '1000 - 2000'},
                    {min: 500, max: 1000, label: '500 - 1000'},
                    {min: 200, max: 500, label: '200 - 500'},
                    {max: 200, label: '< 200'}
                ],
                inRange: {
                    color: [
                        '#F8F9FF',
                        '#E6F0FF',
                        '#CCE0FF',
                        '#99C2FF',
                        '#66A3FF',
                        '#3385FF',
                        '#0066FF',
                        '#0052CC'
                    ]
                },
                textStyle: {
                    color: '#666'
                }
            },
            series: [{
                name: '政策数量',
                type: 'map',
                map: 'china',
                roam: false,
                zoom: 1.2,
                label: {
                    show: true,
                    color: '#333',
                    fontSize: 10
                },
                itemStyle: {
                    areaColor: '#F8F9FF',
                    borderColor: '#fff',
                    borderWidth: 1
                },
                emphasis: {
                    label: {
                        color: '#fff'
                    },
                    itemStyle: {
                        areaColor: '#0066FF'
                    }
                },
                select: {
                    label: {
                        color: '#fff'
                    },
                    itemStyle: {
                        areaColor: '#0066FF'
                    }
                },
                data: data
            }]
        };

        try {
            myChart.setOption(option);
            console.log('地图渲染成功');
        } catch (error) {
            console.error('地图渲染失败:', error);
        }

        // 响应式处理
        window.addEventListener('resize', function() {
            myChart.resize();
        });
    }, 100); // 添加小延迟确保地图数据加载完成
}); 