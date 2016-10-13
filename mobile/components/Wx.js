import scriptjs from 'scriptjs';

const Wx = {};
export default Wx;

scriptjs('//res.wx.qq.com/open/js/jweixin-1.1.0.js', () => {
  const _wxJSAPI = window._wxJSAPI || {};
  const Share = window.Share || {};
  window._paq = window._paq || [];

  // _wxJSAPI.debug = true;//__DEBUG__;
  _wxJSAPI.jsApiList = [
    'onMenuShareTimeline',
    'onMenuShareAppMessage',
    'onMenuShareQQ',
    'onMenuShareWeibo',
    'onMenuShareQZone',
    'startRecord',
    'stopRecord',
    'onVoiceRecordEnd',
    'playVoice',
    'pauseVoice',
    'stopVoice',
    'onVoicePlayEnd',
    'uploadVoice',
    'downloadVoice',
    'chooseImage',
    'previewImage',
    'uploadImage',
    'downloadImage',
    'translateVoice',
    'getNetworkType',
    'openLocation',
    'getLocation',
    'hideOptionMenu',
    'showOptionMenu',
    'hideMenuItems',
    'showMenuItems',
    'hideAllNonBaseMenuItem',
    'showAllNonBaseMenuItem',
    'closeWindow',
    'scanQRCode',
    'chooseWXPay',
    'openProductSpecificView',
    'addCard',
    'chooseCard',
    'openCard',
  ];

  function initShare() {
    const trackEvent = {
      onMenuShareTimeline: '[微信公众平台分享][朋友圈]',
      onMenuShareAppMessage: '[微信公众平台分享][分享给朋友]',
      onMenuShareQQ: '[微信公众平台分享][QQ]',
      onMenuShareWeibo: '[微信公众平台分享][Weibo]',
      onMenuShareQZone: '[微信公众平台分享][QZone]',
    };

    [
      'onMenuShareTimeline',
      'onMenuShareAppMessage',
      'onMenuShareQQ',
      'onMenuShareWeibo',
      'onMenuShareQZone',
    ].forEach(fn => {
      if (typeof window.wx[fn] === 'function') {
        window.wx[fn]({
          title: Share.Title,
          desc: Share.Content,
          link: Share.Url,
          imgUrl: Share.ImageUrl,
          success() {
            window._paq.push(['trackEvent', trackEvent[fn], Share.Title]);
            if (typeof window.wx.onShareSuccess === 'function') {
              window.wx.onShareSuccess();
            }

            if (typeof Wx.onShareSuccess === 'function') {
              Wx.onShareSuccess();
            }
          },

          cancel() {
            if (typeof window.wx.onShareCancel === 'function') {
              window.wx.onShareCancel();
            }

            if (typeof Wx.onShareCancel === 'function') {
              Wx.onShareCancel();
            }
          },
        });
      }
    });
  }

  window.wx.config(_wxJSAPI);
  window.wx.ready(() => {
    window._wxReady = true;
    initShare();
    if (typeof Wx.onReady === 'function') {
      Wx.onReady();
    }
  });
  window.wx.reInitShare = initShare;
});
