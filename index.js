var testimonials = [
	[ "A riveting and poignant memoir written in lyrical and moving prose. This story will touch your heart. ", "Kathleen Harrington, author of the <span class=\"title\">Highland Lairds Trilogy</span>" ],
	[ "[H&#7891;ng-M&#7929; Basrai] has a deft writer's hand and eye for detail.", "Ruth Nolan, author of <span class=\"title\">Ruby Mountain</span>" ],
	[ "Reading the stories of refugees is always important, perhaps now more than ever.", "Victoria Waddle, managing editor of <span class=\"title\">Inlandia: A Literary Journey</span>" ],
];

window.onload = function() {
	var quote = document.getElementById("quote");
	var load = document.getElementById("load");
	var t = document.getElementById("t");
	var tt = document.getElementById("tt");
	var ta = document.getElementById("ta");
	var descr = document.getElementById("descr");
	var a1 = document.getElementById("a1");
	var a2 = document.getElementById("a2");

	load.classList.add("hidden");

	var q = quote.getBoundingClientRect();
	var l = load.getBoundingClientRect();

	var offset = Math.floor((q.bottom + 12) - l.top);
	load.style.setProperty("margin-top", offset + "px");
	load.style.setProperty("transition", "opacity 0.4s ease-in");

	q = quote.getBoundingClientRect();
	l = load.getBoundingClientRect();
	var d = descr.getBoundingClientRect();

	var showA1 = true;
	function onScroll(e) {
		var rect = quote.getBoundingClientRect();

		if (window.innerHeight - rect.bottom > 100) {
			load.classList.remove("hidden");
		}
	}

	window.addEventListener("scroll", onScroll);

	var n = 0;

	function loadTestimonial() {
		tt.innerHTML = testimonials[n][0];
		ta.innerHTML = testimonials[n++][1];

		if (n == testimonials.length) {
			n = 0;
		}
	}

	function nextTestimonial() {
		t.style.setProperty("opacity", 0);

		window.setTimeout(function() {
			loadTestimonial();

			t.style.setProperty("opacity", 1);
		}, 1000);
	}

	var maxH = 0;

	do {
		var th = t.getBoundingClientRect();
		if (maxH < th.height) {
			maxH = th.height;
		}
		loadTestimonial();
	} while (n != 0);

	maxH += 20;

	t.style.setProperty("height", maxH + "px");

	setInterval(nextTestimonial, 7000);
}

