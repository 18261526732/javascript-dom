### ifram 注意
1：ifram 是一个独立的窗口 有自己的window对象
2：浏览器也是一个独立的窗口 也window对象
3：窗口与窗口之间通信：按照同源策源-----> 启动页面时候：需要用服务启动

4：浏览器窗口中页面 为父页面  window为父window
    4.1：如何获取子window
~~~js
        var childWindow = document.getElementsBytagNae('ifram)
~~~
    4.2：如何获取子window dom

 ~~~js
        var childDom = childWindow.document.xxx()//dom的api
 ~~~
        
    
    4.3：如何将父页面中数据传递到子页面
~~~js
        var data = window.data  //表示父页面的数据
        childWindow.data = data //给子window添加全局属性，并赋值父window中的数据
~~~
        

5：ifram加载的页面为子页面：该页面的window对象为ifram的window对象
    5.1：如何获取父window

 ~~~js
        var parentWindow = window.parent;
 ~~~
    5.2:如何将子页面数据a 传给父页面b

 ~~~js
    var data = window.a//获取子页面数据
    parentWindow.b = data//把子页面的数据a 传递给父页面变量a
 ~~~


6注意：
    1：每个window都有location licationStorage document...
    2：在子页面中 localtion.href 重新加载时子窗口的页面 而不是父窗口的
    3:locaLStorage 是所有窗口共用的数据


### 相邻的ifram 如何传递数据

- localStorage
- 共同的父窗口

