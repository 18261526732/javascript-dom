// 获取dom元素
function getElement(str){
    // console.log(str.charAt(0))
    if(str.charAt(0)==='.'){
        return document.getElementsByClassName(str);
    }else if(str.charAt(0)==='#'){
        return document.getElementById(str);                
    }else{
        return document.getElementsByTagName(str);
    }    
};

// 改变元素的文本内容
function html(el,str){
    el.innerHTML = str;
    return el
};

// 隐藏元素
function hide(el){
    var val = 1;
    el.style.opacity = val;
    var timer = setInterval(function(){
        val -= 0.1;
        if(val <= 0){
            el.style.opacity = 0;
            el.style.diaplay = 'none';
            clearInterval(timer);
            return
        }
        el.style.opacity = val;
    },100)
    return el
};

// 针对隐藏的显示元素
function show(el){
    var val = 0
    el.style.display = 'block';
    el.style.opacity = val;
    var timer = setInterval(function(){
        val += 0.1;
        if(val >= 1){
            el.style.opacity = 1;
            clearInterval(timer);
            return
        }
        el.style.opacity = val;
    },100)
    return el
};