

const move = (event) =>{

    console.log("");
    var x=event.clientX;
    var y=event.clientY;
    // console.log(`Event X : ${x} Event Y : ${y}`);

    var halfScreenWidth=window.innerWidth /2;
    var halfScreenHeight=window.innerHeight/2;

    // var irisPositionXLeft=halfScreenWidth-x;
    var irisPositionXRight=x-halfScreenWidth;

    // var irisPositionYTop=halfScreenHeight-y;
    var irisPositionYBottom=y-halfScreenHeight;
    
    // console.log(`Screen X : ${halfScreenWidth} Screen height : ${halfScreenHeight}`);
    // console.log(` XL : ${irisPositionXLeft} YT : ${irisPositionYTop}`);
    // console.log(` XR : ${irisPositionXRight} YB : ${irisPositionYBottom}`);

    var target=document.getElementsByClassName("iris");
    var irisSPT =target[1].offsetTop;
    var irisSPL =target[1].offsetLeft;
    // console.log(irisSPT);
    // console.log(irisSPL);

    var irismoveX= irisPositionXRight/(halfScreenWidth/40);
    var irismoveY= irisPositionYBottom/(halfScreenHeight/40);
    // console.log(irismoveX);

    target[0].setAttribute("style",`position:relative; top: ${42+irismoveY}px; left: ${42+irismoveX}px`);
    target[1].setAttribute("style",`position:relative; top: ${40+irismoveY}px; left: ${40+irismoveX}px`);
}
window.addEventListener('mousemove', move );
