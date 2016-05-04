import angular from 'angular';
import uiRouter from 'angular-ui-router';
import priceboxComponent from './pricebox.component';

let priceboxModule = angular.module('pricebox', [
  uiRouter
])

.component('pricebox', priceboxComponent);

export default priceboxModule;
