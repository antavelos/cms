
(function($, window, document) {

	"use strict";

	Conf.stripData.forEach(function(strip){
		Portfolio.drawPortfolioItem(strip.id, 'media/f25717d5-c789-41ca-a985-5c0dca571bd7.jpg', strip.title, strip.artist);
		Portfolio.drawModal(strip.id, 'media/f25717d5-c789-41ca-a985-5c0dca571bd7.jpg', strip.title, strip.artist, "some text");
	});

	$(".portfolio-caption").find("a").on("click", function() {
		var id = $(this).attr("data-id");
		Map.showMarker(parseInt(id));
	});
	Map.init();

}(window.jQuery, window, document));
