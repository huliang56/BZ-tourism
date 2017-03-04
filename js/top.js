// JavaScript Document
   window.onscroll = function () {
            var oDiv = document.getElementById('div1');
            var DivScroll = document.documentElement.scrollTop || document.body.scrollTop;      //获取移动高度
            //                        oDiv.style.top = (document.documentElement.clientHeight - oDiv.offsetHeight)/2 + DivScroll + 'px';
            move(parseInt((document.documentElement.clientHeight - oDiv.offsetHeight) / 2 + DivScroll)); 
        };/*   调用传参，其中里面的参数是DIV要走的终点。也就是（可视高度-DIV高度）/2+移动高度*/

        var timer = null;
        function move(end) {
            clearInterval(timer);       //首先，先关闭之前如果有开启的setInterval;
            timer = setInterval(function () {       
                var oDiv = document.getElementById('div1');
                var speed = (end - oDiv.offsetTop) / 5;     
				/*//计算DIV要走的速度，DIV要走的速度就等于（终点-offsetTop高度）/缩放系数*/
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);       //为了避免小数，将其取整
                if (oDiv.offsetTop == end) {        //当DIV到达终点，则关闭setInterval;
                    clearInterval(timer);
                }
                else {
                    oDiv.style.top = oDiv.offsetTop + speed + 'px';     //移动div
                }
            }, 30);
        }