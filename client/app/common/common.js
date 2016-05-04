import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import Pricebox from './pricebox/pricebox';

let commonModule = angular.module('app.common', [
  Navbar.name,
  Hero.name,
  User.name,
  Pricebox.name
]);

export default commonModule;
