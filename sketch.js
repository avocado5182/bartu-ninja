let titleFont;

let sq1Pos;
let sq1InitPos;
let sq1Rot;
let sq1T = 0;
let sq1xOff = 0;
let sq1yOff = 0;

let sq2Pos;
let sq2InitPos;
let sq2Rot;
let sq2T = 1;
let sq2xOff = 0;
let sq2yOff = 0;

let tri1Pos;
let tri1InitPos;
let tri1Rot = 0;
let tri1xOff = 0;
let tri1yOff = 0;

let tri2Pos;
let tri2InitPos;
let tri2Rot = 360;
let tri2xOff = 0;
let tri2yOff = 0;

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
	sq1Pos = sq1InitPos = createVector(htmlEl.clientWidth / 5, htmlEl.clientHeight / 5);
	sq2Pos = sq2InitPos = createVector(htmlEl.clientWidth * 5 / 8, htmlEl.clientHeight * 3 / 10);

	tri1Pos = tri1InitPos = createVector(htmlEl.clientWidth * 19 / 40, htmlEl.clientHeight * 29 / 40)
	tri2Pos = tri2InitPos = createVector(htmlEl.clientWidth * 29 / 40, htmlEl.clientHeight * 3 / 20)

	pt1Pos = createVector(htmlEl.clientWidth * 3 / 10, htmlEl.clientHeight * 13 / 20)
	pt2Pos = createVector(htmlEl.clientWidth * 9 / 10, htmlEl.clientHeight * 1 / 2)
}

// t is 0...360
function drawSq(cx, cy, length, t = 0) {
	let x1 = cx - length / 2;
	let y1 = cy - length / 2;
	let x2 = cx + length / 2;
	let y2 = cy - length / 2;
	let x3 = cx + length / 2;
	let y3 = cy + length / 2;
	let x4 = cx - length / 2;
	let y4 = cy + length / 2;

	t = radians(t);

	let x1r = cx + (x1 - cx) * Math.cos(t) - (y1 - cy) * Math.sin(t);
	let y1r = cy + (x1 - cx) * Math.sin(t) + (y1 - cy) * Math.cos(t);
	let x2r = cx + (x2 - cx) * Math.cos(t) - (y2 - cy) * Math.sin(t);
	let y2r = cy + (x2 - cx) * Math.sin(t) + (y2 - cy) * Math.cos(t);
	let x3r = cx + (x3 - cx) * Math.cos(t) - (y3 - cy) * Math.sin(t);
	let y3r = cy + (x3 - cx) * Math.sin(t) + (y3 - cy) * Math.cos(t);
	let x4r = cx + (x4 - cx) * Math.cos(t) - (y4 - cy) * Math.sin(t);
	let y4r = cy + (x4 - cx) * Math.sin(t) + (y4 - cy) * Math.cos(t);
	

	// make a square using the quad function
	// use the new rotated x & y values
	quad(
		x1r, y1r,
		x2r, y2r,
		x3r, y3r,
		x4r, y4r
	);
}

function drawTri(cx, cy, r, rot = 0) {
	rot = degrees(rot)
	angleMode(RADIANS)

	r /= 2;
	triangle(
		cx + (r * Math.cos(rot)), cy + (r * Math.sin(rot)),
		cx + (r * Math.cos(rot + (PI * 2 / 3))), cy + (r * Math.sin(rot + (PI * 2 / 3))),
		cx + (r * Math.cos(rot - (PI * 2 / 3))), cy + (r * Math.sin(rot - (PI * 2 / 3)))
	);
}

function clamp(val, minVal, maxVal) {
	return Math.min(Math.max(val, minVal), maxVal);
}

function distSquared(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return dx * dx + dy * dy;
}

let cellSize = 75;
let gridPadding = 20;

function drawGrid() {
	// stroke(255, 255, 255, 50);

	strokeWeight(4);

	// make a grid of points with a nested for loop
	for (let x = gridPadding; x < width - gridPadding; x += cellSize) {
		for (let y = gridPadding; y < height - gridPadding; y += cellSize) {
			let centerOff = (cellSize - gridPadding) / 3;
			// make the stroke color change based on the distance from the mouse to the point to draw
			// if the mouse is close to the point, the stroke will be lighter (closer to white)
			// if the mouse is far from the point, the stroke will be darker (closer to light gray)
			// make the stroke slightly darker as y increases
			stroke(clamp(clamp(255 - distSquared(mouseX, mouseY, x, y) / 75, 80, 255) - y / 18, 20, 255));

			// stroke(clamp(255 - dist(mouseX, mouseY, x, y), 80, 255)); 
			
			// draw a point at each location
			point(x + centerOff, y);
		}
	}
}

