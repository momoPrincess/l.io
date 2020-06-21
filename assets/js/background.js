$.cookie('nowPage', window.location.href, { expires: 7 }); 
if($.cookie('bg_num')!= null){
  $("body").css({"background":"url("+$.cookie('bg_num')+")  no-repeat fixed center center","background-size": "cover"});//url("+bimg+"),添加 变量的方法
  $(".small-start").css({"background":"url("+$.cookie('bg_num')+")","background-size": "100% auto","background-repeat": "no-repeat", "background-position": "center center"});
}else{
  $("body").css({"background":"url(assets/images/background-01.jpg)  no-repeat fixed center center","background-size": "cover"});//url("+bimg+"),添加 变量的方法
  $(".small-start").css({"background":"url(assets/images/background-01.jpg)","background-size": "100% auto","background-repeat": "no-repeat", "background-position": "center center"});
}
$("#banner").addClass("small-end");
var topFlag = 0;
$(".but").click(function(){
  if(topFlag == 0){
    topFlag = 1;
    $(".but").css({"opacity":"0"});
    $(".close-btn").css({"opacity":"1"});
  }else{
    topFlag = 0;
    $(".but").css({"opacity":"1"});
    $(".close-btn").css({"opacity":"0"});
  }
  
  $("#hf").slideToggle("slow");  
});
//点击其他位置收缩换肤栏
$(".container").click(function(){
  if(topFlag == 1){
    $("#hf").slideToggle("slow");
    topFlag = 0;
    $(".but").css({"opacity":"1"}); 
    $(".close-btn").css({"opacity":"0"});            
  }
});
//点击换body图 
$(".scrollCon ul li").click(function(){
  var simg=$(this).find("img").attr("src");
  $("body").css({"background":"url("+simg+")  no-repeat fixed center center","background-size": "cover"});//url("+bimg+"),添加 变量的方法
  $(".small-start").css({"background":"url("+simg+")","background-size": "100% auto","background-repeat": "no-repeat", "background-position": "center center"});
  $.cookie('bg_num', simg, { expires: 7 }); 
});
//点击左边按钮
var click_num=0; //初始点击次数
$(".left").click(function(){
  click_num++;       //click_num+1
  if(click_num>1){
    click_num=0;
  }
  $(".scrollCon").animate({left:click_num*(-1080)},300);
});
$(".right").click(function(){
  click_num--;       //click_num+1
  if(click_num<0){
    click_num=1;
  }
  $(".scrollCon").animate({left:click_num*(-1080)},300);
});

$(window).bind("scroll", topmenuscrollshow);
function topmenuscrollshow() {
  var st = $(document).scrollTop();
  (st > 100)? $("#nav").addClass("top-menu-scroll"): $("#nav").removeClass("top-menu-scroll");
};