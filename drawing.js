var y = 100,
	x = 50,
	imgages = [];

window.onload = function () {
	var canvas = document.getElementById("canvas-element"),
	processingInstance = new Processing(canvas, sketchProc);
}

function sketchProc(processing) {
	processing.stroke(255);
	processing.frameRate(30);
	var img1 = processing.loadImage("flower.png");
	processing.mousePressed = function () {
		imgages.push({
			x : processing.mouseX,
			y : processing.mouseY
		});
	};

	processing.draw = function () {
		processing.background(255);
		for (var i = 0; i < imgages.length; i++) {
			processing.image(img1, imgages[i].x, imgages[i].y, 100, 100);
		}

		y = y - 1;
		if (y < 0) {
			y = processing.height;
		}
		var font = processing.loadFont("Arial");
		processing.textFont(font, 32);
		processing.fill(0);
		processing.text("I'm into Alexander Kirsanov", x, y);
	};
}