
(function($, window, document) {

	"use strict";

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


}(window.jQuery, window, document));
