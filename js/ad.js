lastScrollY=0;
function heartBeat(){ 
var diffY;
if (document.documentElement && document.documentElement.scrollTop)
diffY = document.documentElement.scrollTop;
else if (document.body)
diffY = document.body.scrollTop
else
{/*Netscape stuff*/}
percent=.1*(diffY-lastScrollY); 
if(percent>0)percent=Math.ceil(percent); 
else percent=Math.floor(percent); 
document.getElementById("leftadv").style.top=parseInt(document.getElementById
("leftadv").style.top)+percent+"px";
document.getElementById("rightadv").style.top=parseInt(document.getElementById
("leftadv").style.top)+percent+"px";
lastScrollY=lastScrollY+percent; 
}/*以下动态在两侧存放图片*/
suspendcode12="<DIV id=\"leftadv\" style='left:34px;POSITION:absolute;TOP:280px;'><a href=\"#\" onclick=\"javascript:close_dl_left();\"><img src='image/close.gif' /></a><br /><a target=\"_blank\" href=\"http://www.gujing.com\"><img src='image/ad.png' /></a></div>"
suspendcode14="<DIV id=\"rightadv\" style='right:34px;POSITION:absolute;top:280px;'><a href=\"#\" onclick=\"javascript:close_dl_right();\"><img src='image/close.gif' /></a><br /><a target=\"_blank\" href=\"http://www.gujing.com\"><img src='image/ad.png' /></a></div>"
document.write(suspendcode12); 
document.write(suspendcode14); 
var heart_o;
heart_o=self.setInterval("heartBeat()",50);/*循环执行：var timeid = window.setInterval（"方法名或方法"，"延时"）;*/
function close_dl_left()
{
	document.getElementById('leftadv').style.display="none";
}
function close_dl_right()
{
	document.getElementById('rightadv').style.visibility="hidden";
}

