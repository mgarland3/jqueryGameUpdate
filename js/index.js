$("document").ready(function(){
 start();
 explode();
});
var rand,rAns;
var point = 0;

function start(){
	$(".box").html('');
	rand = (Math.floor(Math.random()*30)+1);
	for(var i = 0; i< rand; i++){
		$(".box").append('<div class="ball"></div>');		
	};
	for(var i = 0; i<= 4; i++){
		$(".ans-wrapper > .btn:nth-child("+i+") b").html(rand+(Math.floor(Math.random()*10)+1));	
	};
	rAns = (Math.floor(Math.random()*4)+1);
	$(".ans-wrapper > .btn:nth-child("+rAns+") b").html(rand);
};
function explode(){
  alert("You took too long! Your watermelons exploded!");
    point = 0;
    start();
}
setTimeout(explode, 40000);
$(".btn").click(function(){
	var ansId = $(this).attr("data-ans");
	if(ansId == rAns){
		start();
		point++;
		$(".point b").html(point);
	} else{
		alert("You guessed the wrong number of watermelons! None for you then. Bummer. The correct amount was "+ rand);
		point = 0;
		start();
	}
})