
(function($, window, document) {

	"use strict";

	Map.init();
	$(".portfolio-caption").find("a").on("click", function() {
		var id = $(this).attr("data-id");
		Map.showMarker(parseInt(id));
	});

}(window.jQuery, window, document));
