var second = 0

//想要绘制的函数
var f = function(t) {
  return (Math.sin(t / 4.77) + 1) / 2
}

//此函数每秒执行一次
//内部主要耗时的是一个死循环
//其执行时长跟其执行的时刻及上面定义的函数的返回值有关
setInterval(function() {
  var percent = f(second++)
  var duration = percent * 1000
  var start = Date.now() //记录下面死循环开始的时间
  for (;;) {
    if (Date.now() - start > duration) { //如果已经执行超过duration的时长了，就退出
      break
    }
  }
}, 1000)