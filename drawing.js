var y = 100,
x = 50,
images = [];

window.onload = function () {
	var canvas = document.getElementById("canvas-element"),
	processingInstance = new Processing(canvas, sketchProc);
}

function sketchProc(processing) {
	processing.stroke(255);
	processing.frameRate(30);
	var img1 = processing.loadImage("duck.png");
	processing.mousePressed = function () {
		images.push({
			x : processing.mouseX,
			y : processing.mouseY
		});
	};

	processing.draw = function () {
		processing.background(255);
		for (var i = 0; i < images.length; i++) {
			processing.image(img1, images[i].x, images[i].y, 100, 100);
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