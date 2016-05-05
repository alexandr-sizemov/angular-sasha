import angular from 'angular';
import serviceProviderSelectorComponent from './serviceProviderSelector.component';

let serviceProviderSelectorModule = angular.module('serviceProviderSelector', [])

.component('serviceProviderSelector', serviceProviderSelectorComponent);

export default serviceProviderSelectorModule;
