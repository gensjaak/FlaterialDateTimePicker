var initKeysEvents = function () {
	var $master = $('#flaterialDateTimePicker');
	var $dayStr = $master.find('.dayStr'),
		$dayInt = $master.find('.dayInt'),
		$month = $master.find('.month'),
		$year = $master.find('.year'),
		$hours = $master.find('.hours'),
		$hours = $master.find('.hours'),
		$mins = $master.find('.mins');

	var BOTTOM = 40,
		LEFT = 37,
		RIGHT = 39,
		TOP = 38;

	var $items = $master.find('.calendar-body .calendar-item');

	var isOriginalEvent = function (event) { return event.hasOwnProperty('originalEvent') && event.originalEvent.isTrusted; };
	var calendarSelectItem = function (x, y) {
		if (x <= 7 && x >= 1 && y <= 6 && y >= 1) {
			var $calendarBody = $master.find('li.calendar-body'),
				$calendarHeader = $master.find('li.calendar-header');

			$calendarBody.find('.calendar-item').removeClass('active');
			$calendarHeader.find('.calendar-item').removeClass('active');

			$($($calendarBody.children()[y-1]).children()[x-1]).addClass('active');
			$($($calendarHeader.children()[0]).children()[x-1]).addClass('active');
		}
	};

	var tx=1, ty=1, xMax=5, yMax=4;
	$(document).on('keydown', function (e) {
		if (isOriginalEvent(e) && [TOP, BOTTOM, LEFT, RIGHT].indexOf(e.keyCode) > -1) {
			if (e.keyCode == TOP) {
				if (ty-1>=1) calendarSelectItem(tx,--ty);
			}
			if (e.keyCode == BOTTOM) {
				if (ty+1<=yMax) calendarSelectItem(tx,++ty);
			}
			if (e.keyCode == LEFT) {
				if (tx-1>=1) calendarSelectItem(--tx,ty);
				else if (tx!=1 || ty!=1) {
					tx=xMax;
					calendarSelectItem(tx,--ty);
				}
			}
			if (e.keyCode == RIGHT) {
				if (tx+1<=xMax) calendarSelectItem(++tx,ty);
				else if (tx!=xMax || ty!=yMax) {
					tx=1;
					calendarSelectItem(tx,++ty);
				}
			}
		}
	});

	$items.each(function (key, el, $el = $(el)) {
		$el.on('click', function (e) {
			if (isOriginalEvent(e)) {
				$('.calendar-body .calendar-item').removeClass('active');
				$(this).addClass('active');
			}
		});
	});
}();