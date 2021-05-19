raceImage=["Car Track.jpg","Car Track1.jpg","Car Track2.jpg","Car Track3.jpg","Car Track4.jpg"];
randomNumber=Math.floor(Math.random()*4);
console.log(randomNumber)

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

roverX1=10;
roverY1=10;
roverWidth1=200;
roverHeight1=90;
roverX2=10;
roverY2=100;
roverWidth2=200;
roverHeight2=90;

backgroundImage=raceImage[randomNumber];


function add(){
    bg_Img_tg=new Image();
    bg_Img_tg.onload=uploadbackground;
    bg_Img_tg.src=backgroundImage;

    rover_Img_tg=new Image();
    rover_Img_tg.onload=uploadrover1;
    rover_Img_tg.src="Car1.png";

    rover_Img_tg2=new Image();
    rover_Img_tg2.onload=uploadrover2;
    rover_Img_tg2.src="Car2.png";
}

function uploadbackground(){
    ctx.drawImage(bg_Img_tg,0,0,canvas.width,canvas.height);
}
function uploadrover1(){
    ctx.drawImage(rover_Img_tg,roverX1,roverY1,roverWidth1,roverHeight1);
}
function uploadrover2(){
    ctx.drawImage(rover_Img_tg2,roverX2,roverY2,roverWidth2,roverHeight2);
}
window.addEventListener("keydown",myKeyDown);
function myKeyDown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='37'){
       Left();
       console.log("left")
    }
    if(keyPressed=='38'){
        Top();
        console.log("top")
     }
     if(keyPressed=='39'){
        Right();
        console.log("right")
     }
     if(keyPressed=='40'){
        Down();
        console.log("down")
     }
     if(keyPressed=='87'){
        Up2();
        console.log("Up2")
     }
     if(keyPressed=='65'){
        Left2();
        console.log("Left2")
     }
     if(keyPressed=='83'){
        Down2();
        console.log("down2")
     }
     if(keyPressed=='68'){
        Right2();
        console.log("Right2")
     }
     if(roverX1>619){
         console.log("Red Car Wins!!!");
         document.getElementById("gameStatus").innerHTML="Red Car Wins!!!:)"
     }
     if(roverX2>619){
        console.log("Black Car Wins!!!:)");
        document.getElementById("gameStatus").innerHTML="Black Car Wins!!!:)"
    }
}

function Left(){
    if(roverX1>0){
    roverX1=roverX1-10;
    uploadbackground();
    uploadrover1();
    uploadrover2();
    }
}
function Right(){
    if(roverX1<620){
    roverX1=roverX1+10;
    uploadbackground();
    uploadrover1();
    uploadrover2();
    }
}
function Top(){
    if(roverY1>0){
    roverY1=roverY1-10;
    uploadbackground();
    uploadrover1();
    uploadrover2();
    }
}
function Down(){
    if(roverY1<500){
    roverY1=roverY1+10;
    uploadbackground();
    uploadrover1();
    uploadrover2();
    }
}

function Left2(){
    if(roverX2>0){
    roverX2=roverX2-10;
    uploadbackground();
    uploadrover1();
    uploadrover2();
    }
}
function Right2(){
    if(roverX2<620){
    roverX2=roverX2+10;
    uploadbackground();
    uploadrover1();
    uploadrover2();
    }
}
function Up2(){
    if(roverY2>0){
    roverY2=roverY2-10;
    uploadbackground();
    uploadrover1();
    uploadrover2();
    }
}
function Down2(){
    if(roverY2<500){
    roverY2=roverY2+10;
    uploadbackground();
    uploadrover1();
    uploadrover2();
    }
}