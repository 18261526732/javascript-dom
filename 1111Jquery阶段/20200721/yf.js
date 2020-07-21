// 轮播图

var lunbo = document.querySelector('.lunbo');
var lunbo_father = document.querySelector('.lunbo_father');
var imgs = document.querySelectorAll('.lunbo_father>img');
var pre = document.querySelector('#pre');
var next = document.querySelector('#next');

var x = -10.8;
var timer;
function lun() {
    timer = setInterval(function () {
        x -= 10.8;
        if (x < -54) {
            // console.log("fjsd");
            lunbo_father.style.transition = 'all 0s';
            lunbo_father.style.transform = `translate(0rem,0rem)`;
            clearInterval(timer);
            
            setTimeout(function () {
                lunbo_father.style.transition = 'all 2.5s';
                lunbo_father.style.transform = `translate(-10.8rem,0rem)`;
                x = -10.8;
                lun();
            }, 0)
        } else {
            lunbo_father.style.transform = `translate(${x}rem,0rem)`;
            lunbo_father.style.transition = 'all 2.5s';
        }
    }, 4000);
};
lun();

lunbo.onmouseover = function () {
    pre.style.left = '0.5rem';
    next.style.right = '0.5rem';
    clearInterval(timer);
};
lunbo.onmouseout = function () {
    pre.style.left = '-0.5rem';
    next.style.right = '-0.5rem';
    lun();
}
// contr 自身事件
pre.onmouseover = function(){
    pre.style.backgroundColor = '#800080';
    pre.style.color = '#ffffff';
}
pre.onmouseout = function(){
    pre.style.backgroundColor = 'rgba(128, 0, 128, 0.596)';
    pre.style.color = '#000000';
}
next.onmouseover = function(){
    next.style.backgroundColor = '#800080';
    next.style.color = '#ffffff';
}
next.onmouseout = function(){
    next.style.backgroundColor = 'rgba(128, 0, 128, 0.596)';
    next.style.color = '#000000';
}