

var Murals = (function(self) {

	"use strict";

	/**
	 * General variables
	 */
	self.stripsUrl = 'api/strips/';

	/**
	 * [Strip description]
	 * @param {[type]} el [description]
	 */
	self.Strip = function(el) {
		this.element = el;
		this.marker = el.find('.portfolio-caption').find('a');
		this.image = el.find('.portfolio-hover');
		this.id = parseInt(el.find('a').attr('data-id'));
	};

	self.Strip.prototype = (function() {

		return {
			constructor: self.Strip,

			onClick: function(callback) {
				var that = this;

				this.image.on('click', function() {
					callback.call(this, that.id);
				});
			},

			onMarkerClick: function(callback) {
				this.marker.on('click', function() {
					callback.call();
				});
			},

			hide: function() {
				this.element.hide();
			},

			show: function() {
				this.element.show();
			}
		};
	})();


	/**
	 * [Modal description]
	 * @param {[type]} el [description]
	 */
	self.Modal = function(el) {
		this.element = el;
	};

	self.Modal.prototype = (function() {

		return {
			constructor: self.Modal,

			draw: function(strip) {
				var content = '';

				if (strip === undefined) {
					content = 'No data found!';
				} else {
					content += '<div class="modal-content">';
					content +=     '<div class="close-modal" data-dismiss="modal">';
					content += 		   '<div class="lr">';
					content +=    	   	   '<div class="rl">';
					content +=             '</div>';
					content +=         '</div>';
					content +=     '</div>';
					content +=     '<div class="container">';
					content +=         '<div class="row">';
					content +=             '<div class="col-lg-8 col-lg-offset-2">';
					content +=                 '<div class="modal-body">';
					content +=                     '<!-- Project Details Go Here -->';
					content +=                      '<h2>' + strip.title + '</h2>';
					content +=                      '<p class="item-intro text-muted">by ' + strip.artist.name + '</p>';
					content +=                      '<img class="img-responsive img-centered" src="' + DJANGO_MEDIA_URL + strip.image_big + '" alt="">';
					content +=                      (strip.text) ? '<p>' + strip.text + '<a href="http://visitbrussels.be/bitc/BE_en/content/9820/the-49-walls-of-the-comic-strip-walk-in-detail.do">[via]</a></p>' : '<p>There is not any info for this strip yet!</p>';
					content +=                      '<button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close</button>';
					content +=                      '</div>';
					content +=                 '</div>';
					content +=            '</div>';
					content +=       '</div>';
					content += '</div>';
				}

				this.element.html(content);
			}
		};
	})();


	/**
	 * [Search description]
	 * @param {[type]} el [description]
	 */
	self.Search = function(el) {
		this.element = el;
		this.originalInput = this.element.find("input:text");		
		this.originalInput.tagsinput({
			maxTags: 1
		});
		this.innerInput = this.element.find(".bootstrap-tagsinput").find("input:text");
	};

	self.Search.prototype = (function() {
		
		var getData = function(callback) {
			var text = this.getText(),
			    url = self.stripsUrl + '?search-strip=' + text;

			$.ajax({
				url: url,
				dataType: 'json'
			})
			.done(callback);
		};

		return {
			constructor: self.Search,

			getText: function() {
				return this.originalInput.val();
			},

			clear: function() {
				this.originalInput.tagsinput('removeAll');
			},

			onSubmit: function(callback) {
				var that = this;
				this.innerInput.on('keyup', function(e) {
					if (e.keyCode === 13) {
						getData.call(that, callback);
						that.innerInput.blur();
						var curState = $('input[name="map-switcher"]').bootstrapSwitch('state');
						if (curState) {
							$('input[name="map-switcher"]').bootstrapSwitch('toggleState', false);
						}
					}
				});
				this.originalInput.on('itemRemoved', function(event) {
				    getData.call(that, callback);
					$('input[name="map-switcher"]').bootstrapSwitch('toggleState', true);
				});
			}
		};

	})();


	self.Map = function() {
		this.map = null;
		this.markers = {};
		this.infowindows = {};
		this.brusselsLat = 50.86674;
		this.brusselsLng = 4.35171;
	};

	self.Map.prototype = (function() {

		return {

			showMarker: function(id) {
				this.hideAllMarkers();

				var marker = this.markers[id],
					infowindow = this.infowindows[id];
				marker.setVisible(true);
				this.setCoords(marker.getPosition().lat(), marker.getPosition().lng());
				infowindow.open(this.map, marker);
			},

			showMarkers: function(list) {
				if (list === undefined || list === []) {
					for(var i in this.markers) {
						this.markers[i].setVisible(true);	
					}
				} else {
					for(var j in this.markers) {
						var value = (list.indexOf(parseInt(j)) > -1) ? true : false;
						this.markers[j].setVisible(value);	
					}
				}
				this.closeAllInfoWindows();
				this.setCoords();
			},

			hideAllMarkers: function() {
				for(var key in this.markers) {
					this.markers[key].setVisible(false);	
				}
				this.closeAllInfoWindows();
			},

			closeAllInfoWindows: function() {		
				for(var key in this.infowindows) {
					this.infowindows[key].close();	
				}
			},

			setCoords: function(lat, lng) {
				if (lat) {
			        this.map.setCenter(new google.maps.LatLng(lat, lng));
				}
				else {
			        this.map.setCenter(new google.maps.LatLng(this.brusselsLat, this.brusselsLng));
				}
			},

			_drawInfoBox: function(strip) {
				var contentString = '<div class="strip-info-window"><a style="color: black;" href="#strip-modal" data-id="' + strip.id + '" data-toggle="modal">';
				contentString += '<h4>' + strip.title + '</h4><p> by ' + strip.artist.name + '</p></a>';
				contentString += '<a class="portfolio-link" href="#strip-modal" data-id="' + strip.id + '" data-toggle="modal">';
				contentString += '<img style="width:150px;" src="' + DJANGO_MEDIA_URL + strip.image_small + '"></img></a></div>';
				contentString += '<span>@' + strip.address + '</span>';

				return contentString;
			},

			init: function(modalCallback) {
				var that = this;

		        function initialize() {
					var markerIcon = new google.maps.MarkerImage(
				        DJANGO_STATIC_URL + 'img/marker-default.png',
				        null, /* size is determined at runtime */
				        null, /* origin is 0,0 */
				        null, /* anchor is bottom center of the scaled image */
				        new google.maps.Size(32, 32)
				    );
		            var mapOptions = {
		            	center: new google.maps.LatLng(that.brusselsLat, that.brusselsLng),
		            	zoom: 13,
		            	scrollwheel: false
		        	};
			        that.map = new google.maps.Map(document.getElementById("map-canvas"),
			            mapOptions);
					
			        $.ajax({
			        	url: 'api/strips/',
			        	dataType: 'json'
			        })
			        .done(function(strips) {

			        	strips.forEach(function(strip) {

							var infowindow = new google.maps.InfoWindow({
							    content: that._drawInfoBox(strip)
							});

					        var myLatlng = new google.maps.LatLng(strip.lat, strip.lng);

							// To add the marker to the map, use the 'map' property
							var marker = new google.maps.Marker({
							    position: myLatlng,
							    map: that.map,
							    title: strip.title
							    // visible: false
							});
							google.maps.event.addListener(marker, 'click', function() {
							    infowindow.open(that.map, marker);
							});
							google.maps.event.addListener(infowindow, 'domready', function() {
						        $(".strip-info-window").find('a').on('click', function() {
						        	var id = $(this).attr('data-id');
						        	modalCallback.call(this, id);
						        });
							});
							that.markers[strip.id] = marker;
							that.infowindows[strip.id] = infowindow;

			        	});
			        });
		        }

		        google.maps.event.addDomListener(window, 'load', initialize);

			}
		};

	})();


	//-------------------------------------------------------
	self.showAllStrips = function() {

		for(var key in self.stripList) {
			self.stripList[key].show();
		}
	};

	function handleSearch(data) {
		// TODO: check data for null search term
		var idList = [];
		data.forEach(function(strip){
			idList.push(strip.id);
		});
		self.map.showMarkers(idList);
	}

	function handleStripClick(id) {
		$.ajax({
			url: 'api/strips/' + id,
			dataType: 'json',
			success: function(stripData) {
				self.modal.draw(stripData);
			},
			error: function() {
				self.Modal.draw();
			}
		});
	}

	self.init = function() {
		self.modal = new self.Modal($("#strip-modal"));
		self.stripList = {};
		$('.portfolio-item').each(function() {
			var strip = new self.Strip($(this));
			strip.onClick(handleStripClick);
			self.stripList[strip.id] = strip;
		});


		self.map = new self.Map();
		self.map.init(handleStripClick);

		self.search = new self.Search($(".map-switcher"));
		self.search.onSubmit(handleSearch);

		$("[name='map-switcher']").bootstrapSwitch({
			size: 'normal',
			onColor: 'primary',
			onText: '<span class="glyphicon glyphicon-map-marker"></span>',
			offText: '<span class="glyphicon glyphicon-map-marker"></span>',
			onSwitchChange: function(event, state) {
				if (state) {
					self.map.showMarkers();
					self.search.clear();
				}
				else {
					self.map.hideAllMarkers();
				}
			}
		});

		$(".portfolio-caption").find("a").on("click", function() {
			var id = $(this).attr("data-id");
			var curState = $('input[name="map-switcher"]').bootstrapSwitch('state');
			if (curState) {
				$('input[name="map-switcher"]').bootstrapSwitch('toggleState', false);
			}
			self.search.clear();
			self.map.showMarker(parseInt(id));
		});

		$(".search-filter").find(".glyphicon").on('mouseover', function() {
			$(this).removeClass('glyphicon-remove');
			$(this).addClass('glyphicon-remove-sign');
		});

		$(".search-filter").find(".glyphicon").on('mouseout', function() {
			$(this).removeClass('glyphicon-remove-sign');
			$(this).addClass('glyphicon-remove');
		});

	};


	return self;
}(Murals || {}));
