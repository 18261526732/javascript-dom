## 选择器
选中html元素
- doocument.getElementsByClassName();
- ...

## 操作属性 
元素对象类名.属性

## 修改元素中内容
元素对象类名.innerHTML = '新内容'

## 设置css样式
行内样式
    元素对象类名.style.css属性 = '值'；

添加class类名
    元素对象类名.className = 'class类名重新赋值'


## 获取html元素样式兼容性
~~~js 
// 获取样式兼容型问题
        function getStyle(el){
          // el 元素对象
            if(el.currentStyle){  // ie
                return el.currentStyle
            }else{ // 其他
                return getComputedStyle(el,null)
            }
        }


~~~

