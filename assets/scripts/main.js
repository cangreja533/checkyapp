jQuery(document).ready(function () {
	//Calculte offset
	var barBottom = -100;
	if (jQuery("body").hasClass("admin-bar")) {
		barBottom = barBottom + 32;
	}

	// //Waypoints
	// jQuery("body #main_content").waypoint(
	// 	function (direction) {
	// 		switchMenuScroll(direction, "down");
	// 	},
	// 	{
	// 		offset: barBottom,
	// 	}
	// );

	// Menu mobile
	jQuery("#navbar__toogle").on("click", function () {
		jQuery(this).toggleClass("active");
		jQuery(this).parents(".navbar--mobile").toggleClass("open");
		if (jQuery(this).hasClass("active")) {
			jQuery(".navbar__menu").stop(true, true).slideDown()
		} else {
			jQuery(".navbar__menu").stop(true, true).slideUp()
		}
	});
	jQuery(".navbar--mobile #dropdown-item .arrow").on("click", function () {
		jQuery(this).parent().find("> ul").stop(true, true).slideToggle();
		jQuery(this).toggleClass("active");
	});

	// Fadesearch
	jQuery("#fadesearch .close").on("click", function () {
		jQuery("#fadesearch").fadeOut(400);
	});
	jQuery("#fadesearch").on("click", function () {
		jQuery("#fadesearch").fadeOut(400);
	});
	jQuery("#fadesearch form").on("click", function (event) {
		event.stopPropagation();
	});
	jQuery(".search").on("click", function () {
		jQuery("#fadesearch").fadeIn(400);
		jQuery("#fadesearch input.clave").focus();
	});

	// Detectar scroll
	var direction = "none";

	jQuery(window).on("wheel", function (event) {
		new_direction = "down";
		if (event.originalEvent.deltaY < 0) {
			new_direction = "up";
		}

		if (direction != new_direction) {
			direction = new_direction;
			if (direction == "up") {
				jQuery(".navbar-brand + .navbar").removeClass("scroll-down");
			} else {
				jQuery(".navbar-brand + .navbar").addClass("scroll-down");
			}
		}
	});

	// Slider owl
	imagesLoaded('.mrk-slider--testimonios', function () {
		jQuery('.mrk-slider--testimonios').owlCarousel({
			loop: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 3
				},
				1000: {
					items: 5
				}
			}
		});
	}
	);

	// Slider owl Galeria
	imagesLoaded('.mrk-slider--galeria', function () {
		jQuery('.mrk-slider--galeria').owlCarousel({
			loop: false,
			// autoWidth: true,
			nav: false,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 3
				}
			}
		});
	}
	);


	// Slider owl Galeria
	imagesLoaded('.mrk-slider--galeria', function () {
		jQuery('.mrk-slider--galeria').owlCarousel({
			loop: false,
			// autoWidth: true,
			nav: false,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 3
				}
			}
		});
	}
	);
	// Slider owl Videos
	imagesLoaded('.mrk-slider--videos', function () {
		jQuery('.mrk-slider--videos').owlCarousel({
			margin: 10,
			loop: false,
			vide: true,
			nav: false,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 3
				}
			}
		});
	}
	);



});
