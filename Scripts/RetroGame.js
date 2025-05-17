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

/** UISettings */
var OneplayerButton = document.getElementById("OneplayerButton")
var TwoplayerButton = document.getElementById("TwoplayerButton")
var Player1PointsUI = document.getElementById("Player1_Points")
var Player2PointsUI = document.getElementById("Player2_Points")
var Player1_Points = 0
var Player2_Points = 0
function SetPlayerPointsZero(){
    Player1_Points = 0
    Player2_Points = 0
    Player1PointsUI.innerText = Player1_Points
    Player2PointsUI.innerText = Player2_Points
}
function RefreshPlayerPoints(){
    Player1PointsUI.innerText = Player1_Points
    Player2PointsUI.innerText = Player2_Points
}

var Countdown = document.getElementById("Countdown")

 




/** Gamestates */
var ballismoving = false;
var GameRunning = false
var BallHitsWallPlayer1 = false
var BallHitsWallPlayer2 = false
var gameMode = 0


/** Audio */
/** @type {HTMLAudioElement} */
var hit_1_sound = document.getElementById("Hit_01")
hit_1_sound.playbackRate = 0.5;

function InceasePlaybackRateHit_01(){

    if(hit_1_sound.playbackRate < 1){
        hit_1_sound.play()
        hit_1_sound.playbackRate += 0.1
    }else{
        hit_1_sound.play()
    }


}





/** Cyrcle/Ball Settings (Position,) */
let circleposX = 350;
let circleposY = c.width/2;
var ballRadius = 15
var ballSpeed = new BallSpeed(4)
var speedmultiplier = 1.2

function StartFromButtonOne(){
    OneplayerButton.disabled = true
    TwoplayerButton.disabled = true
    gameMode = 1


    /** ScaleField on Start Animation */
    Delay(1).then(() => c.classList.add("ScaleFieldUpAnimation"))
    Delay(1500).then(() => c.classList.remove("ScaleFieldhalf"))
    Delay(1500).then(() => c.classList.add("ScaleFieldGameSize"))   
    Delay(1500).then(() => c.classList.remove("ShadowFieldhalf"))
    Delay(1500).then(() => c.classList.add("ShadowFieldGameSize"))



    Delay(1).then(() => Countdown.innerText = "3")
    Delay(1).then(() => Countdown.classList.add("CountAnimation"))
    Delay(990).then(() => Countdown.classList.remove("CountAnimation"))

    Delay(1000).then(() => Countdown.innerText = "2")
    Delay(1000).then(() => Countdown.classList.add("CountAnimation"))
    Delay(1990).then(() => Countdown.classList.remove("CountAnimation"))

    Delay(2000).then(() => Countdown.innerText = "1")
    Delay(2000).then(() => Countdown.classList.add("CountAnimation"))
    Delay(2990).then(() => Countdown.classList.remove("CountAnimation"))


    Delay(3000).then(() => Countdown.style.display = "none")
    Delay(3000).then(() => StartGame())

}

function StartFromButtonTwo(){
    OneplayerButton.disabled = true
    TwoplayerButton.disabled = true

    gameMode = 2


    /** ScaleField on Start Animation */
    Delay(1).then(() => c.classList.add("ScaleFieldUpAnimation"))
    Delay(1500).then(() => c.classList.remove("ScaleFieldhalf"))
    Delay(1500).then(() => c.classList.add("ScaleFieldGameSize"))   
    Delay(1500).then(() => c.classList.remove("ShadowFieldhalf"))
    Delay(1500).then(() => c.classList.add("ShadowFieldGameSize"))



    Delay(1).then(() => Countdown.innerText = "3")
    Delay(1).then(() => Countdown.classList.add("CountAnimation"))
    Delay(990).then(() => Countdown.classList.remove("CountAnimation"))

    Delay(1000).then(() => Countdown.innerText = "2")
    Delay(1000).then(() => Countdown.classList.add("CountAnimation"))
    Delay(1990).then(() => Countdown.classList.remove("CountAnimation"))

    Delay(2000).then(() => Countdown.innerText = "1")
    Delay(2000).then(() => Countdown.classList.add("CountAnimation"))
    Delay(2990).then(() => Countdown.classList.remove("CountAnimation"))


    Delay(3000).then(() => Countdown.style.display = "none")
    Delay(3000).then(() => StartGame())

}

/** Start without stack Velocity (Switch) */
function StartGame(){
    if(GameRunning){

    }else if(!GameRunning){
        
        GameRunning = true
        Update();
    }
}

