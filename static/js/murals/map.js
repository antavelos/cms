
var Map = (function(self){
	self.map = null;
	self.markers = [];
	self.infowindows = [];
	self.brusselsLat = 50.86674;
	self.brusselsLng = 4.35171;

	self.showMarker = function(id) {
		self.markers.forEach(function(m) {
			m.setVisible(false);
		});
		self.infowindows.forEach(function(i) {
			i.close();
		});
		var marker = self.markers[id-1],
			infowindow = self.infowindows[id-1];
		marker.setVisible(true);
		self.setCoords(marker.getPosition().lat(), marker.getPosition().lng());
		infowindow.open(self.map, marker);
	};

	self.setCoords = function(lat, lng) {
		if (lat) {
	        // self.map.setCenter(new google.maps.LatLng(lat, lng));
		}
		else {
	        self.map.setCenter(new google.maps.LatLng(self.brusselsLat, self.brusselsLng));
		}
	};

	self.init = function() {

        function initialize() {
            var mapOptions = {
            	center: new google.maps.LatLng(self.brusselsLat, self.brusselsLng),
            	zoom: 13,
            	scrollwheel: false
        	};
	        self.map = new google.maps.Map(document.getElementById("map-canvas"),
	            mapOptions);
			
	        $.ajax({
	        	url: 'api/strips',
	        	dataType: 'json'
	        })
	        .done(function(strips) {

	        	strips.forEach(function(strip) {
					var contentString = '<div><a class="" href="#portfolioModal' + strip.id + '" data-toggle="modal">';
					contentString += '<h4>' + strip.title + '</h4><p> by ' + strip.artist.name + '</p></a>';
					contentString += '<a class="portfolio-link" href="#portfolioModal' + strip.id + '" data-toggle="modal">';
					contentString += '<img style="width:200px; height:130px;" src="static/img/portfolio/roundicons.png"></img></a></div>';

					var infowindow = new google.maps.InfoWindow({
					    content: contentString
					});
			        var myLatlng = new google.maps.LatLng(strip.lat, strip.lng);

					// To add the marker to the map, use the 'map' property
					var marker = new google.maps.Marker({
					    position: myLatlng,
					    map: self.map,
					    title: strip.title
					    // visible: false
					});
					google.maps.event.addListener(marker, 'click', function() {
					    infowindow.open(self.map, marker);
					});

					self.markers.push(marker);
					self.infowindows.push(infowindow);

	        	});
	        });
        }

        google.maps.event.addDomListener(window, 'load', initialize);
	};

	return self;
}(Map || {}));