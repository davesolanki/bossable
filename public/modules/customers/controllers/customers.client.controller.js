'use strict';

var customersApp = angular.module('customers');

// Customers controller
customersApp.controller('CustomersController', ['$scope', '$stateParams', 'Authentication', 'Customers', '$modal', '$log',
	function($scope, $stateParams, Authentication, Customers, $modal, $log) {
				this.authentication = Authentication;

				this.customers = Customers.query();

			this.modalCreate = function(size) {
				var modalInstance = $modal.open({
					templateUrl: 'modules/customers/views/create-customer.client.md.html',
					controller: function ($modalInstance, $scope) {
						$scope.ok = function(createCustomerForm) {
							if (createCustomerForm.$valid) {
								$modalInstance.close();
							}
						};
						$scope.cancel = function() {
							$modalInstance.dismiss('cancel');
						};
					},
					size: size
				});
				
				modalInstance.result.then(function(selectedCustomer) {
				}, function() {
						$log.info('Modal dismissed at' + new Date());
					} 
				);
			};

			this.modalUpdate = function(size, selectedCustomer) {
				var modalInstance = $modal.open({
					templateUrl: 'modules/customers/views/edit-customer.client.md.html',
					controller: function ($modalInstance, $scope, customer) {
						$scope.customer = customer;
						$scope.ok = function(updateCustomerForm) {
							if (updateCustomerForm.$valid) {
								$modalInstance.close($scope.customer);
							}
						};
						$scope.cancel = function() {
							$modalInstance.dismiss('cancel');
						};
					},
					size: size,
					resolve: {
						customer: function() {
							return selectedCustomer;
						}
					}
				});
				
				modalInstance.result.then(function(selectedCustomer) {}, function() {
						$log.info('Modal dismissed at' + new Date());
					} 
				);
			};

		// Remove existing Customer
		this.remove = function(customer) {
			if ( customer ) {customer.$remove();

				for (var i in this.customers) {
					if (this.customers [i] === customer) {
						this.customers.splice(i, 1);
					}
				}
			} else {
				this.customer.$remove(function(){

				});
			}
		};
}]);

customersApp.directive('customerList', ['Customers', 'Notify', function(Customers, Notify){
	return {
		restrict: 'E',
		transclude: true,
		templateUrl: 'modules/customers/views/list-customer.client.tpl.html',
		link: function (scope, element, attr) {
			Notify.getMsg('New Customer', function (event, data) {
				scope.customersCtrl.customers = Customers.query();
			});
		}
	};
}]);

customersApp.controller('CustomerCreateController', ['$scope', 'Customers', 'Notify',
	function($scope, Customers, Notify) {

		this.create = function() {
			// Create new Customer object
			var customer = new Customers ({
				firstname: this.firstname,
				surname: this.surname,
				suburb: this.suburb,
				country: this.country,
				email: this.email,
				reffered: this.reffered,
				channel: this.channel
			});
			// Redirect after save
			customer.$save(function(response) {

				Notify.sendMsg('New Customer', {'id': response._id});

			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};


}]);

customersApp.controller('CustomersUpdateController', ['$scope', 'Customers',
	function($scope, Customers) {

		this.update = function(updatedCustomer) {
			var customer = updatedCustomer;

			customer.$update(
				function() {

				},
				function(errorResponse) {
					$scope.error = errorResponse.data.message;
				}
			);
		};
		
}]);





