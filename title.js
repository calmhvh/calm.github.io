if(document.addEventListener){
    document.addEventListener("DOMContentLoaded", function(){
        loaded();
    });
} else if(document.attachEvent){
    document.attachEvent("onreadystatechange", function(){
        loaded();
    });
}

function loaded(){
    
    setInterval(loop, 300);
	
	var video = document.getElementById('video');
	video.volume = 0.10;
	

}
function play() {
	var audio = document.getElementById('video');
	video.play();
}
var x = 0;

var titleText = [ "|",
                    "♛",
                    "♛ ",
                    "♛ S",
                    "♛ SC",
                    "♛ SCR",
                    "♛ SCRI",
                    "♛ SCRIP",
                    "♛ SCRIPT",
                    "♛ SCRIPT ",
                    "♛ SCRIPT ♛",
                    "♛ SCRIPT ♛",
                    "♛ SCRIPT ♛",
                    "♛ SCRIPT ",
                    "♛ SCRIPT",
                    "♛ SCRIP",
                    "♛ SCRI",
                    "♛ SCR",
                    "♛ SC",
                    "♛ S",
					"♛ ",
                    "♛"];

function loop(){
    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}