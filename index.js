var testimonials = [
	[ "testimonial one", "name one" ],
	[ "testimonial two", "name two" ],
	[ "testimonial three", "name three" ],
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

		console.log(window.innerHeight, window.scrollY, window.innerHeight + window.scrollY, d.top);

		if (window.innerHeight - rect.bottom > 100) {
			load.classList.remove("hidden");
		}

		if (showA1 && window.innerHeight + window.scrollY - d.top > 50) {
			showA1 = false;
			a1.style.setProperty("opacity", 0);
			a2.style.setProperty("opacity", 1);
		}

		if (!showA1 && window.innerHeight + window.scrollY - d.top < 50) {
			showA1 = true;
			a1.style.setProperty("opacity", 1);
			a2.style.setProperty("opacity", 0);
		}
	}

	window.addEventListener("scroll", onScroll);

	var n = 0;
	function nextTestimonial() {
		t.style.setProperty("opacity", 0);

		window.setTimeout(function() {
			tt.textContent = testimonials[n][0];
			ta.textContent = testimonials[n++][1];
			if (n == testimonials.length) {
				n = 0;
			}

			t.style.setProperty("opacity", 1);
		}, 1000);
	}
	nextTestimonial();
	setInterval(nextTestimonial, 10000);
}

