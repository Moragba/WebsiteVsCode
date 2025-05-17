const navbar = document.getElementById("Navbar")


function NavToggler(){
	if(window.innerWidth < 790 && !navbar.classList.contains("navshow")){
		navbar.classList.add("navshow")
		navbar.classList.add("navScale1")
		
		
		navbar.classList.remove("navclose")
		navbar.classList.remove("navScale02")
	}else{
		navbar.classList.add("navclose")
		navbar.classList.add("navScale02")
		navbar.classList.remove("navshow")
	}

}







const htmlQuery = document.querySelectorAll("html")
const transformable1 = document.querySelectorAll(".transformable1")
const transformable2 = document.querySelectorAll(".transformable2")


//Backround Observer
const options = {
	root: null,        
	rootMargin: '0px', 
	threshold: 0.2     
};
let BubbleArray = [];
const callback1 = (entries, observer) => {
	entries.forEach(entry => {        
		if (entry.isIntersecting ) {
            //console.log(entry.target)
            BubbleArray.push(entry.target)
            //console.log(entry.target.style.top) 
			//console.log(entry.toString() + "is Intersecting Callback1")
		} else {
            BubbleArray.shift()
			//console.log(entry.toString() + "is not Intersecting anymore Callback1")
		}
	});
};

const callback2 = (entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
            //console.log(entry.boundingClientRect.y)
            //console.log(entry.toString() + "is Intersecting Callback2")
		} else {
			//console.log(entry.toString() + "is not Intersecting anymore Callback2")
		}
	});
};

let scalingscroll
    document.addEventListener("scroll", (event)=>{
         
        //console.log(htmlQuery[0].scrollTop)
        transformable1.forEach(e =>{
            scalingscroll = ((htmlQuery[0].scrollTop-500)*-0.4)*-1    
            e.style.top = ""+scalingscroll+"px"
            //console.log(e.style.top)
                  
        })
        transformable2.forEach(e =>{
            scalingscroll = ((htmlQuery[0].scrollTop-500)*-0.6)*-1    
            e.style.top = ""+scalingscroll+"px"
            //console.log(e.style.top)
                  
        })
    })



const observer1 = new IntersectionObserver(callback1, options)
const observer2 = new IntersectionObserver(callback2, options)



transformable1.forEach(e =>{
    observer1.observe(e)
})
transformable2.forEach(e =>{
    observer2.observe(e)
})

//AboutIMG Observer


const callback3 = (entries, observer) => {
	entries.forEach(entry => {        
		if (entry.isIntersecting ) {
            AboutImage.classList.add("Bubbleinanimation")
           console.log(AboutImage)
		} else {
           
		}
	});
};
const options2 = {
	root: null,        
	rootMargin: '100px', 
	threshold: 0     
};
const AboutIMGobserver = new IntersectionObserver(callback3, options2)
const AboutImage = document.getElementById("AboutImage")

AboutIMGobserver.observe(AboutImage)


//Popping mini Bubble Script &Visisbilty and hide by click

let	BSkill1 = document.getElementById("BubbleSkill1")
let	BPop1 = document.getElementById("PubblePop1")
let	Card1 = document.getElementById("Card1")

function Popping1(){
	BSkill1.classList.add("hidden")
	BPop1.classList.remove("hidden")
	Card1.classList.remove("hidden")
	Card1.classList.add("CardSpawnCard1")
	BSkill1Cont.classList.add("hidden")	
}

let	BSkill2 = document.getElementById("BubbleSkill2")
let	BPop2 = document.getElementById("PubblePop2")
let	Card2 = document.getElementById("Card2")

function Popping2(){
	BSkill2.classList.add("hidden")
	BPop2.classList.remove("hidden")
	Card2.classList.remove("hidden")
	Card2.classList.add("CardSpawnCard2")
	BSkill2Cont.classList.add("hidden")

}

let	BSkill3 = document.getElementById("BubbleSkill3")
let	BPop3 = document.getElementById("PubblePop3")
let	Card3 = document.getElementById("Card3")

