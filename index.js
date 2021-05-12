function handleclick() {
	var j =this.innerHTML;
    
	switch (j) {
     case "w":
	var p="sounds/"+"crash.mp3";
	var audio = new Audio(p);
    audio.play();
    break;
    
  
    case "a":
    var p="sounds/"+"snare.mp3";
    var audio=new Audio(p);
    audio.play();
    break;

    case "s":
    var p="sounds/"+"kick-bass.mp3";
    var audio=new Audio(p);
    audio.play();
    break;  

    case "d":
    var p="sounds/"+"tom-1.mp3";
    var audio=new Audio(p);
    audio.play();
    break;
    case "j":
    var p="sounds/"+"tom-2.mp3";
    var audio=new Audio(p);
    audio.play();
    break;

    case "k":
    var p="sounds/"+"tom-3.mp3";
    var audio=new Audio(p);
    audio.play();
    break;

    case "l":
    var p="sounds/"+"tom-4.mp3";
    var audio=new Audio(p);
    audio.play();
    break;
}
    
}
for(var i=0;i<document.querySelectorAll(".drum").length ;i++)
{

	document.querySelectorAll(".drum")[i].addEventListener("click",handleclick);
}