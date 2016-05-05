import angular from 'angular';
import typeOfServiceComponent from './typeOfService.component';

let typeOfServiceModule = angular.module('typeOfService', [])

.component('typeOfService', typeOfServiceComponent);

export default typeOfServiceModule;
