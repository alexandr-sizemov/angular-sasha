import angular from 'angular';
import uiRouter from 'angular-ui-router';
import accordion from 'angular-ui-bootstrap/src/accordion';
import priceboxComponent from './pricebox.component';

let priceboxModule = angular.module('pricebox', [
  uiRouter,
  accordion
])

.component('pricebox', priceboxComponent);

export default priceboxModule;
