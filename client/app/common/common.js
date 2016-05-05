import angular from 'angular';
import Slider from './slider/slider';
import Pricebox from './pricebox/pricebox';
import ServiceProviderSelector from './serviceProviderSelector/serviceProviderSelector';
import TypeOfService from './typeOfService/typeOfService';

let commonModule = angular.module('app.common', [
  Slider.name,
  ServiceProviderSelector.name,
  Pricebox.name,
  TypeOfService.name
]);

export default commonModule;
