(function (factory, jQuery, Zepto) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof exports === 'object' && typeof Meteor === 'undefined') {
		module.exports = factory(require('jquery'));
	} else {
		factory(jQuery || Zepto);
	}
}(function($){
	'use strict';

	$.fn.exists = function () {
		return this.length !== 0;
	};

	var initLeftSideMenu = function () {
		var $milOffCanvasBtn = $('.bi-list');
		var $dataTarget = $($milOffCanvasBtn.attr('data-bs-target') || null);

		if ($dataTarget.exists()) {
			if (outerWidth >= 1200) {
				if (!$dataTarget.hasClass('show')) {
					$milOffCanvasBtn.click();
				}
			}
		}
	};

	$(function(){
		initLeftSideMenu();
	});

	$(window).on('resize', function () {
		initLeftSideMenu();
	});

}, window.jQuery, window.Zepto));