function drawShapes() {
	strokeWeight(0)
	// squares
	let responsiveSize = (htmlEl.clientWidth + htmlEl.clientHeight * 5) / 6;
	let squareDivisor = 12;
	let triDivisor = 12;
	let ptDivisor = 48;

	rectMode(CENTER);
	fill("lime")
	drawSq(sq1Pos.x, sq1Pos.y, responsiveSize / squareDivisor, sq1T);
	fill("purple")
	drawSq(sq2Pos.x, sq2Pos.y, responsiveSize / squareDivisor, sq2T);

	// triangles
	fill("hotpink")
	drawTri(tri1Pos.x, tri1Pos.y, responsiveSize / triDivisor, tri1Rot);
	fill("orange")
	drawTri(tri2Pos.x, tri2Pos.y, responsiveSize / triDivisor, tri2Rot);

	// // line
	// line(lineEnd1Pos.x, lineEnd1Pos.y, lineEnd2Pos.x, lineEnd2Pos.y);

	// points
	stroke("red")
	strokeWeight(responsiveSize / ptDivisor + (-Math.abs(sq1T / 360 - 0.5) + 0.5) * 6)
	point(pt1Pos);

	stroke("blue")
	strokeWeight(responsiveSize / ptDivisor + (-Math.abs(sq2T / 360 - 0.5) + 0.5) * 4)
	point(pt2Pos);

	strokeWeight(0)
}

function updateShapeValues() {
	tri1Rot += 0.0001
	tri2Rot -= 0.00015

	sq1T += 1
	sq1T %= 360

	sq2T -= 0.8
	if (sq2T < 0) sq2T = 360

	// lerp tri1pos around tri1InitPos randomly and slowly
	tri1xOff += 0.02;
	tri1yOff += 0.01;
	let tri1x = lerp(tri1Pos.x, tri1InitPos.x + noise(tri1xOff) * 100 - 50, 0.01);
	let tri1y = lerp(tri1Pos.y, tri1InitPos.y + noise(tri1yOff) * 100 - 50, 0.01);
	tri1Pos = createVector(tri1x, tri1y);

	// lerp tri2pos around tri2InitPos randomly and slowly
	tri2xOff += 0.03;
	tri2yOff += 0.02;
	let tri2x = lerp(tri2Pos.x, tri2InitPos.x + noise(tri2xOff) * 100 - 50, 0.01);
	let tri2y = lerp(tri2Pos.y, tri2InitPos.y + noise(tri2yOff) * 100 - 50, 0.01);
	tri2Pos = createVector(tri2x, tri2y);

	// lerp sq1pos around sq1InitPos randomly and slowly
	sq1xOff += 0.04;
	sq1yOff += 0.02;
	let sq1x = lerp(sq1Pos.x, sq1InitPos.x + noise(sq1xOff) * 100 - 50, 0.01);
	let sq1y = lerp(sq1Pos.y, sq1InitPos.y + noise(sq1yOff) * 100 - 50, 0.01);
	sq1Pos = createVector(sq1x, sq1y);

	// lerp sq2pos around sq2InitPos randomly and slowly
	sq2xOff += 0.01;
	sq2yOff += 0.01;
	let sq2x = lerp(sq2Pos.x, sq2InitPos.x + noise(sq2xOff) * 100 - 50, 0.01);
	let sq2y = lerp(sq2Pos.y, sq2InitPos.y + noise(sq2yOff) * 100 - 50, 0.01);
	sq2Pos = createVector(sq2x, sq2y);
}

function draw() {
	background(20);

	drawGrid();

	drawShapes();

	updateShapeValues();

	// // title text
	// fill(255);
	// textFont(titleFont);
	// textSize(Math.min(102, Math.max(htmlEl.clientWidth / 18.8, 72), 120));
	// rectMode(CENTER);
	// textAlign(CENTER);
	// // text("Bartu Tunctan", htmlEl.clientWidth / 2, htmlEl.clientHeight * 0.8125, htmlEl.clientWidth, htmlEl.clientHeight);
}

function windowResized() {
	resizeCanvas(htmlEl.clientWidth, htmlEl.clientHeight);
	initShapePositions();
}