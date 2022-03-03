const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");
const p = document.getElementById("p")
const h3 = document.getElementById("h3")
const p2 = document.getElementById("p2")
const h32 = document.getElementById("h32")
const p3 = document.getElementById("p3")
const h33 = document.getElementById("h33")
const p4 = document.getElementById("p4")
const h34 = document.getElementById("h34")
const p5 = document.getElementById("p5")
const h35 = document.getElementById("h35")
const p6 = document.getElementById("p6")
const h36 = document.getElementById("h36")
const p7 = document.getElementById("p7")
const h37 = document.getElementById("h37")
const p8 = document.getElementById("p8")
const h38 = document.getElementById("h38")
const p9 = document.getElementById("p9")
const h39 = document.getElementById("h39")
const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")

document.addEventListener("keypress", (event) => {
	if (event.key == "a" || event.key === "A") {
		audioBoom.src = "sounds/boom.wav";
		boom.style.backgroundColor = "#5EF38C"
		h3.style.backgroundColor = "#5EF38C";
		p.style.backgroundColor = "#5EF38C";
		h1.style.color = "#5EF38C";
		h2.style.color = "#5EF38C";
	}
});
boom.addEventListener("click", () => {
	audioBoom.src = "sounds/boom.wav";
	boom.style.backgroundColor = "#5EF38C"
	h3.style.backgroundColor = "#5EF38C";
	p.style.backgroundColor = "#5EF38C";
	h1.style.color = "#5EF38C";
	h2.style.color = "#5EF38C";
});

document.addEventListener("keypress", (event) => {
	if (event.key == "s" || event.key === "S") {
		audioClap.src = "sounds/clap.wav";
		clap.style.backgroundColor = "#5EF38C"
		h32.style.backgroundColor = "#5EF38C";
		p2.style.backgroundColor = "#5EF38C";
		h1.style.color = "#5EF38C";
		h2.style.color = "#5EF38C";
	}
});
clap.addEventListener("click", () => {
	audioClap.src = "sounds/clap.wav";
	clap.style.backgroundColor = "#5EF38C"
	h32.style.backgroundColor = "#5EF38C";
	p2.style.backgroundColor = "#5EF38C";
	h1.style.color = "#5EF38C";
	h2.style.color = "#5EF38C";
});

document.addEventListener("keypress", (event) => {
	if (event.key == "d" || event.key === "D") {
		audioHiHat.src = "sounds/hihat.wav";
		hihat.style.backgroundColor = "#5EF38C"
		h33.style.backgroundColor = "#5EF38C";
		p3.style.backgroundColor = "#5EF38C";
		h1.style.color = "#5EF38C";
		h2.style.color = "#5EF38C";
	}
});
hihat.addEventListener("click", () => {
	audioHiHat.src = "sounds/hihat.wav";
	hihat.style.backgroundColor = "#5EF38C"
	h33.style.backgroundColor = "#5EF38C";
	p3.style.backgroundColor = "#5EF38C";
	h1.style.color = "#5EF38C";
	h2.style.color = "#5EF38C";
});

document.addEventListener("keypress", (event) => {
	if (event.key == "f" || event.key === "F") {
		audioKick.src = "sounds/kick.wav";
		kick.style.backgroundColor = "#5EF38C"
		h34.style.backgroundColor = "#5EF38C";
		p4.style.backgroundColor = "#5EF38C";
		h1.style.color = "#5EF38C";
		h2.style.color = "#5EF38C";
	}
});
kick.addEventListener("click", () => {
	audioKick.src = "sounds/kick.wav";
	kick.style.backgroundColor = "#5EF38C"
	h34.style.backgroundColor = "#5EF38C";
	p4.style.backgroundColor = "#5EF38C";
	h1.style.color = "#5EF38C";
	h2.style.color = "#5EF38C";
});

document.addEventListener("keypress", (event) => {
	if (event.key == "g" || event.key === "G") {
		audioOpenHat.src = "sounds/openhat.wav";
		openhat.style.backgroundColor = "#5EF38C"
		h35.style.backgroundColor = "#5EF38C";
		p5.style.backgroundColor = "#5EF38C";
		h1.style.color = "#5EF38C";
		h2.style.color = "#5EF38C";
	}
});
openhat.addEventListener("click", () => {
	audioOpenHat.src = "sounds/openhat.wav";
	openhat.style.backgroundColor = "#5EF38C"
	h35.style.backgroundColor = "#5EF38C";
	p5.style.backgroundColor = "#5EF38C";
	h1.style.color = "#5EF38C";
	h2.style.color = "#5EF38C";
});