function LoseDetector(){
    if(ballVector.y >= c.width-ballRadius-60){
        GameRunning = false
        Player1_Points++
        RefreshPlayerPoints()
        Delay(1000).then(() => ReseteToStartGame())
        Delay(1200).then(() => StartGame())

        
    }
    if(ballVector.y <= 60 + ballRadius){
        GameRunning = false
        Player2_Points++
        RefreshPlayerPoints()
        Delay(1000).then(() => ReseteToStartGame())
        Delay(1200).then(() => StartGame())
    }
}
     
function OnLoad(){
    InitializesGame()

}
function InitializesGame(){
    DrawRectPlayerOne()
    DrawRectPlayerTwo()
    DrawBall()
    SetPlayerPointsZero()
    Countdown.style.left = ((window.innerWidth / 2) - 150) + "px"
         

}
function ReseteToStartGame(){
    ReseteGameStates()
    DrawRectPlayerOne()
    DrawRectPlayerTwo()
    DrawBall()
}
function ReseteGameStates(){
    ballismoving = false;
    GameRunning = false
    BallHitsWallPlayer1 = false
    BallHitsWallPlayer2 = false
    circleposX = 350;
    circleposY = c.width/2;
    ballVector.x = circleposX
    ballVector.y = circleposY
    rectstartPosYP1 = (c.height-200)/2
    rectstartPosYP2 = (c.height-200)/2
    RandomBallStart()
    ctx.clearRect(0, 0, c.width, c.height);
    hit_1_sound.playbackRate = 0.5;
}
function RandomBallStart(){
    if(GetRandomInt(2) == 0){
        ballSpeed.ballspeedY = 4
    } else{
        ballSpeed.ballspeedY = -4
    }
    if(GetRandomInt(2) == 0){
        ballSpeed.ballspeedX = GetRandomInt(5)
        if(ballSpeed.ballspeedX == 0){
            RandomBallStart()
        }
    } else{
        ballSpeed.ballspeedX = GetRandomInt(5) * -1
        if(ballSpeed.ballspeedX == 0){
            RandomBallStart()
        }
    }
    
}

function GetRandomInt(max){
    return Math.floor(Math.random() * max)
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
    if(ballVector.y >= c.width-ballRadius-100 && 
        ballVector.x < rectstartPosYP2 +200 && 
        ballVector.x > rectstartPosYP2)
        {
            InceasePlaybackRateHit_01()
            if(ballSpeed.ballspeedY < 10){
                ballSpeed.ballspeedY = (ballSpeed.ballspeedY * speedmultiplier) * -1;
            }else{
                ballSpeed.ballspeedY = ballSpeed.ballspeedY * -1;
            }
                    
    }
    if(ballVector.y <= 120 + ballRadius && 
        ballVector.x < rectstartPosYP1 +200 && 
        ballVector.x > rectstartPosYP1)
        {
            InceasePlaybackRateHit_01()

            if(ballSpeed.ballspeedY > -10){
                ballSpeed.ballspeedY = (ballSpeed.ballspeedY * speedmultiplier) * -1;
            }else{
                ballSpeed.ballspeedY = ballSpeed.ballspeedY * -1;
            }
}


    

}
function Debugger(){
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
    ctx.shadowColor = "rgba(120, 120, 255, 1)"
    ctx.shadowBlur = 5    
    ctx.rect(100, rectstartPosYP1, 15, 200)
    ctx.fillStyle = "rgba(255, 255, 255, 1)"
    ctx.fill();
    ctx.strokeStyle = "rgba(255, 255, 255, 1)"
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
    ctx.rect(c.width-100, rectstartPosYP2, 15, 200)
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
var cpumovespeed = 3

function PlayerMovementUpdater(){
    if (isbuttonPressed_PlayerOne_Up && rectstartPosYP1 > 5) {
        rectstartPosYP1 += -playermovespeed
    }
    if (isbuttonPressed_PlayerOne_Down && rectstartPosYP1 < c.height - 205) {
        rectstartPosYP1 += playermovespeed
    }
    if (isbuttonPressed_PlayerTwo_Up && rectstartPosYP2 > 5 && gameMode == 2) {
        rectstartPosYP2 += -playermovespeed
    }
    if (isbuttonPressed_PlayerTwo_Down && rectstartPosYP2 < c.height - 205 && gameMode == 2) {
        rectstartPosYP2 += playermovespeed    
    }
    if (rectstartPosYP2+100 > ballVector.x && rectstartPosYP2 > 5 && gameMode == 1) {
        rectstartPosYP2 += -cpumovespeed
    }
    if (rectstartPosYP2+100 < ballVector.x && rectstartPosYP2 < c.height - 205 && gameMode == 1) {
        rectstartPosYP2 += cpumovespeed    
    }
}

function Delay(time){
    return new Promise(resolve => setTimeout(resolve, time));
}





/** function to detect key up and down and thne push it throw updatefuncteion to get muultible 
 * inpouts
 * maybe get it in a controller class for readabylity */ 


   


 










