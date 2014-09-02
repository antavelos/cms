
(function($, window, document) {

	"use strict";

	Murals.init();
	Map.init();
	$("[name='map-switcher']").bootstrapSwitch({
		size: 'small',
		onColor: 'primary',
		onSwitchChange: function(event, state) {
			if (state) {
				Map.showAllMarkers();
			}
			else {
				Map.hideAllMarkers();
			}
		}
	});
	$(".portfolio-caption").find("a").on("click", function() {
		var id = $(this).attr("data-id");
		$('input[name="map-switcher"]').bootstrapSwitch('toggleState', false);
		Map.showMarker(parseInt(id));
	});

	$(".search-filter").find(".glyphicon").on('mouseover', function() {
		$(this).removeClass('glyphicon-remove');
		$(this).addClass('glyphicon-remove-sign');
	});

	$(".search-filter").find(".glyphicon").on('mouseout', function() {
		$(this).removeClass('glyphicon-remove-sign');
		$(this).addClass('glyphicon-remove');
	});

}(window.jQuery, window, document));
