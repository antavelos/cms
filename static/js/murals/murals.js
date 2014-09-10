

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
		this.id = parseInt(el.find('a').attr('data-id'));
	};

	self.Strip.prototype = (function() {

		return {
			constructor: self.Strip,

			onClick: function(callback) {
				var that = this;

				this.element.on('click', function() {
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
	}

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
					content +=                      '<p class="item-intro text-muted">by ' + strip.artist + '</p>';
					content +=                      '<img class="img-responsive img-centered" src="' + DJANGO_MEDIA_URL + strip.image_big + '" alt="">';
					content +=                      '<p>' + strip.text + '</p>';
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
		this.input = el.find("input");
		this.button = el.find("a");
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
				return this.input.val();
			},

			onSubmit: function(callback) {
				var that = this;

				this.button.on('click', function(e) {
					getData.call(that, callback);
				});
			}
		};

	})();

	//-------------------------------------------------------
	self.stripList = null;

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

		self.showAllStrips();
		for(var key in self.stripList) {
			if (idList.indexOf(parseInt(key)) === -1) {
				self.stripList[key].hide();
			}
		}
	};

	function handleStripClick(id) {
		$.ajax({
			url: 'api/strips/' + id + '/',
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


		self.search = new self.Search($(".search-strip"));
		self.search.onSubmit(handleSearch);
	};

	return self;
}(Murals || {}));
