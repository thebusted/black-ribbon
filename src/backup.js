var _init = false;
$('#body-app').on('change', function () {
	// Check has init, if yes return false
	if (!_init) {
		_init = !_init;
	} else {
		return false;
	}

	// Use LogMsg class
	LogMsg.init($('.container'), '<div class="col-xs-12 col-sm-12 col-md-12 hidden"></div>');

	// Init
	LogMsg.add('info', '<strong>Hello BOSS</strong>');
	LogMsg.add('info', 'Script has <strong>initialized</strong>. Ready to work');

	// Use Captcha class
//	Captcha.init();

	// Start
	var count = 0;
	var sleep = 5000;
	var delay = 500;
	var img = $('#imageCodeDisplayId');
	var btn = $('[ng-click="getCaptcha()"]');
	var frm = btn.closest('form');
	var reloading = null;

	var runReload = function (type) {
		reloading = window.setTimeout(function () {
			btn.click();
			LogMsg.add('success', '<strong>AUTOMATE</strong> click refresh <strong>' + count + '</strong> times.');

			count++;
		}, type ? sleep : delay);
	};

	var handleImage = function () {
		// Update running status
		running = true;

		// Check image on load
		img.on('load', function (e) {
			var src = e.target.src;

			// Log message
			LogMsg.add('info', 'Captcha image has <strong>changed</strong>.');

			// Check src status
			$.ajax(src).error(function () {
				// If reloading not null runReload
				if (reloading !== null) {
					runReload(false);
				}

				// Log message
				LogMsg.add('warning', '<strong>ERROR</strong> CAPTCHA IMAGE.');
			}).done(function (response, status, xhr) {
				// If reloading not null runReload
				if (reloading !== null) {
					var correct = xhr.getResponseHeader("content-type") === 'image/png' ? true : false;
					
					if(!correct) {
						LogMsg.add('warning', 'IMAGE <strong>CONTENT-TYPE</strong> IS NOT image/png.');
					}
					
					runReload(correct);
				}

				// Log message
				LogMsg.add('success', '<strong>CORRECT</strong> CAPTCHA IMAGE.');
			});
		}).on('error', function (e) {
			// Log message
			LogMsg.add('warning', '<strong>ON ERROR</strong> CAPTCHA IMAGE.');

			// If reloading not null runReload
			if (reloading !== null) {
				runReload(false);
			}
		});
	};

	var handleButton = function () {
		// Create button
		var btn_submit = frm.find('button:submit');
		var btn_auto_reload = $('<button type="button" class="btn btn-danger" style="margin-right:10px" disabled>START - Auto reload</button>');
		btn_submit.before(btn_auto_reload);
		LogMsg.add('success', 'Add <strong>START - Auto reload</strong> button');
		LogMsg.add('info', 'Click <strong>START - Auto reload</strong> to use automate reload.');

		// Start auto reload captcha
		btn_auto_reload.prop('disabled', false);

		// Onclick auto reload
		btn_auto_reload.on('click', function (e) {
			var me = $(e.target);

			if (reloading !== null) {
				me.text('START - Auto reload');

				// Clear interval and reloading
				clearTimeout(reloading);
				reloading = null;

				LogMsg.add('warning', '<strong>AUTO RELOAD CAPTCHA</strong> HAS STOPPED.');
			} else {
				me.text('STOP - Auto reload');

				// Run interval
				runReload();
				LogMsg.add('warning', '<strong>START AUTO RELOAD CAPTCHA</strong>.');
			}
		});

		// Onclick getCaptcha()
		btn.on('click', function () {
			LogMsg.add('info', 'Call main function <strong>getCaptcha()</strong>.');
		});

		// Start auto reload itself
		window.setTimeout(function(){
			btn_auto_reload.click();
		}, 5000);
	};

	// Init
	LogMsg.add('info', '<strong>Captcha</strong> has ready to reload.');

	// Handle
	handleButton();
	handleImage();

	// Start count
	count = 1;
});

// Log message
var LogMsg = (function () {
	var logBox = null;

	return {
		init: function (target, html) {
			// Insert LogMsg box
			logBox = $(html);
			target.append(logBox);

			// Set css style
			var bottom = {
				borderTop: '1px solid #ddd',
				padding: 15,
				height: 190,
				overflow: 'auto'
			};
			var right = {
				backgroundColor: 'white',
				borderLeft: '1px solid #ddd',
				padding: 15,
				height: '100%',
				overflow: 'auto',
				position: 'absolute',
				right: 0,
				top: 0,
				bottom: 0,
				left: '75%',
				zIndex: 9999999,
				width: 'auto'
			};

			// Rewrite css
			var useCss = $(window).width() > 1200 ? right : bottom;
			logBox.css(useCss).removeClass('hidden');

			// On resize
			var resizing = null;
			$(window).resize(function () {
				clearTimeout(resizing);
				resizing = window.setTimeout(function () {
					var width = $(window).width();

					if (width > 1200) {
						logBox.removeAttr('style');
						logBox.css(right);
					} else {
						logBox.removeAttr('style');
						logBox.css(bottom);
					}
				}, 200);
			});
		},
		add: function (type, msg) {
			var item = $('<div class="alert alert-' + type + ' small"></div>');
			item.css({
				marginBottom: 8,
				padding: '5px 10px'
			});

			// Check logBox not null
			if (logBox !== null) {
				item.html(msg);

				// Prepend
				logBox.prepend(item);
			}
		}
	};
})();
