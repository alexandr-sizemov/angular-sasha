import template from './slider.html';
import controller from './slider.controller';
import './slider.styl';

let sliderComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm'
};

export default sliderComponent;
