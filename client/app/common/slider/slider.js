import angular from 'angular';
import sliderComponent from './slider.component';
import slider from 'angular-ui-bootstrap/src/carousel';

let sliderModule = angular.module('slider', [slider])

.component('slider', sliderComponent);

export default sliderModule;
