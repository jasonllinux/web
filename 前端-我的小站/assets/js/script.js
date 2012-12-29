//alert("script");
//配置
var m=2;//最大倍数
var s=400;//距中心最大距离
//var count=20;//个数


//绑定dockItem函数

$(".dock").bind("mouseover", function(event){
    var w=$(this).width();
    var h=$(this).height();
    var offset=$(this).offset();
    onmouseItemout(offset.top);  //TODO 总调用
});


function onmouseItemout(top){
/*
    for(var i=0;i<$(.dock).length;i++){       //TODO 获取dock类型对象数组
        var c=$(.dock)[i].attr("class");
        var of=$("."+c).offset();
        d1=Math.abs(of.top-top);
        var z=zoomD(m,s,d1);   //zoom
        $("."+c).css({width:8*z+"px",height:8*z+"px"});
    }
    */
    var z =2;
     //$(".dock").css({width:8*z+"px",height:8*z+"px"});
     //$(".dock").css({width:"20px",height:"20px"});
     //alert("changed");
     
}

//计算放大倍数
function zoomD(m,s,d){
    var z=m*(s-d)*(s-d)/(s*s+1);
    return (z<1)?1:z;
}
//alert("Hello");


//send email when enter the send button
function onSendEmail() {

}
