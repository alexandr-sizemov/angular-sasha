import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';

import bootstrapCss from './assets/less/bootstrap.less'
import icomoon from './assets/icomoon/styles.less'

import 'normalize.css';

angular.module('app', [
    uiRouter,
    ngAnimate,
    Common.name,
    Components.name
  ])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);
