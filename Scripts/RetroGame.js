/** Classes */

class Vector2d {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

}
class BallSpeed{
    constructor(ballspeed){
        this.ballspeedX = ballspeed
        this.ballspeedY = ballspeed
    }
}



/** @type {HTMLCanvasElement} */
const c = document.getElementById("mainCanvas")

const ctx = c.getContext("2d")
 
var isHovered = false;





/** Cyrcle/Ball Settings (Position,) */
let circleposX = 350;
let circleposY = 300;
var ballRadius = 30
var ballSpeed = new BallSpeed(4)
var ballismoving = false;

var GameRunning = false


/** Start without stack Velocity (Switch) */
function StartTesting(){
    if(GameRunning){

    }else{
        
        GameRunning = true
                
        Update();
    }
}

function LoseDetector(){
    if(ballVector.y >= c.width-ballRadius-80){
        GameRunning = false    
    }
    if(ballVector.y <= 80 + ballRadius){
        GameRunning = false    
    }
}
     




function Update(){
    MoveBall();
    DrawRectPlayerOne()
    DrawRectPlayerTwo()
    PlayerMovementUpdater()
    LoseDetector()
    

    Debugger()
    if(GameRunning){
        requestAnimationFrame(Update)
    }    
}


let ballVector = new Vector2d(circleposX, circleposY)

function DrawBall(){
    ctx.beginPath();
    ctx.arc(ballVector.y, ballVector.x, ballRadius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath(); 
}
function MoveBall(){
    ctx.clearRect(0, 0, c.width, c.height);
    /** console.log(ballVector.y) */
    /** console.log(ballVector.x) */    
    
    DrawBall();
    WallHitDetector();
    PlayerOneHitController()

    ballVector.y += ballSpeed.ballspeedY;
    ballVector.x += ballSpeed.ballspeedX;


}

function WallHitDetector(){
    if(ballVector.x >= c.height-ballRadius){
        ballSpeed.ballspeedX = ballSpeed.ballspeedX * -1;         
    }
    if(ballVector.x <= 0 + ballRadius){
        ballSpeed.ballspeedX = ballSpeed.ballspeedX * -1; 
    }

}

function PlayerOneHitController(){
    if(ballVector.y >= c.width-ballRadius-100 && ballVector.x < rectstartPosYP2 +200 && ballVector.x > rectstartPosYP2){
            ballSpeed.ballspeedY = ballSpeed.ballspeedY * -1;        
    }
    if(ballVector.y <= 120 + ballRadius && ballVector.x < rectstartPosYP1 +200 && ballVector.x > rectstartPosYP1){
        ballSpeed.ballspeedY = ballSpeed.ballspeedY * -1;        
}


    

}
function Debugger(){
    console.log("RectPlayer One Pos: "+rectstartPosYP2)
}
/** DFebugger#Ablage 
 * 
 *     console.log("RectPlayer One Pos: "+rectstartPosYP2)
 *     console.log("BallVector X: "+ballVector.x)


*/






/** Player Controller */

var isbuttonPressed_PlayerOne_Up = false
var isbuttonPressed_PlayerOne_Down= false

var isbuttonPressed_PlayerTwo_Up = false
var isbuttonPressed_PlayerTwo_Down = false

/** RectPlayerOneMovement */ 
let rectstartPosYP1 = (c.height-200)/2
function DrawRectPlayerOne(){
    ctx.beginPath();
    ctx.rect(100, rectstartPosYP1, 20, 200)
    ctx.fill();
    ctx.stroke();
    ctx.closePath()    
}
window.addEventListener("keydown", (iP1kd) =>{

    
        if(iP1kd.key == "w" || iP1kd.key == "W"){
            isbuttonPressed_PlayerOne_Up = true
        }

    
        if(iP1kd.key == "s" || iP1kd.key == "S"){
            isbuttonPressed_PlayerOne_Down = true

        }    
})
window.addEventListener("keyup", (iP1ku) =>{

    
        if(iP1ku.key == "w" || iP1ku.key == "W"){
            isbuttonPressed_PlayerOne_Up = false
        }

    
   
        if(iP1ku.key == "s" || iP1ku.key == "S"){
            isbuttonPressed_PlayerOne_Down = false

        }       
})


/** RectPlayerTwoeMovement */ 
let rectstartPosYP2 = (c.height-200)/2
function DrawRectPlayerTwo(){
    ctx.beginPath();
    ctx.rect(c.width-100, rectstartPosYP2, 20, 200)
    ctx.fill();
    ctx.stroke();
    ctx.closePath()    
}
window.addEventListener("keydown", (iP2kd) =>{

    if(rectstartPosYP2 > 0){
        if(iP2kd.key == "ArrowUp"){
            isbuttonPressed_PlayerTwo_Up = true

        }
    }
    if(rectstartPosYP2 < c.height - 200){
        if(iP2kd.key == "ArrowDown"){
            isbuttonPressed_PlayerTwo_Down = true

        }    }    
})
window.addEventListener("keyup", (iP2ku) =>{

    if(rectstartPosYP2 > 0){
        if(iP2ku.key == "ArrowUp"){
            isbuttonPressed_PlayerTwo_Up = false

        }
    }
    if(rectstartPosYP2 < c.height - 200){
        if(iP2ku.key == "ArrowDown"){
            isbuttonPressed_PlayerTwo_Down = false

        }    }    
})


/** PlayerMovementUpdater */
var playermovespeed = 5
function PlayerMovementUpdater(){
    if (isbuttonPressed_PlayerOne_Up && rectstartPosYP1 > 5) {
        rectstartPosYP1 += -playermovespeed
    }
    if (isbuttonPressed_PlayerOne_Down && rectstartPosYP1 < c.height - 205) {
        rectstartPosYP1 += playermovespeed
    }
    if (isbuttonPressed_PlayerTwo_Up && rectstartPosYP2 > 5) {
        rectstartPosYP2 += -playermovespeed
    }
    if (isbuttonPressed_PlayerTwo_Down && rectstartPosYP2 < c.height - 205) {
        rectstartPosYP2 += playermovespeed    
    }
}


/** function to detect key up and down and thne push it throw updatefuncteion to get muultible 
 * inpouts
 * maybe get it in a controller class for readabylity */ 


   


 










