'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		$scope.authentication = Authentication;
		// This provides Authentication context.
		$scope.alerts = [
			{
				icon: 'glyphicon-user',
				color: 'btn-success',
				total: '20,408',
				description: 'total customers'
			},
			{
				icon: 'glyphicon-calendar',
				color: 'btn-primary',
				total: '8,432',
				description: 'upcoming event'
			},
			{
				icon: 'glyphicon-user',
				color: 'btn-success',
				total: '527',
				description: 'total customers'
			},
			{
				icon: 'glyphicon-record',
				color: 'btn-success',
				total: '85,000',
				description: 'emails sent'
			},
			{
				icon: 'glyphicon-eye-open',
				color: 'btn-warning',
				total: '268',
				description: 'follow ups required'
			},
			{
				icon: 'glyphicon-flag',
				color: 'btn-flag',
				total: '348',
				description: 'refferal to moderate'
			}];
	}
]);