document.addEventListener("keypress", (event) => {
	if (event.key == "h" || event.key === "H") {
		audioRide.src = "sounds/ride.wav";
		ride.style.backgroundColor = "#5EF38C"
		h36.style.backgroundColor = "#5EF38C";
		p6.style.backgroundColor = "#5EF38C";
		h1.style.color = "#5EF38C";
		h2.style.color = "#5EF38C";
	}
});
ride.addEventListener("click", () => {
	audioRide.src = "sounds/ride.wav";
	ride.style.backgroundColor = "#5EF38C"
	h36.style.backgroundColor = "#5EF38C";
	p6.style.backgroundColor = "#5EF38C";
	h1.style.color = "#5EF38C";
	h2.style.color = "#5EF38C";
});

document.addEventListener("keypress", (event) => {
	if (event.key == "j" || event.key === "J") {
		audioSnare.src = "sounds/snare.wav";
		snare.style.backgroundColor = "#5EF38C"
		h37.style.backgroundColor = "#5EF38C";
		p7.style.backgroundColor = "#5EF38C";
		h1.style.color = "#5EF38C";
		h2.style.color = "#5EF38C";
	}
});
snare.addEventListener("click", () => {
	audioSnare.src = "sounds/snare.wav";
	snare.style.backgroundColor = "#5EF38C"
	h37.style.backgroundColor = "#5EF38C";
	p7.style.backgroundColor = "#5EF38C";
	h1.style.color = "#5EF38C";
	h2.style.color = "#5EF38C";
});

document.addEventListener("keypress", (event) => {
	if (event.key == "k" || event.key === "K") {
		audioTink.src = "sounds/tink.wav";
		tink.style.backgroundColor = "#5EF38C"
		h38.style.backgroundColor = "#5EF38C";
		p8.style.backgroundColor = "#5EF38C";
		h1.style.color = "#5EF38C";
		h2.style.color = "#5EF38C";
	}
});
tink.addEventListener("click", () => {
	audioTink.src = "sounds/tink.wav";
	tink.style.backgroundColor = "#5EF38C"
	h38.style.backgroundColor = "#5EF38C";
	p8.style.backgroundColor = "#5EF38C";
	h1.style.color = "#5EF38C";
	h2.style.color = "#5EF38C";
});

document.addEventListener("keypress", (event) => {
	if (event.key == "l" || event.key === "L") {
		audioTom.src = "sounds/tom.wav";
		tom.style.backgroundColor = "#5EF38C"
		h39.style.backgroundColor = "#5EF38C";
		p9.style.backgroundColor = "#5EF38C";
		h1.style.color = "#5EF38C";
		h2.style.color = "#5EF38C";
	}
});
tom.addEventListener("click", () => {
	audioTom.src = "sounds/tom.wav";
	tom.style.backgroundColor = "#5EF38C"
	h39.style.backgroundColor = "#5EF38C";
	p9.style.backgroundColor = "#5EF38C";
	h1.style.color = "#5EF38C";
	h2.style.color = "#5EF38C";
});

document.addEventListener("keyup", () => {
	boom.style.backgroundColor = "#15616D";
	clap.style.backgroundColor = "#15616D";
	hihat.style.backgroundColor = "#15616D";
	kick.style.backgroundColor = "#15616D";
	openhat.style.backgroundColor = "#15616D";
	ride.style.backgroundColor = "#15616D";
	snare.style.backgroundColor = "#15616D";
	tink.style.backgroundColor = "#15616D";
	tom.style.backgroundColor = "#15616D";
	h3.style.backgroundColor = "#15616D";
	p.style.backgroundColor = "#15616D";
	h32.style.backgroundColor = "#15616D";
	p2.style.backgroundColor = "#15616D";
	h33.style.backgroundColor = "#15616D";
	p3.style.backgroundColor = "#15616D";
	h34.style.backgroundColor = "#15616D";
	p4.style.backgroundColor = "#15616D";
	h35.style.backgroundColor = "#15616D";
	p5.style.backgroundColor = "#15616D";
	h36.style.backgroundColor = "#15616D";
	p6.style.backgroundColor = "#15616D";
	h37.style.backgroundColor = "#15616D";
	p7.style.backgroundColor = "#15616D";
	h38.style.backgroundColor = "#15616D";
	p8.style.backgroundColor = "#15616D";
	h39.style.backgroundColor = "#15616D";
	p9.style.backgroundColor = "#15616D";
	h1.style.color = "#ffffff";
	h2.style.color = "#ffffff";
});

// ADD TIMER EVENT TO REVERT CLICK FUNCTIONS BACK TO ORIGINAL COLOURS //