function Popping3(){
	BSkill3.classList.add("hidden")
	BPop3.classList.remove("hidden")
	Card3.classList.remove("hidden")
	Card3.classList.add("CardSpawnCard3")
	BSkill3Cont.classList.add("hidden")	
}

let	BSkill4 = document.getElementById("BubbleSkill4")
let	BPop4 = document.getElementById("PubblePop4")
let	Card4 = document.getElementById("Card4")

function Popping4(){
	BSkill4.classList.add("hidden")
	BPop4.classList.remove("hidden")
	Card4.classList.remove("hidden")
	Card4.classList.add("CardSpawnCard4")
	BSkill4Cont.classList.add("hidden")
}



let	BSRef1 = document.getElementById("BubbleRef1")
let	BPop5 = document.getElementById("PubblePop5")

function Popping5(){
	BSRef1.classList.add("hidden")
	BPop5.classList.remove("hidden")
}

let	BSRef2 = document.getElementById("BubbleRef2")
let	BPop6 = document.getElementById("PubblePop6")

function Popping6(){
	BSRef2.classList.add("hidden")
	BPop6.classList.remove("hidden")
}

let	BSRef3 = document.getElementById("BubbleRef3")
let	BPop7 = document.getElementById("PubblePop7")

function Popping7(){
	BSRef3.classList.add("hidden")
	BPop7.classList.remove("hidden")
}

let	BSRef4 = document.getElementById("BubbleRef4")
let	BPop8 = document.getElementById("PubblePop8")

function Popping8(){
	BSRef4.classList.add("hidden")
	BPop8.classList.remove("hidden")
}
let	BSRef5 = document.getElementById("BubbleRef5")
let	BPop9 = document.getElementById("PubblePop9")

function Popping9(){
	BSRef5.classList.add("hidden")
	BPop9.classList.remove("hidden")
}

let	BSRef6 = document.getElementById("BubbleRef6")
let	BPop10 = document.getElementById("PubblePop10")

function Popping10(){
	BSRef6.classList.add("hidden")
	BPop10.classList.remove("hidden")
}


const cardsAll = document.querySelectorAll(".Card")
const BSkill1Cont = document.getElementById("BubbleSkill1Cont")
const BSkill2Cont = document.getElementById("BubbleSkill2Cont")
const BSkill3Cont = document.getElementById("BubbleSkill3Cont")
const BSkill4Cont = document.getElementById("BubbleSkill4Cont")


cardsAll.forEach((c) => {
	c.addEventListener("click",(e) =>{
		e.currentTarget.classList.add("hidden")

		if(e.currentTarget.classList.contains("Card1Pos")){
			BSkill1.classList.remove("hidden")
			BPop1.classList.add("hidden")
			BSkill1Cont.classList.remove("hidden")						
		}
		if(e.currentTarget.classList.contains("Card2Pos")){
			BSkill2.classList.remove("hidden")
			BPop2.classList.add("hidden")
			BSkill2Cont.classList.remove("hidden")
		}
		if(e.currentTarget.classList.contains("Card3Pos")){
			BSkill3.classList.remove("hidden")
			BPop3.classList.add("hidden")
			BSkill3Cont.classList.remove("hidden")
		}
		if(e.currentTarget.classList.contains("Card4Pos")){
			BSkill4.classList.remove("hidden")
			BPop4.classList.add("hidden")
			BSkill4Cont.classList.remove("hidden")
		}
		
		
	})}
)
	 





function OpenPBRez(){
	window.open('../PrincessBackery/PrincessBackery.html')
}
function OpenRGRez(){
	window.open('../RetroGame/RetroGame.html')
}
function AlertDisclaimer(){
	confirm("Disclaimer. Der Inhalt dieser Seite ist lediglich ein Muster eines Designs. Keine der hier gezeigten Inhalte ist echt und dient nur der Veranschaulichung eines Designbeispiels.")
}






















