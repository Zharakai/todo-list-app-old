/*global NodeList */
(function (window) {
	'use strict';

	/**
	 * @function qs
	 * @description Get element(s) by CSS selector querySelector
	 */
	window.qs = function (selector, scope) {
		return (scope || document).querySelector(selector);
	};
	/**
	 * @function qsa
	 * @description Get element(s) by CSS selector querySelectorAll
	 */
	window.qsa = function (selector, scope) {
		return (scope || document).querySelectorAll(selector);
	};

	/**
	 * @function $on
	 * @description addEventListener wrapper
	 * 
	 * @param {*} target 
	 * @param {*} type 
	 * @param {*} callback 
	 * @param {*} useCapture 
	 */
	window.$on = function (target, type, callback, useCapture) {
		target.addEventListener(type, callback, !!useCapture);
	};

	/**
	 * @function $delegate
	 * @description Attach a handler to event for all elements that match the selector,
	 * now or in the future, based on a root element
	 * 
	 * @param {*} target 
	 * @param {*} selector 
	 * @param {*} type 
	 * @param {*} handler 
	 */
	window.$delegate = function (target, selector, type, handler) {
		function dispatchEvent(event) {
			var targetElement = event.target;
			var potentialElements = window.qsa(selector, target);
			var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

			if (hasMatch) {
				handler.call(targetElement, event);
			}
		}

		// https://developer.mozilla.org/en-US/docs/Web/Events/blur
		var useCapture = type === 'blur' || type === 'focus';

		window.$on(target, type, dispatchEvent, useCapture);
	};

	/**
	 * @function $parent
	 * @description Find the element's parent with the given tag name:
	 * $parent(qs('a'), 'div');
	 * 
	 * @param {*} element 
	 * @param {string} tagName 
	 */
	window.$parent = function (element, tagName) {
		if (!element.parentNode) {
			return;
		}
		if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
			return element.parentNode;
		}
		return window.$parent(element.parentNode, tagName);
	};

	// Allow for looping on nodes by chaining:
	// qsa('.foo').forEach(function () {})
	NodeList.prototype.forEach = Array.prototype.forEach;
})(window);
