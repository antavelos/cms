
var Map = (function(self){
	self.map = null;
	self.markers = [];
	self.brusselsLat = 50.86674;
	self.brusselsLng = 4.35171;

	self.showMarker = function(id) {
		self.markers.forEach(function(m) {
			m.setVisible(false);
		});
		var marker = self.markers[id - 1];
		marker.setVisible(true);
		self.resize(marker.getPosition().lat(), marker.getPosition().lng());
	};

	self.resize = function(lat, lng) {
		if (lat && lng) {
	        self.map.setCenter(new google.maps.LatLng(lat, lng));
		}
		else {
	        self.map.setCenter(new google.maps.LatLng(self.brusselsLat, self.brusselsLng));
		}
	};

	self.init = function() {

        function initialize() {
            var mapOptions = {
            	center: new google.maps.LatLng(self.brusselsLat, self.brusselsLng),
            	zoom: 13
        	};
	        self.map = new google.maps.Map(document.getElementById("map-canvas"),
	            mapOptions);
			
			Conf.stripData.forEach(function(strip){

				var contentString = '<div><a class="portfolio-link" href="#portfolioModal' + strip.id + '" data-toggle="modal">';
				contentString += '<h3>' + strip.title + '</h3><p> by ' + strip.artist + '</p></a>';
				contentString += '<a class="portfolio-link" href="#portfolioModal' + strip.id + '" data-toggle="modal">';
				contentString += '<img style="width:290px; height:200px;" src="static/' + strip.img + '"></img></a></div>';

				var infowindow = new google.maps.InfoWindow({
				    content: contentString
				});
		        var myLatlng = new google.maps.LatLng(strip.lat, strip.lng);

				// To add the marker to the map, use the 'map' property
				var marker = new google.maps.Marker({
				    position: myLatlng,
				    map: self.map,
				    title: strip.title,
				    visible: false
				});
				google.maps.event.addListener(marker, 'click', function() {
				    infowindow.open(self.map, marker);
				});

				self.markers.push(marker);
					
			});
        }
        google.maps.event.addDomListener(window, 'load', initialize);
        google.maps.event.addDomListener(window, 'resize', self.resize);
	};

	return self;
}(Map || {}));