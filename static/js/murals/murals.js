

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

	var handleSearch = function(data) {
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

	self.init = function() {
		self.stripList = {};
		$('.portfolio-item').each(function() {
			var strip = new self.Strip($(this));
			self.stripList[strip.id] = strip;
		});


		self.search = new self.Search($(".search-strip"));
		self.search.onSubmit(handleSearch);
	};

	return self;
}(Murals || {}));
