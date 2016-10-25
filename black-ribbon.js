/**
* BlackRibbon
*/
var BlackRibbon = (function () {
	this.cdn = 'https://storage.googleapis.com/black-ribbon.appspot.com/img/';
	this.getPosition = function () {
		// Get option from window['brb']
		var brb = window['brb'] || null;

		// Return x and y
		return {
			x: (brb.x === 'left' || brb.x === 'right') ? brb.x : 'left',
			y: (brb.y === 'top' || brb.y === 'bottom') ? brb.y : 'top'
		};
	};
	this.getImage = function(pos, src){
		return cdn + 'black_ribbon_' + pos.y + '_' + pos.x + '.png';
	};
	this.createBlackRibbon = function (pos) {
		// Create img tag
		var ribbon = document.createElement('img');
		
		// CSS coding by NUUNEOI.COM, Source: http://nuuneoi.com/blog/blog.php?read_id=884
		// Black ribbon by Jatuporn Jib Piyawarinwong, Source: https://www.facebook.com/jibbazee/posts/10153967020642895
		ribbon.src = getImage(pos);
		ribbon.style.position = 'fixed';
		ribbon.style.width = 70;
		ribbon.style.zIndex = '9999';
		
		// Set x position
		if(pos.x === 'right') {
			ribbon.style.right = 0;
		} else {
			ribbon.style.left = 0;
		}
		
		// Set y position
		if(pos.y === 'bottom') {
			ribbon.style.bottom = 0;
		} else {
			ribbon.style.top = 0;
		}

		return ribbon;
	};
	this.render = function () {
		// Get position
		var pos = getPosition();

		// Create img tag with ribbon
		var ribbon = createBlackRibbon(pos);

		// Append image to body
		document.body.appendChild(ribbon);
	};

	return {
		init: function () {
			render();
		}
	};
})();

// initialize Black Ribbon
BlackRibbon.init();
