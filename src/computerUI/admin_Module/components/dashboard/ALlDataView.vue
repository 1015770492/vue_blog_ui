<template>
  <div id="main" style="width: 700px;height:800px;"></div>
</template>

<script>

  export default {
    name: 'ALlDataView',
    mounted () {
      let echarts = require('echarts/lib/echarts')

      let myChart=echarts.init(document.getElementById("main"))
      // 定时刷新
      setTimeout(function () {
        let option = {
          legend: {},
          tooltip: {
            trigger: 'axis',
            showContent: false
          },
          dataset: {
            source: [
              ['product', '2012', '2013', '2014', '2015', '2016', '2017'],
              ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
              ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
              ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
              ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
            ]
          },
          xAxis: {type: 'category'},
          yAxis: {gridIndex: 0},
          grid: {top: '55%'},
          series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {
              type: 'pie',
              id: 'pie',
              radius: '30%',
              center: ['50%', '25%'],
              label: {
                formatter: '{b}: {@2012} ({d}%)'
              },
              encode: {
                itemName: 'product',
                value: '2012',
                tooltip: '2012'
              }
            }
          ],color:[ '#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3','#c23531','#2f4554', '#61a0a8','#d48265', '#91c7ae']
        };
        myChart.on('updateAxisPointer', function (event) {
          let xAxisInfo = event.axesInfo[0];
          if (xAxisInfo) {
            let dimension = xAxisInfo.value + 1;
            myChart.setOption({
              series: {
                id: 'pie',
                label: {
                  formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                },
                encode: {
                  value: dimension,
                  tooltip: dimension
                }
              }
            });
          }
        });

        myChart.setOption(option);
      })

    }
  }
</script>

<style scoped>

</style>
