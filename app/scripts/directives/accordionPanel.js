'use strict';

angular.module('profileSearchApp')
	.directive('accordionPanel', function(){
		return {
			scope: { 
				name: '@', 
				picture: '@', 
				bioData:'@' 
			},
			template: '<p class="strong">{{name}}</p><span class="imgContainer"><img src="{{picture}}" class="displayImg"/></span><span ng-bind="bioData"></span>'
		};
});