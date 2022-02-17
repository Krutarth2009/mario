function preload() {
//	world_start = loadSound("world_start.wav");
//	setSprites();
//	MarioAnimation();
console.log("helloi");
}

function setup() {
console.log("hello");

	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	
}

function draw() {
	game()
}




