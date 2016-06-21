'use strict';

angular.module('profileSearchApp')
	.directive('accordionPanel', function(){
		return {
			scope: { 
				name: '@', 
				picture: '@', 
				bioData:'@' 
			},
			template: '<span class="imgContainer"><img src="{{picture}}" class="displayImg"/></span><span><p class="strong desktop">{{name}}</p><p ng-bind="bioData"></p></span>'
		};
});