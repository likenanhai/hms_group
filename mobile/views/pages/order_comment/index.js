import 'babel-polyfill';
import Vue from 'vue';
import Resource from 'vue-resource';
import App from './components/App';
import Wx from 'Wx';

Wx.onReady = () => {
  window.wx.hideMenuItems({
    menuList: ['menuItem:share:appMessage',
    'menuItem:share:timeline',
    'menuItem:share:qq',
    'menuItem:share:weiboApp',
    'menuItem:favorite',
    'menuItem:share:facebook',
    'menuItem:share:QZone',
    'menuItem:copyUrl', ],
  });
};

Vue.use(Resource);

new Vue(App).$mount('#app');
