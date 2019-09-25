<template>
  <div>

    <div style="width: 1430px;height: 1000px;background-color: #225588;position: absolute;left:55px"></div>
    <div style="background-color: #999999;width: 1400px;left:70px;height: 600px;position:absolute;top:120px;color: #258dc1;font-size: 30px;font-weight: bolder">中电海盐1年内正常停机次数统计图</div>
    <div style="background-color: #258dc1;width: 60px;height:20px;position: absolute;left:130px;top:140px"></div>
    <span style="position: absolute;left:200px;top:138px;color: white">正常停机次数</span>
    <div class="data1" id="zhuxingOne" style="width: 1600px;height:600px;position: absolute;top:19%;left:-20px"></div>
    <div style="background-color: #008CCF;height: 60px;width: 1430px;position: absolute;left: 55px;">
      <el-button style="background: none;border: none;color:white;font-size: 25px;left:30px;top: 8px;position: absolute">正常停机次数</el-button>
      <el-button style="background: none;border: none;color:white;font-size: 25px;left:210px;top: 8px;position: absolute">故障停机次数</el-button>
      <el-button style="background: none;border: none;color:white;font-size: 25px;left:390px;top: 8px;position: absolute">停机时间</el-button>
    </div>
    <el-select v-model="value" clearable placeholder="请选择风电场" style="position: absolute;top:10px;left:1200px;background: none;height: 100px">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <div style="position:absolute;top: 80px;left:100px;border-radius: 40px;background-color: #a7a7a7;height: 30px;width: 290px">
      <span style="color: white;font-size: 15px;position:absolute;top:4px;left:20px;cursor: pointer">一天内</span>
      <span style="color: white;font-size: 15px;position:absolute;top:4px;left:120px;cursor: pointer">一月内</span>
      <span style="color: white;font-size: 15px;position:absolute;top:4px;left:220px;cursor: pointer">一年内</span>
    </div>
  </div>

</template>

<script>
export default {
  name: 'homePageMain',
  data () {
    return {
      options: [{
        value: '选项1',
        label: '金塘风电场'
      }, {
        value: '选项2',
        label: '寿光一二期风电场'
      }, {
        value: '选项3',
        label: '关岭'
      }, {
        value: '选项4',
        label: '广水竹园'
      }, {
        value: '选项5',
        label: '赤峰一期'
      }],
      value: ''
    }
  },
  methods: {
    drawChart () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('zhuxingOne'))
      // 指定图表的配置项和数据
      let option = {
        title: {
          text: ''
        },
        tooltip: {},
        legend: {
          data: ['']
        },
        xAxis: {
          data: [ '1#', '2#', '3#', '4#', '5#', '6#', '7#', '8#', '9#', '10#', '11#', '12#', '13#', '14#', '15#', '1#', '2#', '3#', '4#', '5#', '6#', '7#', '8#', '9#', '10#', '11#', '12#', '13#', '14#', '15#', '1#', '2#', '3#', '4#', '5#', '6#', '7#', '8#', '9#', '10#', '11#', '12#', '13#', '14#', '15#', '1#', '2#', '3#', '4#', '5#', '6#', '7#', '8#', '9#', '10#', '11#', '12#', '13#', '14#', '15#'],
          axisLabel: {
            show: true,
            textStyle: {
              color: 'white'
            }
          },
          axisLine: {
            lineStyle: {
              type: 'dashed',
              color: 'white', // 左边线的颜色
              width: '1'// 坐标线的宽度
            }
          },
          axisTick: { // y轴刻度线
            show: false
          }
        },
        yAxis: {
          axisLabel: {
            show: true,
            textStyle: {
              color: 'white'
            }
          },
          splitLine: { // 分隔线
            show: true, // 默认显示，属性show控制显示与否
            // onGap: null,
            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
              color: ['#ccc'],
              width: 1,
              type: 'dashed'
            }
          },
          type: 'value',
          axisTick: { // y轴刻度线
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {

            }
          }
        },
        series: [
          {
            name: '',
            type: 'bar',
            data: [ 5, 3, 3, 8, 1, 2, 5, 3, 3, 4, 1, 2, 5, 3, 3, 5, 3, 3, 8, 1, 2, 5, 3, 3, 4, 1, 2, 5, 3, 3, 5, 3, 3, 8, 1, 2, 5, 3, 3, 4, 1, 2, 5, 3, 3, 5, 3, 3, 8, 1, 2, 5, 3, 3, 4, 1, 2, 5, 3, 3],
            itemStyle: {
              normal: {
                // 颜色渐变
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#258dc1'
                }, {
                  offset: 1,
                  color: '#258dc1'
                }])
              }

            }
          }
        ]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  },
  mounted () {
    this.drawChart()
  }
}
</script>

<style scoped>

</style>
