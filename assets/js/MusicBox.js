/// <reference path="jquery-1.3.2.js" />
MusicBox=function (){
var _this=this;
    var  media= document.getElementById("musicBox"); 
    var  mucicFiles=[
                      {name:"当我们再相见",url:"assets/music/纯音乐-忧伤还是快乐.mp3"}
                    ];
    //当前正在播放的歌曲的索引               
    var index=-1;
    //当前正在播放的歌曲
    var playingFile=null;
    //播放模式
    var playMode=1;
    //下一首
    this.nextMusic=function(){
       if(playMode=="1"){
            index+=1;
        }
        if(index==mucicFiles.length){
            index=0;
        }
        playingFile=mucicFiles[index];
        media.setAttribute("src",playingFile.url); 
        media.play();
        $("#ul_musicList").children().css({"background-color":"#FFF","border":"solid 1px #EEEEEE","color":"#000"});
        $( $("#ul_musicList").children()[index]).css({"background-color":"#2C7DE2","border":"solid 1px #206DDF","color":"#FFF"});
     
    }
    //加载
    this. loadStart=function(){
        $("#sn_status").text("加载中....");
    }
    //播放
    this. playing=function(){
         $("#sn_status").text("当前正在播放："+playingFile.name);
    } 
    //暂停
    this. pausePaly=function(){
         $("#sn_status").text("暂停："+playingFile.name);
    }
    //加载出错
    this. loadError=function(){
        $("#sn_status").text("加载“"+playingFile.name+"”失败，可能资源不存在~");
    }
    //初始化
    this.init=function(){
        for(var a in mucicFiles){
        $("#ul_musicList").append("<li>"+mucicFiles[a].name+"</li>");
        }
        _this.nextMusic();
        $("#slt_playMode").change(function(){
        playMode=$("#slt_playMode").val();
        });
    }
}
// html5里有一个新标签audio，该标签用以定义声音，比如音乐或其他音频流。
//          既然audio标签可以播放音频，那我们可以轻而易举的用其来打造一个音乐播放器。
// audio 有几个属性：
//          src:String型，所播放音频的 url。
//          autoplay:bool，如果是 true，则音频在就绪后马上播放。默认为false。
//          controls:bool，如果是 true，则向用户显示控件，比如播放按钮。默认为false。
//          更多详细属性：http://www.w3school.com.cn/html5/html5_audio.asp

//audio 有几个事件：
//          onended:当媒介已抵达结尾时运行脚本，也就是当前歌曲播放完了，这里的“媒介”是指audio标签。
//          onloadstart:当浏览器开始加载媒介数据时运行脚本。
//          onplay:当媒介数据将要开始播放时运行脚本。这里的“媒介数据”是指播放的文件。
//          onplaying:当媒介数据已开始播放时运行脚本。
//          onpause:当媒介数据暂停时运行脚本。
//          onerror:当加载媒介数据出错时运行的脚本。(w3school不是这样解释的)
//          更多详细事件：http://www.w3school.com.cn/html5/html5_ref_eventattributes.asp#Media_Events
