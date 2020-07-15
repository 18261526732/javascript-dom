
function getStyle(el, str) {
    var res;
    if (el.currentStyle) {
        res = el.currentStyle[str];
    } else {
        res = getComputedStyle(el, null)[str];
    }
    return res;
}
var box = document.querySelector('.box');
function ani(el, str, end, time) {
    // 元素的初始值
    var start = getStyle(el, str);
    // 对于初始值 取整（单位
    start = parseInt(start);
    var s = end - start;//位移差
    time = time * 1000;
    var timer = setInterval(function () {
        start += s / (time / 16.7);
        // 处理没有单位的css属性
        el.style[str] = start + 'px';
        // 判断位移差 大于零的时候 或者小于零的时候
        // 以及有单位的时候 和没单位的时候
        // s 不同  出口条件不同
        if (s > 0) {
            if (start >= end) {
                str == 'opacity' || str == 'zIndex'
                    ? (el.style[str] = end)
                    : (el.style[str] = end + 'px')
                clearInterval(timer);
            };
        } else {
            if (start <= end) {
                str == 'opacity' || str == 'zIndex'
                    ? (el.style[str] = end)
                    : (el.style[str] = end + 'px')
                clearInterval(timer);
            };
        }
    }, 16.7);

};