/**
* Adblock Controller
*/
var ControllerPrototype = require("controller.prototype");
var components = require("marionette");

module.exports = ControllerPrototype.extend({
	name: "adblock",
	type: "component",
	initialize: function(options) {
		// @see controller.prototype
		this.inherit(options);
	}
});

