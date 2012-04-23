var windowHeight=$(window).height();
var count=10;
var totalScrollArea=windowHeight;
var currentScroll;
var index=0;
var oldPosition=0;
var currentScene=0;


var Scenes = {"comic": [
	{
		name: "panel0",
		dialogue: "",
		dialoguex: "0px",
		dialoguey: "0px",
		background: "images/kitchen.png",
		scrollarea: 150,
		parachute: "",
		emohair:"",
		dadhair:""
	},
	{
		name: "panel1",
		dialogue: "Quit causing a scene",
		dialoguex: "100px",
		dialoguey: "400px",
		background: "images/dadcloseup.png",
		scrollarea: 0,
		parachute: "",
		emohair:"",
		dadhair:"images/dadhair1.png"
	},
	{
		name: "panel2",
		dialogue: "I keep telling you, I'm not scene! I'm emo, ok?",
		dialoguex: "200px",
		dialoguey: "400px",
		background: "images/emocloseup.png",
		scrollarea: 0,
		parachute: "images/parachute1.png",
		emohair:"images/emohair1.png",
		dadhair:""
	},
	{
		name: "panel3",
		dialogue: "Was the parachute really necessary, son? <br />you should have just followed us",
		dialoguex: "400px",
		dialoguey: "300px",
		background: "images/dadcallsout.png",
		scrollarea: 0,
		parachute: "images/parachute2.png",
		emohair:"images/emohair2.png",
		dadhair:"images/dadhair2.png"

	},
	{
		name: "panel4",
		dialogue: "Fine! JUST GO AHEAD AND <br />CRUSH a unique snowflake, dad.<br /> Life is pointless",
		dialoguex: "400px",
		dialoguey: "800px",
		background: "images/emoresponds.png",
		scrollarea: 0,
		parachute: "images/parachute2.png",
		emohair:"images/emohair3.png",
		dadhair:"images/dadhair2.png"
	},
	{
		name: "shhh",
		dialogue: "Shhh, the last thing we need is another RAID",
		dialoguex: "100px",
		dialoguey: "100px",
		background: "images/shhh.png",
		scrollarea: 0,
		parachute: "",
		emohair:"images/emohair4.png",
		dadhair:"images/dadhair3.png"
	},
	{
		name: "raiding",
		dialogue: "Um, we're the ones raiding! Look at all this high fructose crap you expect us to eat.",
		dialoguex: "100px",
		dialoguey: "800px",
		background: "images/raiding.png",
		scrollarea: 0,
		parachute: "",
		emohair:"images/emohair5.png",
		dadhair:"images/dadhair3.png"
	},
	{
		name: "spray",
		dialogue: "I'm talking about the spray, Camponotus Formicidae.<br /> Now come on join the line.",
		dialoguex: "400px",
		dialoguey: "400px",
		background: "images/spray.png",
		scrollarea: 0,
		parachute: "",
		emohair:"images/emohair6.png",
		dadhair:"images/dadhair4.png"
	},
	{
		name: "look",
		dialogue: "",
		dialoguex: "200px",
		dialoguey: "200px",
		background: "images/look.png",
		scrollarea: 0,
		scrollarea: 500,
		parachute: "",
		emohair:"images/emohair7.png",
		dadhair:""
	},
	{
		name: "tone",
		dialogue: "Don't you dare take that pheromone with me young man.",
		dialoguex: "400px",
		dialoguey: "400px",
		background: "images/tone.png",
		scrollarea: 0,
		parachute: "images/parachute2.png",
		emohair:"images/emohair3.png",
		dadhair:"images/dadhair2.png"
	},
	{
		name: "queen",
		dialogue: "Whatever, you're not my Queen.",
		dialoguex: "400px",
		dialoguey: "900px",
		background: "images/queen.png",
		scrollarea: 0,
		parachute: "images/parachute2.png",
		emohair:"images/emohair2.png",
		dadhair:"images/dadhair2.png"
	},
	{
		name: "end",
		dialogue: "",
		dialoguex: "200px",
		dialoguey: "400px",
		background: "images/queen.png",
		scrollarea: 300,
		parachute: "images/parachute2.png",
		emohair:"images/emohair2.png",
		dadhair:"images/dadhair2.png"
	},
	
	
]};



$(document).ready(function(){
	
	document.getElementById("panelContainer").style.height=windowHeight+"px";
	 for(var i=0; i< Scenes.comic.length; i++) {
    	if(Scenes.comic[i].dialogue.length>0){
        	totalScrollArea+=Scenes.comic[i].dialogue.length*10;
        }
        else{
        	totalScrollArea+=Scenes.comic[i].scrollarea;
        }
        Scenes.comic[i].scrollarea=totalScrollArea-windowHeight+60;
    }
    document.getElementById("comic").style.height=totalScrollArea+"px";
    document.getElementById("panelContainer").style.backgroundImage="url("+Scenes.comic[0].background+")";
	Scenes.comic[8].dialogue=". . .";
	
});


$(window).bind('scroll', function(){ 
		changeScene();
	});
	

function changeScene(){

	currentScroll = $('#comic').scrollTop();
	for(var i=1;i<Scenes.comic.length; i++){
		if(currentScroll>Scenes.comic[i-1].scrollarea && currentScroll<=Scenes.comic[i].scrollarea)
		{
			$('#panelContainer').css("background-image", "url("+Scenes.comic[i-1].background+")");
			oldPosition=(Scenes.comic[i-1].scrollarea);
			currentScene=i-1;
		}
	}
	currentPosition=parseInt((currentScroll-oldPosition)/5);
	//console.log(Scenes.comic[currentScene].dialogue[currentPosition]);
	var temptext;
	temptext = (Scenes.comic[currentScene].dialogue.substring(0,currentPosition))
	temptext="<p>"+temptext+"</p>"
	$('#dialogue').html(temptext);
	document.getElementById("dialogue").style.top=Scenes.comic[currentScene].dialoguex; 
	document.getElementById("dialogue").style.left=Scenes.comic[currentScene].dialoguey; 
}
