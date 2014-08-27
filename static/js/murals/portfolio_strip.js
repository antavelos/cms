

var Portfolio = (function(self) {

	"use strict";

	/**
	 * [drawPortfolioItem description]
	 * @param  {[type]} id     [description]
	 * @param  {[type]} image  [description]
	 * @param  {[type]} title  [description]
	 * @param  {[type]} artist [description]
	 * @return {[type]}        [description]
	 */
	self.drawPortfolioItem = function(id, image, title, artist) {
		var mainDiv = $("<div></div>").addClass("col-md-4 col-sm-6 portfolio-item");
		var link = $('<a href="#portfolioModal' + id + '" data-toggle="modal"></a>').addClass("portfolio-link");
		var subDiv = $("<div></div>").addClass("portfolio-hover");
		var subSubDiv = $("<div></div>").addClass("portfolio-hover-content");
		var i = $("<i></i>").addClass("fa fa-plus fa-3x");
		var img = $("<img></img>").addClass("img-responsive");
		img.attr("src", image);

		var marker = $('<a href="#about"><span class="glyphicon glyphicon-map-marker"></span></a>').addClass("page-scroll strip-marker");
		marker.attr("data-id", id);
		marker.attr("title", "See the mural on the map");
		var captionDiv = $("<div></div>").addClass("portfolio-caption");
		var titleCap = $("<h4>" + title + "</h4>");
		var artistCap = $("<p>by " + artist + "</p>");

		mainDiv.append(link);
		link.append(subDiv);
		subDiv.append(subSubDiv);
		subSubDiv.append(i);
		link.append(img);
		mainDiv.append(captionDiv);
		captionDiv.append(titleCap);
		captionDiv.append(artistCap);
		captionDiv.append(marker);

		$(".portfolio-stripes").append(mainDiv);
	};

	/**
	 * [drawModal description]
	 * @param  {[type]} id     [description]
	 * @param  {[type]} image  [description]
	 * @param  {[type]} title  [description]
	 * @param  {[type]} artist [description]
	 * @param  {[type]} text   [description]
	 * @return {[type]}        [description]
	 */
	self.drawModal = function(id, image, title, artist, text) {
		var mainDiv = $("<div></div>").addClass("portfolio-modal modal fade");
		mainDiv.attr("id", "portfolioModal" + id);
		mainDiv.attr("tabindex", "-1");
		mainDiv.attr("role", "dialog");
		mainDiv.attr("aria-hidden", "true");
		var modalContent = $("<div></div>").addClass("modal-content");
		var modalClose = $("<div></div>").addClass("close-modal");
		modalClose.attr("data-dismiss", "modal");
		var lr = $("<div></div>").addClass("lr");
		var rl = $("<div></div>").addClass("rl");

		var container = $("<div></div>").addClass("container");
		var row = $("<div></div>").addClass("row");
		var col = $("<div></div>").addClass("col-lg-8 col-lg-offset-2");
		var body = $("<div></div>").addClass("modal-body");
		var titleEl = $("<h2>" + title + "</h2>");
		var artistEl = $("<p> by " + artist + "</p>").addClass("item-intro text-muted");
		var imageEl = $("<img></img>").addClass("img-responsive img-centered");
		imageEl.attr("src", image);
		var textEl = $("<p>" + text + "</p>");
		var closeButton = $("<button><i class='fa fa-times'></i> Close</button>").addClass("btn btn-primary");
		closeButton.attr("type", "button");
		closeButton.attr("data-dismiss", "modal");

		mainDiv.append(modalContent);
		modalContent.append(modalClose);
		modalClose.append(lr);
		lr.append(rl);

		modalContent.append(container);
		container.append(row);
		row.append(col);
		col.append(body);
		body.append(titleEl);
		body.append(artistEl);
		body.append(imageEl);
		body.append(textEl);
		body.append(closeButton);

		$("body").append(mainDiv);
	};

	return self;
}(Portfolio || {}));
