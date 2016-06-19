angular.module('profileSearchApp')
	.service('myService', function(){
		return {
			getData: function(){
				return data || [];
			}
		};
	});


