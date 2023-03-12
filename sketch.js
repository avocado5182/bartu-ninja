let titleFont;
let sq1Pos;
let sq1Rot;
let sq1T = 0;

let sq2Pos;
let sq2Rot;
let sq2T = 1;

let tri1Pos;
let tri1Rot = 0;
let tri2Pos;
let tri2Rot = 360;

let line1Pos;
let line1Rot;

let line2Pos;
let line2Rot;

let pt1Pos;
let pt2Pos;

function preload() {
	titleFont = loadFont("src/fonts/JosefinSans-Bold.ttf");
}

let htmlEl = document.querySelector("html");

function setup() {
	let canv = createCanvas(htmlEl.clientWidth, htmlEl.clientHeight);
	console.log("loaded");
    $(".fade-in").css("animation", "1s ease-in-out 0s 1 normal forwards running fadeIn");
	$(".fade-in").one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
		$(".fade-in").remove();
	});
	document.querySelector(".hero").appendChild(canv.elt);

	initShapePositions();
}

function initShapePositions() {
	sq1Pos = createVector(htmlEl.clientWidth / 5, htmlEl.clientHeight / 5)
	sq2Pos = createVector(htmlEl.clientWidth * 5 / 8, htmlEl.clientHeight * 3 / 10)

	tri1Pos = createVector(htmlEl.clientWidth * 19 / 40, htmlEl.clientHeight * 29 / 40)
	tri2Pos = createVector(htmlEl.clientWidth * 29 / 40, htmlEl.clientHeight * 3 / 20)

	pt1Pos = createVector(htmlEl.clientWidth * 3 / 10, htmlEl.clientHeight * 13 / 20)
	pt2Pos = createVector(htmlEl.clientWidth * 9 / 10, htmlEl.clientHeight * 1 / 2)
}

// t is 0...1
function drawSq(cx, cy, r, t = 0) {
	quad(
		map(t, 0, 1, cx - r / 2, cx + r / 2), cy + r * (abs(t - 0.5) - 1), // top left
		cx + r * (-abs(t - 0.5) + 1), map(t, 0, 1, cy - r / 2, cy + r / 2), // top right
		map(t, 0, 1, cx + r / 2, cx - r / 2), cy + r * -(abs(t - 0.5) - 1), // bottom right
		cx + r * (abs(t - 0.5) - 1), map(t, 0, 1, cy + r / 2, cy - r / 2) // bottom left
	);
}

function drawTri(cx, cy, r, rot = 0) {
	rot = degrees(rot)
	angleMode(RADIANS)

	r /= 2;
	triangle(
		cx + (r * cos(rot)), cy + (r * sin(rot)),
		cx + (r * cos(rot + (PI * 2 / 3))), cy + (r * sin(rot + (PI * 2 / 3))),
		cx + (r * cos(rot - (PI * 2 / 3))), cy + (r * sin(rot - (PI * 2 / 3)))
	);
}

function drawShapes() {
	strokeWeight(0)
	// squares
	rectMode(CENTER);
	fill("lime")
	drawSq(sq1Pos.x, sq1Pos.y, htmlEl.clientWidth / 36, sq1T);
	fill("purple")
	drawSq(sq2Pos.x, sq2Pos.y, htmlEl.clientWidth / 36, sq2T);

	// triangles
	fill("hotpink")
	drawTri(tri1Pos.x, tri1Pos.y, htmlEl.clientWidth / 24, tri1Rot);
	fill("orange")
	drawTri(tri2Pos.x, tri2Pos.y, htmlEl.clientWidth / 24, tri2Rot);

	// // line
	// line(lineEnd1Pos.x, lineEnd1Pos.y, lineEnd2Pos.x, lineEnd2Pos.y);

	// points
	stroke("red")
	strokeWeight(htmlEl.clientWidth / 96 + (-abs(sq1T - 0.5) + 0.5) * 6)
	point(pt1Pos);

	stroke("blue")
	strokeWeight(htmlEl.clientWidth / 96 + (-abs(sq2T - 0.5) + 0.5) * 4)
	point(pt2Pos);

	strokeWeight(0)
}

function draw() {
	background(20);

	drawShapes();

	tri1Rot += 0.0001
	tri2Rot -= 0.00015

	sq1T += 0.01
	sq1T %= 1

	sq2T -= 0.008
	if (sq2T < 0) sq2T = 1

	// title text
	fill(255);
	textFont(titleFont);
	textSize(min(102, max(htmlEl.clientWidth / 18.8, 60), 102));
	rectMode(CENTER);
	textAlign(CENTER);
	text("Bartu Tunctan", htmlEl.clientWidth * 1 / 2, htmlEl.clientHeight * 7 / 8, htmlEl.clientWidth, htmlEl.clientHeight);
}

function windowResized() {
	resizeCanvas(htmlEl.clientWidth, htmlEl.clientHeight);
	initShapePositions();
}